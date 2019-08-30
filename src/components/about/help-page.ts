import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';
import l3 from '../../assets/l3-schema.png';

const md = `#### Explanation of the Lessons Learned Library
##### Objective

The Lessons Learned Library (L3) aims to support organisations in editing, maintaining, consulting and sharing lessons within the domain of crisis management (CM) and disaster risk reduction (DRR) in Europe. Thereby, sharing of lessons is not strictly limited to one organisation. L3 is especially intended to share lessons across organisations, across sectors, and across countries with the ultimate goal to improve CM and DRR in Europe by learning from each other’s experiences.
Lessons may be collected from various types of events: routine, every day operations, crisis situations, training and exercises, experiments and tests, but also from risk management studies or preventive activities. Learning lessons can be considered as a structured approach to produce and apply experience-based knowledge to develop and improve doctrines, organisations, training, equipment, leadership, personnel and facilities to achieve more effective, efficient and safe operations.

In simple terms, a lesson is a set of answers to questions such as: What was the situation?, What was the impact?, What went well in emergency management and is worthwhile to implement?, or What went wrong and which improvements are needed? To this purpose, users can provide precious information and lessons from events by adding a new event to the repository. By filling out a limited number of forms collected data and experiences can be shared with other emergency management communities in Europe.

Lessons may be of varying nature and of mixed interest outside the organisation or sector where they were collected. Therefore, a filtering mechanism enables users to select the kind of information they would like to consult: information about an event that took place (e.g. a Trial in the DRIVER+ project), lessons from a particular type of event (e.g. exercises), or from certain types of incidents (e.g. forest fires or bomb attacks), or from specific crisis management functions (e.g. evacuation or situation assessment).

##### Functionalities and structure

The main functionalities of the L3 are to add and edit crisis events and associated lessons from these events, and to find and consult specific events or lessons. Because the aim of the L3 is to share lessons across the CM community throughout Europe the user interface is in English. For the same reason users are requested (but are not obliged) to provide their information on events and lessons in English as well.

The L3 contains of a set of events and their associated lessons. As depicted in the adjacent figure, each event in the repository can contain 0, 1 or more lessons, while each lesson is linked to exactly one specific crisis management function. Please note that a certain function can be addressed by several lessons from one or more events.`;

const md2 = `##### Quick reference

###### Adding an event

An event can be created by clicking the \`+ ADD A NEW EVENT\` button on top of the main menu.

###### Selecting an event

An event can be selected in the main menu by clicking the button of the concerned event from the list of events that are present in the repository. To this purpose, also filtering options at the left can be used to reduce the list of available events. Filtering can be done by:

- Text of event names or their short descriptions
- Types of event
- Initial incident of events
- Crisis management functions for which lessons have been defined

After having selected an event, the document is presented with the most important information that already has been provided on this event. By clicking the \`EDIT DOCUMENT\` button, more detailed information can be consulted (or edited).

###### Editing an event

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

###### Showing, saving or deleting an event

Below the Content menu there are three buttons:
- \`SHOW EVENT\` to jump to the Event document
- \`SAVE EVENT\` to save all entered (or updated) data
- \`DELETE EVENT\` to delete the event from the repository
`;

export const HelpPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md }),
      m('img.responsive-img', { src: l3, style: 'margin: 0 auto; padding: 0 10px' }),
      m(SlimdownView, { md: md2 }),
    ]),
});
