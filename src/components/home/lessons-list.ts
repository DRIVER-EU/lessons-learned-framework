import m from 'mithril';
import { Icon, RoundIconButton, TextInput } from 'mithril-materialized';
import { AppState } from '../../models/app-state';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';
import { LessonsSvc } from '../../services/lessons-service';
import { titleAndDescriptionFilter } from '../../utils';

export const LessonsList = () => {
  const state = {
    filterValue: '',
  } as {
    filterValue: string;
  };
  return {
    oninit: () => LessonsSvc.loadList(),
    view: () => {
      const lessons = LessonsSvc.getList();
      const query = titleAndDescriptionFilter(state.filterValue);
      const filteredLessons = lessons.filter(query);
      return m('.scenario-list', [
        m('.row', [
          m(RoundIconButton, {
            iconName: 'add',
            class: 'green input-field right btn-medium',
            style: 'margin: 1em 1em 0 0;',
            onclick: () => {
              LessonsSvc.new({ title: 'New lesson' });
              dashboardSvc.switchTo(Dashboards.EDIT);
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
          filteredLessons.map(lesson =>
            m('.col.s6.m4.l3', [
              m(
                '.card.hoverable',
                m('.card-content', { style: 'height: 150px' }, [
                  m(
                    'a[href=#].card-title',
                    {
                      onclick: async () => {
                        console.log('Set scenario to ' + lesson.title);
                        await LessonsSvc.load(lesson.$loki);
                        dashboardSvc.switchTo(Dashboards.EDIT);
                      },
                    },
                    lesson.title || 'Untitled'
                  ),
                  m('p.light.block-with-text', lesson.desc),
                ]),
                m('.card-action', [
                  m(
                    'a',
                    {
                      target: '_blank',
                      href: `${AppState.apiService()}/lessons/${lesson.$loki}`,
                    },
                    m(Icon, {
                      iconName: 'cloud_download',
                    })
                  ),
                  m(
                    'span.badge',
                    `${
                      lesson.lessons
                        ? lesson.lessons.length === 1
                          ? '1 lesson'
                          : `${lesson.lessons.length} lessons`
                        : '0 lessons'
                    }`
                  ),
                ])
              ),
            ])
          )
        ),
      ]);
    },
  };
};
