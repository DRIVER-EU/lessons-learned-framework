import m, { FactoryComponent } from 'mithril';
import { FlatButton, TextInput } from 'mithril-materialized';

export const Auth = {
  username: '',
  password: '',
  setUsername(username: string) {
      Auth.username = username;
  },
  setPassword(password: string) {
      Auth.password = password;
  },
  canSubmit() {
      return Auth.username !== '' && Auth.password !== '';
  },
  login() {/*...*/},
};

export const Login: FactoryComponent = () => {
  return {
    view: () => {
      return m('.row', [
        m('.col.s12', m(TextInput, { label: 'Username', iconName: 'person', onchange: u => Auth.setUsername(u) })),
        m('.col.s12', m(TextInput, { label: 'Password', iconName: 'lock', onchange: p => Auth.setPassword(p), type: 'password' })),
        m('.col.s12', m(FlatButton, { label: 'Submit', iconName: 'submit', disabled: Auth.canSubmit(), onclick: Auth.login() })),
      ]);
    },
  };
};
