import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import m from 'mithril';
import './css/style.css';
import { dashboardSvc } from './services/dashboard-service';
import { Auth } from './services/login-service';

const restoreSession = async () => {
  await Auth.refreshLogin();
};
restoreSession();

m.route(document.body, dashboardSvc.defaultRoute, dashboardSvc.routingTable);
