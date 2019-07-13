import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';

export const HomePage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md: '# A lessons-learned framework' }),
    ]),
});
