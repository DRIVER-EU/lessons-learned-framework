import m from 'mithril';

export const AboutPage = () => ({
  view: () =>
    m('.row', [
      m('h1', 'About'),
      m('h1', 'Attribution'),
      m('ul.collection', [m('li.collection-item', 'Logo: Group class by Fiki Ahmadi from the Noun Project.')]),
    ]),
});
