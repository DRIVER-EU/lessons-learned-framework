import m, { FactoryComponent } from 'mithril';
import { FlatButton } from 'mithril-materialized';
import { deepCopy, Form, IInputField, LayoutForm, SlimdownView } from 'mithril-ui-form';
import { IEvent, IMultimedia, IPublication } from '../../models';
import { EventsSvc } from '../../services';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { llf } from '../../template/llf';
import { capitalizeFirstLetter, formatOptional } from '../../utils';
import { CircularSpinner } from '../ui/preloader';
import { ILesson } from '../../models/lesson';

// const toGeoJSON = (g: GeoJSON.FeatureCollection) => {
//   return geoJSON(g);
// };

/** Create a resolver that translates an ID and value (or values) to a human readable representation */
export const labelResolver = (form: Form) => {
  const createDict = (ff: IInputField[], label = '') => {
    const d = ff
      .filter(f => f.type !== 'section' && f.type !== 'md')
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
    if (!dict.hasOwnProperty(id) || typeof value === 'undefined') {
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
          .filter(v => typeof v !== 'undefined');
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
    const { editors } = event;
    return editors
      ? `<p class="center-align"><i>by ${editors
          .map(e => `${e.name}${formatOptional({ brackets: true }, e.role, e.organisation, e.country)}`)
          .join(', ')}</i></p>`
      : '';
  };

  const showOrganisations = (event: Partial<IEvent>) => {
    const { organisations } = event;
    return organisations
      ? organisations
          .map(
            org =>
              `- ${org.name}${formatOptional({ brackets: true }, org.type, org.country)}${p(
                org.info,
                `<br>${org.info}`
              )}`
          )
          .join(', ')
      : '';
  };

  const showLessons = (event: Partial<IEvent>) => {
    const { lessons } = event;
    const obs = ({ effectiveness, efficiency, responderHealthAndSafety }: ILesson) =>
      `Observation: the current effectiveness is '${effectiveness}', its efficiency '${efficiency}' and the Health & Safety risks for responders are '${responderHealthAndSafety}'.`;
    const createLesson = (les: ILesson, index: number) => {
      const {
        name,
        solutionType,
        expectedImprovementsInfo,
        lesson,
        cmFunction,
        victimsImprovements,
        materialDamageImprovements,
        ciLossImprovements,
        socEcoDisruptionImprovements,
        environmentalDegradationImprovements,
      } = les;
      return `
###### Lesson ${index + 1}: ${p(name, name)}${formatOptional({ brackets: true, prepend: 'addressing CM function ' }, cmFunction)}

${obs(les)}

${p(solutionType, `A solution can be found in the ${solutionType}:`)} ${p(lesson, lesson)}
Once the solution has been implemented, the expected improvements are: ${p(
        expectedImprovementsInfo,
        expectedImprovementsInfo
      )}
${p(victimsImprovements, `- Number of victims: ${victimsImprovements}`)}
${p(materialDamageImprovements, `- Material damage: ${materialDamageImprovements}`)}
${p(ciLossImprovements, `- Loss of services: ${ciLossImprovements}`)}
${p(socEcoDisruptionImprovements, `- Social/economic: ${socEcoDisruptionImprovements}`)}
${p(environmentalDegradationImprovements, `- Environmental degradation: ${environmentalDegradationImprovements}`)}
`;
    };
    return lessons ? lessons.map(createLesson).join(', ') : '';
  };

  const formatUrl = (url?: string) => (url ? `[${url}](${url})` : '');

  const showSources = (event: Partial<IEvent>) => {
    const { publications, multimedia } = event;

    const formatPublication = (p: IPublication) =>
      `${p.title}${
        p.yearOfPublication
          ? ` (${p.yearOfPublication}${p.dissemination ? `, ${p.dissemination}` : ''})`
          : `${p.dissemination ? `, ${p.dissemination}` : ''}`
      }${p.author ? `, ${p.author}` : ''}${p.url ? `, ${formatUrl(p.url)}` : ''}${formatOptional(
        { brackets: true, prepend: 'original title: ' },
        p.orgTitle,
        /other/i.test(p.language || '') ? p.otherLanguage : p.language
      )}`;

    const formatMultimedia = (p: IMultimedia) =>
      `${formatUrl(p.url)}${p.yearOfPublication ? ` (${p.yearOfPublication})` : ''}${p.desc ? `, ${p.desc}` : ''}${
        p.owner ? ` (owned by ${p.owner})` : ''
      }`;

    const ps = publications ? publications.map((p, i) => `${i + 1}. ${formatPublication(p)}`).join('\n') : '';
    const ms = multimedia ? multimedia.map((mu, i) => `${i + 1}. ${formatMultimedia(mu)}`).join('\n') : '';

    console.log(ps);

    return ps || ms
      ? `
##### Publications
${ps}

##### Multimedia sources
${ms}
`
      : '';
  };

  const resolveObj = <T>(obj: any, parent = ''): T | undefined => {
    const { resolver } = state;

    if (!obj || (typeof obj === 'object' && Object.keys(obj).length === 0)) {
      return undefined;
    }
    if (obj instanceof Array) {
      return obj.map(o => resolveObj(o, parent)) as any;
    } else {
      const resolved = {} as { [key: string]: any };
      Object.keys(obj).forEach(key => {
        const fullKey = parent ? `${parent}.${key}` : key;
        const value = obj[key as keyof IEvent];
        if (typeof value === 'number' || typeof value === 'boolean') {
          resolved[key] = value;
        } else if (typeof value === 'string') {
          const r = resolver(fullKey, value);
          if (r) {
            resolved[key] = r;
          }
        } else if (value instanceof Array) {
          if (typeof value[0] === 'string' || value[0] === null) {
            const r = resolver(fullKey, value);
            if (r) {
              resolved[key] = r;
            }
          } else {
            resolved[key] = resolveObj(value, key);
          }
        } else if (typeof value === 'object') {
          resolved[key] = value;
        }
      });
      return resolved as T;
    }
  };

  /** Print optional */
  const p = (val: string | number | Date | undefined, output: string) => (val ? output : '');

  /** Print a list: a, b and c */
  const l = (val: undefined | string | string[]) => {
    if (!val) {
      return '';
    }
    if (val instanceof Array) {
      const [last, oneButLast, ...items] = val.reverse();
      return [...items, `${oneButLast} and ${last}`].filter(Boolean).join(', ');
    } else {
      return val;
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
      // console.log(JSON.stringify(event, null, 2));
      console.log(JSON.stringify(resolveObj(event), null, 2));
      const resolved = resolveObj<IEvent>(event);
      if (!loaded) {
        return m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' });
      }
      if (!resolved) {
        return undefined;
      }
      const {
        name,
        eventType,
        desc = '',
        locationText = '',
        date: startDate,
        initialIncident,
        otherIncidents,
        societalSectors,
        victims,
        damage,
        lossOfServices,
        disruption,
        environment,
        geo,
        international,
        scale,
        memberCountries,
        scaleExplanation = '',
        cmFunctions,
        location,
      } = resolved;
      const oi = l(otherIncidents);
      const ss = l(societalSectors);
      const mc = l(memberCountries);
      const cm = l(cmFunctions);
      const md = `
<h4 class="center-align">${name}</h4>

${showEditors(resolved)}

##### Event description
${p(eventType, `_Type of event: ${eventType}`)}${p(startDate, `, on ${new Date(startDate).toDateString()}`)}${p(
        locationText,
        ` at ${locationText}._`
      )}

${desc}

##### Incident characteristics

The incident was caused initially by a${
        initialIncident && /aeiuo/.test(initialIncident) ? 'n' : ''
      } **${initialIncident}** ${formatOptional({ prepend: ', causing the following other incidents: _' }, oi)}_. ${p(
        ss,
        `This affected several societal sectors, notably _${ss}_. `
      )}As a consequence, the:
${p(victims, `- Number of victims: ${victims}`)}
${p(damage, `- Material damage: ${damage}`)}
${p(lossOfServices, `- Loss of services: ${lossOfServices}`)}
${p(disruption, `- Social/economic: ${disruption}`)}
${p(environment, `- Environmental degradation: ${environment}`)}

##### Geographical characteristics

The event took place ${p(geo, geo)}. Internationally, the dimension was ${p(international, international)} at a ${p(
        scale,
        scale
      )} scale${formatOptional({ prepend: ', involving ' }, mc)}.

${scaleExplanation}`;

      const md2 = `##### Involved organisations

The following organisations are involved in executing CM functions:
${showOrganisations(resolved)}

##### Critical Crisis Management functions

The most essential crisis management functions for effectively handling this event were ${p(cm, cm)}.

##### Lessons
${showLessons(resolved)}

${showSources(resolved)}
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
        m('.row', [
          m('.col.s12', m(SlimdownView, { md })),
          location
            ? m(LayoutForm, {
                form: [{ type: 'map', id: 'location' }] as Form,
                obj: event,
                disabled: true,
                context: {},
              })
            : undefined,
          m('.col.s12', m(SlimdownView, { md: md2 })),
        ]),
      ];
    },
  };
};
