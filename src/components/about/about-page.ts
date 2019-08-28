import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';
import driverLogo from '../../assets/driver-logo2.png';

const md = `#### About the Lessons Learned Library (L3)

The Lessons Learned Library was created by Dirk Stolk and Erik Vullings from [TNO](https://wwww.tno.nl) as part of the DRIVER+ project.


The source code is publicly available on [GitHub](https://github.com/DRIVER-EU/lessons-learned-framework).

This project has received funding from the European Union's 7th Framework Programme for Research, Technological Development and Demonstration under Grant Agreement (GA) N°#607798.`;

export const AboutPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md }),
      m('.row', m('img', { src: driverLogo, width: 300, height: 151, style: 'display: block; margin: 0 auto;' })),
    ]),
});
