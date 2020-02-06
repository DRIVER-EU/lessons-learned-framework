import m, { ComponentTypes, RouteDefs } from 'mithril';
import { AboutPage } from '../components/about/about-page';
import { HelpPage } from '../components/about/help-page';
import { EventForm } from '../components/edit/event-form';
import { EventsList } from '../components/home/events-list';
import { HomePage } from '../components/home/home-page';
import { Layout } from '../components/layout';
import { EventView } from '../components/show/event-view';
import { IDashboard } from '../models/dashboard';
import { Auth, Login } from './login-service';

export const enum Dashboards {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  HELP = 'HELP',
  READ = 'SHOW',
  EDIT = 'EDIT',
  SEARCH = 'SEARCH',
  USER = 'USER',
}

class DashboardService {
  private dashboards!: ReadonlyArray<IDashboard>;

  constructor(private layout: ComponentTypes, dashboards: IDashboard[]) {
    this.setList(dashboards);
  }

  public getList() {
    return this.dashboards;
  }

  public setList(list: IDashboard[]) {
    this.dashboards = Object.freeze(list);
  }

  public get defaultRoute() {
    const dashboard = this.dashboards.filter(d => d.default).shift();
    return dashboard ? dashboard.route : this.dashboards[0].route;
  }

  public route(dashboardId: Dashboards) {
    const dashboard = this.dashboards.filter(d => d.id === dashboardId).shift();
    return dashboard ? dashboard.route : this.defaultRoute;
  }

  public switchTo(dashboardId: Dashboards, params?: { [key: string]: string | number | undefined }) {
    const dashboard = this.dashboards.filter(d => d.id === dashboardId).shift();
    if (dashboard) {
      // console.log(dashboard.route);
      m.route.set(dashboard.route, params);
    }
  }

  public get routingTable() {
    return this.dashboards.reduce(
      (p, c) => {
        p[c.route] = c.hasNavBar === false
          ? { onmatch: () => window.scrollTo(0, 0), render: () => m(c.component) }
          : { onmatch: () => window.scrollTo(0, 0), render: () => m(this.layout, m(c.component)) };
        return p;
      },
      {} as RouteDefs,
    );
  }
}

export const dashboardSvc: DashboardService = new DashboardService(Layout, [
  {
    id: Dashboards.SEARCH,
    title: 'HOME',
    icon: 'home',
    route: '/home',
    visible: true,
    component: EventsList,
  },
  {
    id: Dashboards.READ,
    title: 'READ',
    icon: 'description',
    route: '/read/:id',
    visible: false,
    component: EventView,
  },
  {
    id: Dashboards.EDIT,
    title: 'EDIT',
    icon: 'edit',
    route: '/edit/:id',
    visible: false,
    component: EventForm,
  },
  {
    id: Dashboards.HELP,
    title: 'HELP',
    icon: 'info',
    route: '/info',
    visible: true,
    component: HelpPage,
  },
  {
    id: Dashboards.ABOUT,
    title: 'ABOUT',
    icon: 'help',
    route: '/about',
    visible: true,
    component: AboutPage,
  },
  {
    id: Dashboards.HOME,
    default: true,
    hasNavBar: false,
    title: 'WELCOME',
    route: '/',
    visible: false,
    component: HomePage,
  },
  {
    id: Dashboards.USER,
    title: 'User page',
    route: '/user',
    icon: () => Auth.isAuthenticated ? 'person' : 'person_outline',
    visible: true,
    component: Login,
  },
]);
