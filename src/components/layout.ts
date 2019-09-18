import m, { Vnode } from 'mithril';
import { Icon } from 'mithril-materialized';
import logo from '../assets/logo_white.svg';
import { dashboardSvc } from '../services/dashboard-service';

const stripRouteParams = (path: string) => path.replace(/:[a-zA-Z]+/, '');

const isActiveRoute = (route = m.route.get()) => (path: string) =>
  path.length > 1 && route.indexOf(stripRouteParams(path)) >= 0 ? '.active' : '';

export const Layout = () => ({
  view: (vnode: Vnode) => {
    const isActive = isActiveRoute();
    return m('.main', [
      m(
        '.navbar-fixed',
        m(
          'nav',
          m('.nav-wrapper', [
            m('a.brand-logo[href=#]', { style: 'margin-left: 20px' }, [
              m(`img[width=48][height=48][src=${logo}]`, { style: 'margin-top: 5px; margin-left: -5px;' }),
              m(
                'div',
                { style: 'margin-top: 0px; position: absolute; top: 16px; left: 50px; width: 400px;' },
                m(
                  'h4.center.yellow.darken-3.hide-on-med-and-down',
                  { style: 'text-align: left; margin: 0;' },
                  'Lessons Learned Library'
                )
              ),
            ]),
            m(
              // 'a.sidenav-trigger[href=#!/home][data-target=slide-out]',
              // { onclick: (e: UIEvent) => e.preventDefault() },
              m.route.Link,
              { className: 'sidenav-trigger', 'data-target': 'slide-out', href: m.route.get() },
              m(Icon, {
                iconName: 'menu',
                className: '.hide-on-med-and-up',
                style: 'margin-left: 5px;',
              })
            ),
            m(
              'ul.right',
              dashboardSvc
                .getList()
                .filter(d => d.visible || isActive(d.route))
                .map(d =>
                  m(
                    `li${isActive(d.route)}`,
                    m(
                      m.route.Link,
                      { href: d.route },
                      m('span', d.icon ? m('i.material-icons.white-text', d.icon) : d.title)
                    )
                  )
                )
            ),
          ])
        )
      ),
      m('.container', vnode.children),
    ]);
  },
});
