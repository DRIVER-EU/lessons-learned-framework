import m, { FactoryComponent } from 'mithril';
import { FlatButton } from 'mithril-materialized';
import { deepCopy, Form, IInputField, SlimdownView } from 'mithril-ui-form';
// import { deepCopy, labelResolver, SlimdownView } from 'mithril-ui-form';
import { IEvent, IPublication } from '../../models';
import { EventsSvc } from '../../services';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { llf } from '../../template/llf';
import { capitalizeFirstLetter, formatOptional } from '../../utils';
import { CircularSpinner } from '../ui/preloader';

/** Create a resolver that translates an ID and value (or values) to a human readable representation */
export const labelResolver = (form: Form) => {
  const createDict = (ff: IInputField[], label = '') => {
    const d = ff
      .filter(f => f.type !== 'section')
      .reduce(
        (acc, cur) => {
          const fieldId = (label ? `${label}.` : '') + cur.id;
          const type = cur.type || (cur.options && cur.options.length > 0 ? 'select' : 'text');
          if (typeof type === 'string') {
            acc[fieldId] = cur;
          } else {
            acc = { ...acc, ...createDict(type, fieldId) };
          }
          return acc;
        },
        {} as { [key: string]: IInputField }
      );
    return d;
  };
  const dict = createDict(form);
  return (id: string, value?: string | string[]) => {
    if (typeof value === 'undefined') {
      return '';
    }
    if (!dict.hasOwnProperty(id)) {
      return undefined;
    }
    const ff = dict[id];
    const values = value instanceof Array ? value.filter(v => v !== null && v !== undefined) : [value];
    const type = ff.type || (ff.options ? 'options' : 'none');
    switch (type) {
      default:
        return value;
      case 'radio':
      case 'select':
      case 'options':
        return values
          .map(v =>
            ff
              .options!.filter(o => o.id === v)
              .map(o => o.label || capitalizeFirstLetter(o.id))
              .shift()
          )
          .join(', ');
    }
  };
};

export const EventView: FactoryComponent = () => {
  const state = {
    event: {} as Partial<IEvent>,
    loaded: false,
    resolver: labelResolver(llf),
  };

  const showEditors = (event: Partial<IEvent>) => {
    const { resolver } = state;
    const { editors } = event;
    return editors
      ? `<p class="center-align"><i>Editor${editors.length === 1 ? '' : 's'}: ${editors
          .map(
            e =>
              `${e.name}${
                e.country || e.role
                  ? ` (${e.role ? `${e.role}` : ''}${
                      e.country ? `${e.role ? ', ' : ''}${resolver('editors.country', e.country)}` : ''
                    })`
                  : ''
              }`
          )
          .join(', ')}</i></p>`
      : '';
  };

  const showSources = (event: Partial<IEvent>) => {
    const { resolver } = state;
    const { publications } = event;

    const formatPublication = (p: IPublication) =>
      `${p.title}${formatOptional(
        true,
        p.orgTitle,
        p.language === 'other' ? p.otherLanguage : (resolver('publications.language', p.language) as string)
      )}`;
    return publications ? publications.map((p, i) => `${i + 1}. ${formatPublication(p)}`).join('\n') : '';
  };

  const resolveObj = (obj: any, parent = ''): any => {
    const { resolver } = state;

    if (!obj || (typeof obj === 'object' && Object.keys(obj).length === 0)) {
      return undefined;
    }
    if (obj instanceof Array) {
      return obj.map(o => resolveObj(o, parent));
    } else {
      const resolved = {} as { [key: string]: any };
      Object.keys(obj).forEach(k => {
        const key = parent ? `${parent}.${k}` : k;
        const value = obj[key as keyof IEvent];
        if (typeof value === 'number' || typeof value === 'boolean') {
          resolved[key] = value;
        } else if (typeof value === 'string') {
          resolved[key] = resolver(key, value);
        } else if (value instanceof Array) {
          if (typeof value[0] === 'string') {
            resolved[key] = resolver(key, value as string[]);
          } else {
            resolved[key] = resolveObj(value);
          }
        }
        // if (value instanceof Array && value.repeat) {
        //   value.map(v => Object.keys(v).forEach(k => console.log('  ', k, resolver(`${key}.${k}`, v[k]))));
        // } else {
        //   console.log(key, resolver(key, value));
        // }
      });
      return resolved;
    }
  };

  return {
    oninit: () => {
      return new Promise(async (resolve, reject) => {
        const event = await EventsSvc.load(m.route.param('id')).catch(r => reject(r));
        state.event = event ? deepCopy(event) : ({} as IEvent);
        state.loaded = true;
        resolve();
      });
    },
    view: () => {
      const { event, loaded } = state;
      console.log(JSON.stringify(event, null, 2));
      console.log(JSON.stringify(resolveObj(event), null, 2));
      if (!loaded) {
        return m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' });
      }
      const { name, desc } = event;

      const md = `
<h4 class="center-align">${name}</h4>

${showEditors(event)}

${desc}

${showSources(event)}
      `;
      return [
        m(
          '.row',
          m(
            '.col.s12',
            m(FlatButton, {
              label: 'Edit document',
              iconName: 'edit',
              className: 'right hide-on-small-only',
              onclick: () => dashboardSvc.switchTo(Dashboards.EDIT, { id: event.$loki }),
            })
          )
        ),
        m('.row', m('.col.s12', m(SlimdownView, { md }))),
      ];
    },
  };
};
