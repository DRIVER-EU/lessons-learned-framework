import m from 'mithril';
import { Button, Icon, Parallax } from 'mithril-materialized';
import { SlimdownView } from 'mithril-ui-form';
import background from '../../assets/background.jpg';
import driverLogo from '../../assets/driver-logo-compact2.png';
import euLogo from '../../assets/eu-flag-logo.png';
import logo from '../../assets/logo_white.svg';
import { Dashboards, dashboardSvc } from '../../services/dashboard-service';

export const HomePage = () => ({
  view: () => [
    m('.row', [
      m(
        'nav.yellow.darken-3',
        m('.nav-wrapper', [
          m(
            'a.brand-logo[href=#]',
            { style: 'margin: 0 10px 0 20px; left: 20px' },
            m(`img[width=48][height=48][src=${logo}]`, { style: 'margin-top: 5px; margin-left: -5px;' })
          ),
          m(
            'h3.center.yellow.darken-3.hide-on-small-only',
            { style: 'margin: 0 auto; padding: 10px 0;' },
            'Lessons Learned Library'
          ),
        ]),
        m(
          '.overlay.center',
          {
            style: 'position: relative; top: 350px;',
          },
          m(Button, {
            className: 'yellow darken-3 btn-large',
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
      'footer.page-footer.yellow.darken-3',
      { style: 'heigth: 75px; padding: 5px 0;' },
      m(
        '.container',
        m('.clearfix', [
          m('img', { src: euLogo, width: 100, height: 67, style: 'float: left; margin-right: 10px;' }),
          m('img', { src: driverLogo, width: 67, height: 67, style: 'float: right; margin-left: 10px;' }),
          m(
            '.white-text',
            `This project has received funding from the European Union's 7th Framework Programme for Research,
          Technological Development and Demonstration under Grant Agreement (GA) N°#607798`
          ),
          m('span', '©DRIVER+'),
        ])
      )
    ),
  ],
});
