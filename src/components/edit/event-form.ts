import M from 'materialize-css';
import m from 'mithril';
import { Button, Chips, ModalPanel } from 'mithril-materialized';
import { deepCopy, LayoutForm } from 'mithril-ui-form';
import { IEvent } from '../../models';
import { EventsSvc } from '../../services';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { Auth } from '../../services/login-service';
import { llf } from '../../template/llf';
import { capitalizeFirstLetter } from '../../utils';
import { CircularSpinner } from '../ui/preloader';

const log = console.log;

const close = async (e?: UIEvent) => {
  log('closing...');
  dashboardSvc.switchTo(Dashboards.SEARCH);
  if (e) {
    e.preventDefault();
  }
};

export const EventForm = () => {
  const state = {
    // hasChanged: false,
    event: {} as Partial<IEvent>,
    loaded: false,
    isValid: false,
    form: llf,
    error: '',
    /** Relevant context for the Form, can be used with show/disabling */
    context: {
      admin: true,
    },
  };

  const onsubmit = async () => {
    // state.hasChanged = false;
    log('submitting...');
    if (state.event) {
      // const event = deepCopy(state.event);
      await EventsSvc.save(state.event);
      state.event = EventsSvc.getCurrent();
    }
  };

  return {
    oninit: () => {
      return new Promise(async (resolve, reject) => {
        const event = await EventsSvc.load(m.route.param('id')).catch(r => reject(r));
        state.event = event ? deepCopy(event) : ({} as IEvent);
        state.loaded = true;
        m.redraw();
        resolve();
      });
    },

    view: () => {
      const { event, form, context, loaded } = state;
      if (!loaded) {
        return m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' });
      }
      // log(event);
      // const hasChanged = state.hasChanged || !deepEqual(event, EventsSvc.getCurrent());
      // if (hasChanged) {
      //   onsubmit();
      // }
      const sections = form
        .filter(c => c.type === 'section')
        .map(c => ({
          style: 'cursor: pointer;',
          id: c.id,
          title: c.label || capitalizeFirstLetter(c.id),
        }));
      const section = m.route.param('section') || sections[0].id;
      return m('.row', [
        m(
          '.col.s12.l3',
          m(
            'ul#slide-out.sidenav.sidenav-fixed',
            {
              oncreate: ({ dom }) => {
                M.Sidenav.init(dom);
              },
            },
            [
              m('h4.primary-text', { style: 'margin-left: 20px;' }, 'Content'),
              ...sections.map(s =>
                m(
                  'li',
                  m(
                    m.route.Link,
                    { href: dashboardSvc.route(Dashboards.EDIT).replace(':id', `${event.$loki}?section=${s.id}`) },
                    m('span.primary-text', s.title)
                  )
                )
              ),
              m('.buttons', [
                m(Button, {
                  label: 'Show event',
                  iconName: 'visibility',
                  className: 'right col s12',
                  onclick: () => dashboardSvc.switchTo(Dashboards.READ, { id: event.$loki }),
                }),
                // m(Button, {
                //   label: 'Save event',
                //   iconName: 'save',
                //   class: `green col s12 ${hasChanged ? '' : 'disabled'}`,
                //   onclick: onsubmit,
                // }),
                m(Button, {
                  modalId: 'delete-event',
                  label: 'Delete event',
                  iconName: 'delete',
                  class: 'red col s12',
                }),
              ]),
              Auth.canCRUD(event)
                ? m(
                    'li',
                    m(
                      '.col.s12',
                      m(Chips, {
                        label: 'Rights to edit are provided to:',
                        placeholder: '+email',
                        onchange: chips => {
                          event.canEdit = chips.map(({ tag }) => tag);
                          m.redraw();
                        },
                        data: (event.canEdit || []).map(editor => ({ tag: editor })),
                      })
                    )
                  )
                : undefined,
            ]
          )
        ),
        m('.col.s12.l9', [
          m(LayoutForm, {
            key: section,
            form,
            obj: event,
            onchange: async () => {
              // console.log(JSON.stringify(event.cmFunctions, null, 2));
              // console.log(JSON.stringify(event.memberCountries, null, 2));
              // state.event = event;
              // state.hasChanged = true;
              await onsubmit();
            },
            context,
            section,
          }),
        ]),
        m(ModalPanel, {
          id: 'delete-event',
          title: 'Delete event',
          description: 'Do you really want to delete this event - there is no way back?',
          options: { opacity: 0.7 },
          buttons: [
            {
              label: 'Delete',
              onclick: async () => {
                EventsSvc.delete(event.$loki);
                close();
              },
            },
            {
              label: 'Discard',
            },
          ],
        }),
      ]);
    },
  };
};
