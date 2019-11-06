import m from 'mithril';
import { FlatButton, Icon, Select, TextInput } from 'mithril-materialized';
import { IEvent } from '../../models';
import { AppState } from '../../models/app-state';
import { Roles } from '../../models/roles';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { EventsSvc } from '../../services/events-service';
import { Auth } from '../../services/login-service';
import { cmFunctions, countries, eventTypes, incidentTypes } from '../../template/llf';
import { incidentFilter, nameAndDescriptionFilter, typeFilter } from '../../utils';

export const EventsList = () => {
  const state = {
    filterValue: '',
    countryFilter: [],
    eventTypeFilter: [],
    incidentTypeFilter: [],
    cmFunctionFilter: [],
  } as {
    countryFilter: Array<string | number>;
    eventTypeFilter: Array<string | number>;
    incidentTypeFilter: string[];
    cmFunctionFilter: Array<string | number>;
    filterValue: string;
  };

  const sortByName: ((a: Partial<IEvent>, b: Partial<IEvent>) => number) | undefined = (a, b) =>
    (a.name || '') > (b.name || '') ? 1 : (a.name || '') < (b.name || '') ? -1 : 0;

  const pageSize = 24;

  return {
    oninit: () => EventsSvc.loadList(),
    view: () => {
      const { countryFilter, eventTypeFilter, cmFunctionFilter, incidentTypeFilter } = state;
      const events = (EventsSvc.getList() || ([] as IEvent[])).sort(sortByName);
      const query = nameAndDescriptionFilter(state.filterValue);
      const page = m.route.param('page') ? +m.route.param('page') : 0;
      const filteredEvents =
        events
          .filter(
            ev =>
              ev.published ||
              (Auth.isAuthenticated && (Auth.roles.indexOf(Roles.ADMIN) >= 0 || ev.owner === Auth.email))
          )
          .filter(query)
          .filter(typeFilter('memberCountries', countryFilter))
          .filter(typeFilter('eventType', eventTypeFilter))
          .filter(typeFilter('cmFunctions', cmFunctionFilter))
          .filter(incidentFilter(incidentTypeFilter))
          .slice(page * pageSize, (page + 1) * pageSize) || [];
      return m('.row', { style: 'margin-top: 1em;' }, [
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
              Auth.isAuthenticated &&
                m(FlatButton, {
                  label: 'Add new event',
                  iconName: 'add',
                  class: 'col s11 indigo darken-4 white-text',
                  style: 'margin: 1em;',
                  onclick: () => {
                    EventsSvc.new({ name: 'New event', owner: Auth.email, published: false, duration: 1 });
                    dashboardSvc.switchTo(Dashboards.EDIT, { id: -1 });
                  },
                }),
              m('h4.primary-text', { style: 'margin-left: 0.5em;' }, 'Filter events'),
              m(TextInput, {
                label: 'Text filter of events',
                id: 'filter',
                placeholder: 'Part of title or description...',
                iconName: 'filter_list',
                onkeyup: (_: KeyboardEvent, v?: string) => (state.filterValue = v ? v : ''),
                style: 'margin-right:100px',
                className: 'col s12',
              }),
              m(Select, {
                placeholder: 'Select one',
                label: 'Country',
                checkedId: countryFilter,
                options: countries,
                iconName: 'public',
                multiple: true,
                onchange: f => (state.countryFilter = f),
                className: 'col s12',
              }),
              m(Select, {
                placeholder: 'Select one',
                label: 'Event type',
                checkedId: eventTypeFilter,
                options: eventTypes,
                iconName: 'event_note',
                multiple: true,
                onchange: f => (state.eventTypeFilter = f),
                className: 'col s12',
              }),
              m(Select, {
                placeholder: 'Select one',
                label: 'Incident',
                checkedId: incidentTypeFilter,
                options: incidentTypes,
                iconName: 'flash_on',
                multiple: true,
                onchange: f => (state.incidentTypeFilter = f as string[]),
                className: 'col s12',
              }),
              m(Select, {
                placeholder: 'Select one',
                label: 'CM function',
                checkedId: cmFunctionFilter,
                options: cmFunctions,
                iconName: 'notifications_active',
                multiple: true,
                onchange: f => (state.cmFunctionFilter = f),
                className: 'col s12',
                dropdownOptions: { container: 'body' as any },
              }),
              m(FlatButton, {
                label: 'Clear all filters',
                iconName: 'clear_all',
                class: 'col s11',
                style: 'margin: 1em;',
                onclick: () => {
                  state.filterValue = '';
                  state.countryFilter.length = 0;
                  state.cmFunctionFilter.length = 0;
                  state.eventTypeFilter.length = 0;
                  state.incidentTypeFilter.length = 0;
                },
              }),
            ]
          )
        ),
        m(
          '.col.s12.l9',
          filteredEvents.map(event =>
            m('.col.s12.m6.xl4', [
              m(
                '.card.hoverable',
                m('.card-content', { style: 'height: 150px;' }, [
                  m(
                    m.route.Link,
                    {
                      className: 'card-title',
                      href: dashboardSvc.route(Dashboards.READ).replace(':id', `${event.$loki}`),
                    },
                    event.name || 'Untitled'
                  ),
                  m('p.light.block-with-text', event.desc),
                ]),
                m('.card-action', [
                  m(
                    'a',
                    {
                      target: '_blank',
                      href: `${AppState.apiService}/api/events/${event.$loki}`,
                    },
                    m(Icon, {
                      className: 'white-text',
                      iconName: 'cloud_download',
                    })
                  ),
                  m(
                    'span.badge',
                    `${
                      event.lessons
                        ? event.lessons.length === 1
                          ? '1 lesson'
                          : `${event.lessons.length} lessons`
                        : '0 lessons'
                    }`
                  ),
                ])
              ),
            ])
          )
        ),
      ]);
      // return m('.events-list', [
      //   m('.row', [
      //     m(FlatButton, {
      //       label: 'Add event',
      //       iconName: 'add',
      //       class: 'green input-field right btn-medium',
      //       style: 'margin: 1em 1em 0 0;',
      //       onclick: () => {
      //         EventsSvc.new({ title: 'New event' });
      //         dashboardSvc.switchTo(Dashboards.EDIT, { id: -1 });
      //       },
      //     }),
      //     m(TextInput, {
      //       label: 'Text filter of events',
      //       id: 'filter',
      //       iconName: 'filter_list',
      //       onkeyup: (_: KeyboardEvent, v?: string) => (state.filterValue = v ? v : ''),
      //       style: 'margin-right:100px',
      //       className: 'col s12 l4',
      //     }),
      //     m(Select, {
      //       placeholder: 'Select one',
      //       label: 'Event type filter',
      //       inline: true,
      //       checkedId: filter,
      //       options: eventTypes.map(o => ({ label: capitalizeFirstLetter(o.id), ...o })),
      //       onchange: f => state.filter = f,
      //       className: 'col s12 l4'
      //     }),
      //   ]),
      //   m('.row', m('p', 'Available events.')),
      //   m(
      //     '.row',
      //     filteredEvents.map(event =>
      //       m('.col.s12.l4', [
      //         m(
      //           '.card.hoverable',
      //           m('.card-content', { style: 'height: 150px;' }, [
      //             m(
      //               m.route.Link,
      //               {
      //                 className: 'card-title',
      //                 href: dashboardSvc.route(Dashboards.READ).replace(':id', `${event.$loki}`),
      //               },
      //               event.name || 'Untitled'
      //             ),
      //             m('p.light.block-with-text', event.desc),
      //           ]),
      //           m('.card-action', [
      //             m(
      //               'a',
      //               {
      //                 target: '_blank',
      //                 href: `${AppState.apiService()}/lessons/${event.$loki}`,
      //               },
      //               m(Icon, {
      //                 iconName: 'cloud_download',
      //               })
      //             ),
      //             m(
      //               'span.badge',
      //               `${
      //                 event.lessons
      //                   ? event.lessons.length === 1
      //                     ? '1 lesson'
      //                     : `${event.lessons.length} lessons`
      //                   : '0 lessons'
      //               }`
      //             ),
      //           ])
      //         ),
      //       ])
      //     )
      //   ),
      // ]);
    },
  };
};
