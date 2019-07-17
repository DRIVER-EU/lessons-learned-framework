import m, { Attributes, FactoryComponent } from 'mithril';

export const CircularSpinner: FactoryComponent<Attributes> = () => {
  return {
    view: ({ attrs }) => {
      return m(
        'div',
        attrs,
        m(
          '.preloader-wrapper.big.active',
          m('.spinner-layer.spinner-blue-only', [
            m('.circle-clipper.left', m('.circle')),
            m('.gap.patch', m('.circle')),
            m('.circle-clipper.right', m('.circle')),
          ])
        )
      );
    },
  };
};
