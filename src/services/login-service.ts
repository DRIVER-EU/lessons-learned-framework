import m, { FactoryComponent } from 'mithril';
import { FlatButton, PasswordInput, TextInput } from 'mithril-materialized';

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
      return m('.row', { style: 'margin-top: 10px;' }, [
        m('.col.s12', m(TextInput, { label: 'Username', iconName: 'person', onchange: u => Auth.setUsername(u) })),
        m('.col.s12', m(PasswordInput, { label: 'Password', iconName: 'lock', onchange: p => Auth.setPassword(p), type: 'password' })),
        m('.col.s12', m(FlatButton, { label: 'Submit', iconName: 'send', disabled: !Auth.canSubmit(), onclick: Auth.login() })),
      ]);
    },
  };
};
