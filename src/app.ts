import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import m from 'mithril';
import { dashboardSvc } from './services/dashboard-service';
import './css/style.css';

m.route(document.body, dashboardSvc.defaultRoute, dashboardSvc.routingTable);
