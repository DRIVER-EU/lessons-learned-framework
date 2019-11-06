import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';
import driverLogo from '../../assets/driver-logo2.png';

const md = `<h4 class="primary-text">About</h4>

The Lessons Learned Library was developed by Dirk Stolk and Erik Vullings from [TNO](https://www.tno.nl) in 2019 as part of the DRIVER+ project. It is a practical implementation of the Lessons Learned Framework (LLF) that was developed in 2017, and includes a number of improvements based on experiences with the LLF demonstrator tool.

The [DRIVER+](https://www.driver-project.eu) project has received funding from the European Union's 7th Framework Programme for Research, Technological Development and Demonstration under Grant Agreement (GA) N°#607798.`;

const md2 = `<h4 class="primary-text">Quick reference</h4>

<h5 class="primary-text">Users – Login</h5>
Everyone can be **visitor** of the L3, and is allowed to select and consult the events that have been published on the L3. In addition, one can registrate himself/herself as a new L3 user. After registration he/she will receive the rights from the **administrator** to login as a regular **user**. He/she can do so clicking on the little man on the top right side, and providing his/her username and password. Thus being able to create new events or to edit events he/she has created before. In some cases the **administrator** can also provide the rights to login as an **editor**. As an editor the user has the option to edit all published events.

<h5 class="primary-text">Selecting an event</h5>

An event can be selected in the main menu by clicking the button of the concerned event from the list of events that are present in the repository. To this purpose, also filtering options at the left can be used to reduce the list of available events. Filtering can be done:

- By using the text filter by entering key words.
- By selecting countries, types of event, incidents (initial or secondary), and/or crisis management functions.

After having selected an event, the document is presented with the most important information that already has been provided on this event. If required, this Event document can be printed (Ctrl P).

In case one is logged in as an editor, the \`EDIT DOCUMENT\` button appears on the top right. By clicking this button, more detailed information can be consulted.

<h5 class="primary-text">Adding an event</h5>

An event can be created by clicking the \`+ ADD A NEW EVENT\` button on top of the main menu. After having added an event it can be edited.

<h5 class="primary-text">Editing or consulting an event</h5>

The Content menu at the left shows the various sections to describe and to characterise the event and lessons. These sections are:
- General event data: Name and general description of the event, including time and place.
- Incident characteristics: Description of the initial incident and other (cascading) incidents (if any) during the event, including their (potential) impact.
- Geographic characteristics: Geographic dimension and scale of the incident(s), including a map.
- Involved organisations: Organisations that were involved in performing crisis management functions during the event.
- Critical CM functions: essential crisis management functions that had to be executed to handle the incident(s) and that were typical for the lessons to be learned from this incident.
- Lessons: Add and describe lessons for single crisis management functions; lessons are described and can be characterised by their technical or non-technical nature, and their potential contribution to improve crisis management.
- Publications: References to relevant documents about the event or lessons.
- Multimedia sources: References to relevant all kinds of multimedia data.
- Editors: Authors who contributed to the contents of the event.

<h5 class="primary-text">Showing or deleting an event</h5>

Below the Content menu there are two buttons:

- \`SHOW EVENT\` to jump to the Event document
- \`DELETE EVENT\` to delete the event from the repository

<h5 class="primary-text">Additional editors of an event</h5>

The editor of a new event can also provide rights to edit an event to other persons who have editors-rights. This can be done by providing their e-mail addresses on the bottom left.

<h5 class="primary-text">Publishing an event</h5>

In case one is the user or editor of an event, he/she can decide to publish the event in the L3 by checking the box next to \`PUBLISH EVENT\` at top left of the Event document screen. Hereafter the event is publicly available. By checking the box again the event will be unpublished.`;

export const AboutPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md: md2 }),
      m(SlimdownView, { md }),
      m('.row', m('img', { src: driverLogo, width: 300, height: 151, style: 'display: block; margin: 0 auto;' })),
    ]),
});
