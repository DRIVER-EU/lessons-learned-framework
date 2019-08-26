import m, { Vnode } from 'mithril';
import logo from '../assets/logo_white.svg';
import { dashboardSvc } from '../services/dashboard-service';

const stripRouteParams = (path: string) => path.replace(/:[a-zA-Z]+/, '');

const isActive = (path: string) => (m.route.get().indexOf(stripRouteParams(path)) >= 0 ? '.active' : '');

export const Layout = () => ({
  view: (vnode: Vnode) =>
    m('.main', [
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
      ),
      m('.container', vnode.children),
    ]),
});
