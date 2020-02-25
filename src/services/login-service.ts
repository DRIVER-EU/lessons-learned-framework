import Keycloak, { KeycloakError, KeycloakInstance } from 'keycloak-js';
import m, { FactoryComponent } from 'mithril';
import { EmailInput, FlatButton, Options, TextInput } from 'mithril-materialized';
import { CircularSpinner } from '../components/ui/preloader';
import { IEvent } from '../models';
import { Roles } from '../models/roles';
import { envSvc } from './env-service';

const tokenKey = 'token';
const refreshTokenKey = 'refresh-token';

const authErrorHandler = (error: KeycloakError) => {
  console.log('Failed login via Keycloak');
  alert('Failed to initialize: ' + error);
};

const authSuccessHandler = (authenticated: boolean) => {
  Auth.setAuthenticated(authenticated);
  if (!authenticated || !Auth.refreshTokens()) {
    Auth.logout();
  }
  m.redraw();
};

export const Auth = {
  keycloak: {} as KeycloakInstance,
  isAuthenticated: false,
  name: '',
  username: '',
  email: '',
  token: window.localStorage.getItem(tokenKey) || '',
  refreshToken: window.localStorage.getItem(refreshTokenKey) || '',
  roles: [] as string[],

  async init() {
    if (Auth.keycloak.hasOwnProperty('login')) {
      return;
    }
    const env = await envSvc.getEnv();
    Auth.keycloak = Keycloak({
      realm: env.LOKI_REALM,
      url: `${env.LOKI_KEYCLOAK}/auth`,
      clientId: env.LOKI_CLIENTID,
    });
  },
  isLoggedIn() {
    return Auth.token && Auth.refreshToken;
  },
  refreshTokens() {
    const { token, refreshToken, tokenParsed } = Auth.keycloak;
    if (token && refreshToken && tokenParsed) {
      window.localStorage.setItem(tokenKey, token);
      window.localStorage.setItem(refreshTokenKey, refreshToken);
      Auth.setUsername((tokenParsed as any).preferred_username || '');
      Auth.setName((tokenParsed as any).name || '');
      Auth.setEmail((tokenParsed as any).email || '');
      if (tokenParsed.realm_access) {
        const roles = tokenParsed.realm_access.roles;
        if (
          tokenParsed.resource_access &&
          (tokenParsed.resource_access as any).l3app &&
          (tokenParsed.resource_access as any).l3app.roles
        ) {
          roles.push(...(tokenParsed.resource_access as any).l3app.roles);
        }
        Auth.setRoles(roles);
      }
      return true;
    }
    return false;
  },
  /** Can edit all documents, (un-)publish them, but also change the persons that have access. */
  isAdmin() {
    return Auth.roles.indexOf(Roles.ADMIN) >= 0;
  },
  /** Can edit all documents, (un-)publish them. */
  isEditor() {
    return Auth.roles.indexOf(Roles.EDITOR) >= 0;
  },
  /** Can edit the document, but also change the persons that have access. */
  isOwner(doc: Partial<IEvent>) {
    return Auth.isAdmin() || (Auth.isAuthenticated && doc.owner && doc.owner.indexOf(Auth.username) >= 0);
  },
  /** Can edit the document, but also change the persons that have access. */
  canCRUD(doc: Partial<IEvent>) {
    return Auth.isAuthenticated && (Auth.isAdmin() || this.isOwner(doc));
  },
  /** Can edit the document and publish it. */
  canEdit(doc: Partial<IEvent>) {
    return (
      Auth.isAuthenticated &&
      (Auth.canCRUD(doc) || Auth.isEditor() || (doc.canEdit instanceof Array && doc.canEdit.indexOf(Auth.username) >= 0))
    );
  },
  setUsername(username: string) {
    Auth.username = username;
  },
  setName(name: string) {
    Auth.name = name;
  },
  setEmail(email: string) {
    Auth.email = email;
  },
  setRoles(roles: string[]) {
    Auth.roles = roles;
  },
  setAuthenticated(authN: boolean) {
    Auth.isAuthenticated = authN;
  },
  cleanTokens() {
    window.localStorage.removeItem(tokenKey);
    window.localStorage.removeItem(refreshTokenKey);
  },
  async refreshLogin() {
    if (Auth.isLoggedIn()) {
      await Auth.init();
      Auth.cleanTokens();
      Auth.keycloak
        .init({
          onLoad: 'check-sso',
          token: Auth.token,
          refreshToken: Auth.refreshToken,
          checkLoginIframe: false,
        })
        .success((authenticated: boolean) => {
          authSuccessHandler(authenticated);
        })
        .error(authErrorHandler);
    }
  },
  async login() {
    if (Auth.isAuthenticated) {
      return;
    }
    await Auth.init();
    Auth.keycloak
      .init({
        onLoad: 'login-required',
        redirectUri: window.location.href.replace('?', '') + '?',
      })
      .success((authenticated: boolean) => {
        authSuccessHandler(authenticated);
      })
      .error(authErrorHandler);
  },
  logout() {
    Auth.cleanTokens();
    Auth.setAuthenticated(false);
    Auth.setUsername('');
    Auth.setName('');
    Auth.setEmail('');
    Auth.setRoles([]);
    Auth.keycloak.logout();
    m.route.set('/');
  },
};

(window as any).Auth = Auth;

export const Login: FactoryComponent = () => {
  return {
    oncreate: async () => {
      await Auth.login();
    },
    view: () => {
      return m(
        '.row',
        { style: 'margin-top: 10px;' },
        Auth.isAuthenticated
          ? [
              m(
                '.col.s12',
                m(TextInput, { label: 'Username', disabled: true, initialValue: Auth.username, iconName: 'person' })
              ),
              m(
                '.col.s12',
                m(EmailInput, { label: 'email', disabled: true, initialValue: Auth.email, iconName: 'email' })
              ),
              m(
                '.col.s12',
                m(Options, {
                  label: 'Roles',
                  disabled: true,
                  options: [{ id: Roles.ADMIN, label: 'Administrator' }, { id: Roles.EDITOR, label: 'Editor' }],
                  checkedId: Auth.roles,
                  inline: true,
                })
              ),
              m(
                '.col.s12',
                m(FlatButton, {
                  label: 'Logout',
                  iconName: 'exit_to_app',
                  onclick: (e: any) => {
                    Auth.logout();
                    e.redraw = false;
                  },
                })
              ),
            ]
          : m(CircularSpinner, { className: 'center-align', style: 'margin-top: 20%;' })
      );
    },
  };
};
