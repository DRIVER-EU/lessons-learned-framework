import { KeycloakInstance } from 'keycloak-js';
import m, { FactoryComponent } from 'mithril';
import { EmailInput, FlatButton, Options, TextInput } from 'mithril-materialized';
import { IEvent } from '../models';
import { Roles } from '../models/roles';

export const Auth = {
  keycloak: {} as KeycloakInstance,
  authenticated: false,
  username: '',
  email: '',
  roles: [] as string[],
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
    return Auth.authenticated && doc.owner === Auth.email;
  },
  /** Can edit the document, but also change the persons that have access. */
  canCRUD(doc: Partial<IEvent>) {
    return Auth.authenticated && (Auth.isAdmin() || this.isOwner(doc));
  },
  /** Can edit the document and publish it. */
  canEdit(doc: Partial<IEvent>) {
    return (
      Auth.authenticated &&
      (Auth.canCRUD(doc) || Auth.isEditor() || (doc.canEdit instanceof Array && doc.canEdit.indexOf(Auth.email) >= 0))
    );
  },
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
    window.localStorage.setItem('loginRequired', 'true');
    window.location.href = '/';
  },
  logout() {
    Auth.setAuthenticated(false);
    Auth.setUsername('');
    Auth.setEmail('');
    Auth.setRoles([]);
    Auth.keycloak.logout();
  },
};

export const Login: FactoryComponent = () => {
  return {
    view: () => {
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
                m(Options, {
                  label: 'Roles',
                  disabled: true,
                  options: [{ id: Roles.ADMIN, label: 'Administrator' }, { id: Roles.EDITOR, label: 'Editor' }],
                  checkedId: Auth.roles,
                  inline: true,
                })
              ),
              m('.col.s12', m(FlatButton, { label: 'Logout', iconName: 'exit_to_app', onclick: () => Auth.logout() })),
            ]
          : [m('.col.s12', m(FlatButton, { label: 'Login', iconName: 'send', onclick: () => Auth.login() }))]
      );
    },
  };
};
