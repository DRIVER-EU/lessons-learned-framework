import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';
import driverLogo from '../../assets/driver-logo2.png';

const md = `<h4 class="primary-text">About</h4>

The Lessons Learned Library was developed by Dirk Stolk and Erik Vullings from [TNO](https://wwww.tno.nl) in 2019 as part of the DRIVER+ project. It is a practical implementation of the Lessons Learned Framework (LLF) that was developed in 2017, and includes a number of improvements based on experiences with the LLF demonstrator tool.

The [DRIVER+](https://www.driver-project.eu) project has received funding from the European Union's 7th Framework Programme for Research, Technological Development and Demonstration under Grant Agreement (GA) N°#607798.`;

const md2 = `<h4 class="primary-text">Quick reference</h4>

<h5 class="primary-text">Adding an event</h5>

An event can be created by clicking the \`+ ADD A NEW EVENT\` button on top of the main menu.

<h5 class="primary-text">Selecting an event</h5>

An event can be selected in the main menu by clicking the button of the concerned event from the list of events that are present in the repository. To this purpose, also filtering options at the left can be used to reduce the list of available events. Filtering can be done by:

- Text of event names or their short descriptions
- Types of event
- Initial incident of events
- Crisis management functions for which lessons have been defined

After having selected an event, the document is presented with the most important information that already has been provided on this event. By clicking the \`EDIT DOCUMENT\` button, more detailed information can be consulted (or edited).

<h5 class="primary-text">Editing an event</h5>

After having selected an event it can be edited and consulted. The Content menu at the left shows the various sections to describe and to characterise the event and lessons. These sections are:

- **General event data:** Name and general description of the event, including time and place.
- **Incident characteristics:** Description of the initial incident and other (cascading) incidents (if any) during the event, including their (potential) impact.
- **Geographic characteristics:** Geographic dimension and scale of the incident(s), including a map.
- **Involved organisations:** Organisations that were involved in performing crisis management functions during the event.
- **Critical CM functions:** Most essential crisis management functions that had to be executed to handle the incident(s).
- **Lessons:** Add and describe lessons for single crisis management functions; lessons are described and can be characterised by their technical or non-technical nature, and their potential contribution to improve crisis management. 
- **Publications:** References to relevant documents about the event or lessons.
- **Multimedia sources:** References to relevant all kinds of multimedia data.
- **Editors:** Authors who contributed to the contents of the event.

<h5 class="primary-text">Showing, saving or deleting an event</h5>

Below the Content menu there are three buttons:
- \`SHOW EVENT\` to jump to the Event document
- \`SAVE EVENT\` to save all entered (or updated) data
- \`DELETE EVENT\` to delete the event from the repository
`;

export const AboutPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md: md2 }),
      m(SlimdownView, { md }),
      m('.row', m('img', { src: driverLogo, width: 300, height: 151, style: 'display: block; margin: 0 auto;' })),
    ]),
});
