import Keycloak from 'keycloak-js';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import m from 'mithril';
import './css/style.css';
import { Dashboards, dashboardSvc } from './services/dashboard-service';
import { Auth } from './services/login-service';

declare const process: { env: { KEYCLOAK: string; REALM: string; CLIENTID: string; }};

const keycloak = Keycloak({
  realm: process.env.REALM,
  url: `${process.env.KEYCLOAK}/auth`,
  clientId: process.env.CLIENTID,
});
Auth.keycloak = keycloak;

const loginRequired = window.localStorage.getItem('loginRequired');

if (loginRequired === 'true') {
  keycloak
    .init({ onLoad: 'login-required', checkLoginIframe: false })
    .success((authenticated: boolean) => {
      window.localStorage.setItem('loginRequired', 'false');
      console.log(authenticated ? 'authenticated' : 'not authenticated');
      Auth.setAuthenticated(authenticated);
      if (authenticated && keycloak.tokenParsed) {
        const { tokenParsed } = keycloak;
        Auth.setUsername((tokenParsed as any).name || '');
        Auth.setEmail((tokenParsed as any).email || '');
        if (tokenParsed.realm_access) {
          Auth.setRoles(tokenParsed.realm_access.roles);
        }
        console.log(tokenParsed);
      }
      dashboardSvc.switchTo(Dashboards.USER);
    })
    .error(error => {
      alert('failed to initialize: ' + error);
    });
}

m.route(document.body, dashboardSvc.defaultRoute, dashboardSvc.routingTable);
