import m, { FactoryComponent } from 'mithril';
import { FlatButton, InputCheckbox } from 'mithril-materialized';
import { deepCopy, labelResolver } from 'mithril-ui-form';
import { IEvent } from '../../models';
import { EventsSvc } from '../../services';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { FormattedEvent } from '../../services/format-event';
import { Auth } from '../../services/login-service';
import { llf } from '../../template/llf';
import { CircularSpinner } from '../ui/preloader';

export const EventView: FactoryComponent = () => {
  const state = {
    event: {} as Partial<IEvent>,
    loaded: false,
    resolveObj: labelResolver(llf),
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
      const { event, loaded, resolveObj } = state;
      // console.log(JSON.stringify(event, null, 2));
      const resolved = resolveObj<IEvent>(event);
      // console.log(JSON.stringify(resolved, null, 2));
      if (!loaded) {
        return m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' });
      }
      if (!resolved) {
        return undefined;
      }
      return [
        Auth.canEdit(event)
          ? m('ul.do-not-print', [
              m(
                'li',
                m(FlatButton, {
                  label: 'EDIT EVENT',
                  iconName: 'edit',
                  className: 'right hide-on-small-only',
                  onclick: () => dashboardSvc.switchTo(Dashboards.EDIT, { id: event.$loki }),
                })
              ),
              m(
                'li',
                m(InputCheckbox, {
                  className: 'left margin-top7',
                  checked: event.published,
                  onchange: async checked => {
                    event.published = checked;
                    await EventsSvc.save(event);
                  },
                  label: 'PUBLISH EVENT',
                })
              ),
            ])
          : undefined,
        m(FormattedEvent, { event: resolved }),
      ];
    },
  };
};
