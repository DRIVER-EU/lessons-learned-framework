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
              `## Learn and share

              The **Lessons Learned Library (L3)** is a repository in the domain of Crisis Management (CM) and Disaster Risk Reduction (DRR) for collecting and sharing lessons from preventive or response activities at events such as severe incidents, crisis situations, tests or exercises.`,
          }),
          m('.row', [
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'group' })),
                m('h5.center', 'Share your experience'),
                m('p.light', 'Help others, so they can take advantage of your experiences.'),
              ])
            ),
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'flash_on' })),
                m('h5.center', 'Quick and easy'),
                m(
                  'p.light',
                  'In a short period of time you can edit information and key lessons from an event in a well-organised way.'
                ),
              ])
            ),
            m(
              '.col.s12.m4',
              m('.icon-block', [
                m('.center', m(Icon, { iconName: 'public' })),
                m('h5.center', 'Open to any professional'),
                m(
                  'p.light',
                  'Not locked away in a safe or hidden in some report, but open to any CM professional interested to learn from other colleagues.'
                ),
              ])
            ),
          ]),
        ])
      ),
    ]),
    m(
      'footer.page-footer.yellow.darken-3',
      { style: 'height: 100px; padding: 5px 0;' },
      m(
        '.container',
        m('.clearfix', [
          m('div', { style: 'float: left; margin-right: 10px;' }, [
            m('img', { src: euLogo, width: 100, height: 67, style: 'display: block; margin-left: 20px;' }),
            m('span', 'v1.0, September 2019'),
          ]),
          m('div', { style: 'float: right; margin-left: 10px;' }, [
            m('img', { src: driverLogo, width: 67, height: 67, style: 'display: block; margin-left: 40px;' }),
            m(
              'a.primary-text',
              { style: 'display: block', href: 'https://www.project-driver.eu', target: '_blank' },
              'www.project-driver.eu'
            ),
          ]),
          m(
            '.white-text',
            `This project has received funding from the European Union's 7th Framework Programme for Research,
          Technological Development and Demonstration under Grant Agreement (GA)`
          ),
          m('span', '©DRIVER+'),
        ])
      )
    ),
  ],
});
