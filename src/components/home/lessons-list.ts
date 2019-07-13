import m from 'mithril';
import { Icon, RoundIconButton, TextInput } from 'mithril-materialized';
import { Dashboards, ILokiObj } from '../../models';
import { dashboardSvc, LessonsSvc } from '../../services';
import { titleAndDescriptionFilter } from '../../utils';
import { ILokiObj } from '../../models';

export const LessonsList = () => {
  const state = {
    filterValue: '',
  } as {
    filterValue: string;
  };
  return {
    oninit: () => LessonsSvc.loadList(),
    view: () => {
      const trials = LessonsSvc.getList();
      const query = titleAndDescriptionFilter(state.filterValue);
      const filteredScenarios = trials.filter(query);
      return m('.scenario-list', [
        m('.row', [
          m(RoundIconButton, {
            iconName: 'add',
            class: 'green input-field right btn-medium',
            style: 'margin: 1em 1em 0 0;',
            onclick: () => {
              LessonsSvc.new({
                title: 'New trial',
              } as ILokiObj);
              dashboardSvc.switchTo(Dashboards.TRIAL_INFO);
            },
          }),
          m(TextInput, {
            label: 'Filter',
            id: 'filter',
            iconName: 'filter_list',
            onkeyup: (_: KeyboardEvent, v?: string) => (state.filterValue = v ? v : ''),
            style: 'margin-right:100px',
            className: 'right',
          }),
        ]),
        m(
          '.row.sb.large',
          filteredScenarios.map(scenario =>
            m('.col.s6.m4.l3', [
              m(
                '.card',
                m('.card-content', { style: 'height: 150px' }, [
                  m(
                    'a[href=#].card-title',
                    {
                      onclick: () => {
                        console.log('Set scenario to ' + scenario.title);
                        return LessonsSvc.load(scenario.id);
                      },
                    },
                    scenario.title || 'Untitled',
                  ),
                  m('p', scenario.description),
                ]),
                m('.card-action', [
                  m(
                    'a',
                    {
                      // href: `${AppState.apiService()}/repo/${scenario.id}`,
                    },
                    m(Icon, {
                      iconName: 'cloud_download',
                    }),
                  ),
                  m(
                    'a',
                    {
                      href: '#!',
                      onclick: () => {
                        m.request<ILokiObj>({
                          method: 'POST',
                          url: `${AppState.apiService()}/repo/clone/${scenario.id}`,
                        }).then(to => {
                          if (to && to.id) {
                            LessonsSvc.load(to.id);
                          }
                        });
                      },
                    },
                    m(Icon, {
                      iconName: 'content_copy',
                    }),
                  ),

                ]),
              ),
            ]),
          ),
        ),
      ]);
    },
  };
};
