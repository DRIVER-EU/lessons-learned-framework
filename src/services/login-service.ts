import { KeycloakInstance } from 'keycloak-js';
import m, { FactoryComponent } from 'mithril';
import { Chips, EmailInput, FlatButton, TextInput } from 'mithril-materialized';

export const Auth = {
  keycloak: undefined as undefined | KeycloakInstance,
  authenticated: false,
  username: '',
  email: '',
  roles: [] as string[],
  setUsername(username: string) {
    Auth.username = username;
  },
  setEmail(email: string) {
    Auth.email = email;
  },
  setRoles(roles: string[]) {
    Auth.roles = roles;
  },
  setAuthenticated(authN: boolean) {
    Auth.authenticated = authN;
  },
  login() {
    console.log('Login started...');
    window.localStorage.setItem('loginRequired', 'true');
    window.location.href = '/';
  },
  logout() {
    console.log('Logout started...');
    if (Auth.keycloak) {
      Auth.setAuthenticated(false);
      Auth.setUsername('');
      Auth.setEmail('');
      Auth.setRoles([]);
      Auth.keycloak.logout();
    }
  },
};

export const Login: FactoryComponent = () => {
  return {
    view: () => {
      const data = Auth.roles.map(r => ({ tag: r })) || [];
      return m(
        '.row',
        { style: 'margin-top: 10px;' },
        Auth.authenticated
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
                m(Chips, { label: 'Roles', disabled: true, data, iconName: `filter_${Auth.roles.length}` })
              ),
              m('.col.s12', m(FlatButton, { label: 'Logout', iconName: 'exit_to_app', onclick: () => Auth.logout() }))
            ]
          : [m('.col.s12', m(FlatButton, { label: 'Login', iconName: 'send', onclick: () => Auth.login() }))]
      );
    },
  };
};
