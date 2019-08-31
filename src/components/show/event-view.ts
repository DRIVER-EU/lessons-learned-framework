import m, { FactoryComponent } from 'mithril';
import { FlatButton } from 'mithril-materialized';
import { deepCopy, Form, labelResolver, LayoutForm, SlimdownView } from 'mithril-ui-form';
import { IEvent, IMultimedia, IPublication } from '../../models';
import { EventsSvc } from '../../services';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { llf } from '../../template/llf';
import { formatOptional } from '../../utils';
import { CircularSpinner } from '../ui/preloader';
import { ILesson } from '../../models/lesson';
import { FormattedEvent } from '../../services/format-event';

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
      console.log(JSON.stringify(resolveObj(event), null, 2));
      const resolved = resolveObj<IEvent>(event);
      if (!loaded) {
        return m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' });
      }
      if (!resolved) {
        return undefined;
      }
      return [
        m(
          '.row',
          m(
            '.col.s12',
            m(FlatButton, {
              label: 'Edit document',
              iconName: 'edit',
              className: 'right hide-on-small-only do-not-print',
              onclick: () => dashboardSvc.switchTo(Dashboards.EDIT, { id: event.$loki }),
            })
          )
        ),
        m(FormattedEvent, { event: resolved })
      ];
    },
  };
};
