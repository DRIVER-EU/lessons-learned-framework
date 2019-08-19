import m from 'mithril';
import { Button, Icon, Parallax } from 'mithril-materialized';
import { SlimdownView } from 'mithril-ui-form';
import background from '../../assets/background.jpg';
import logo from '../../assets/logo_white.svg';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';

export const HomePage = () => ({
  view: () => [
    m('.row', [
      m(
        'nav.orange.darken-3',
        m('.nav-wrapper', [
          m(
            'a.brand-logo[href=#]',
            { style: 'margin-left: 20px; left: 20px' },
            m(`img[width=48][height=48][src=${logo}]`, { style: 'margin-top: 5px; margin-left: -5px;' })
          ),
          m('h3.center.orange.darken-3', { style: 'margin: 0 auto; padding: 10px 0;' }, 'Lessons Learned Library'),
        ]),
        m(
          '.overlay.center',
          {
            style: 'position: relative; top: 350px;',
          },
          m(Button, {
            className: 'orange darken-3 btn-large',
            label: 'Get started',
            onclick: () => dashboardSvc.switchTo(Dashboards.SEARCH),
          })
        )
      ),
      m(Parallax, { src: background }),
      m(
        '.section.white',
        m('.row.container.center', [
          m(SlimdownView, {
            md:
              '## Learn and share\n' +
              'The Lessons Learned Library (L3) is a repository for lessons gathered during an incident, trial or exercise.',
          }),
          m('.row', [
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'group' })),
                m('h5.center', 'Share your experience'),
                m('p.light', "Help others, so they won't make the same mistakes as you have seen."),
              ])
            ),
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'flash_on' })),
                m('h5.center', 'Quick and easy'),
                m('p.light', 'In 10~15 minutes, you can share the most important lessons.'),
              ])
            ),
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'public' })),
                m('h5.center', 'Open to anyone'),
                m('p.light', 'Not locked away in a safe, but open to anyone interested to learn more.'),
              ])
            ),
          ]),
        ])
      ),
    ]),
    m(
      'footer.page-footer.orange.darken-3',
      { style: 'heigth: 75px; padding: 5px 0;' },
      m(
        '.container',
        m(
          '.white-text',
          `This project has received funding from the European Union’s Seventh Framework Programme
      for research, technological development and demonstration under grant agreement n° 607798.
      The information and views set out in this presentation are those of the author(s) and do
      not necessarily reflect the official opinion of the European Union.`
        )
      )
    ),
  ],
});
