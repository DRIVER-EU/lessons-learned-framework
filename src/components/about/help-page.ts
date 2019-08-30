import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';

const md = `#### Explication of the L3

The aim of L3 is to support organisations in editing, maintaining, consulting and sharing lessons within the domain of crisis management and disaster risk reduction in Europe. Thereby, sharing of lessons is not limited to various management levels in one organisation, but is aimed to be across organisations, across sectors, and across countries. The ultimate L3 objectives are to reduce the probability that incidents happen, and in case they do occur to respond in an  adequate way to minimise their impact.

Lessons, or observations and experiences, may be collected from various types of events: routine, every day operations, crisis situations, training and exercises, experiments and tests, but also from risk management studies or preventive activities. Learning lessons can be considered as a structured approach to produce and apply experience-based knowledge to develop and improve doctrines, organisations, training, equipment, leadership, personnel and facilities to achieve more effective, efficient and safe operations.

In simple terms, a lesson is a set of answers to questions such as: What was the situation?, What was the impact?, What went well in emergency management and is worthwhile to implement?, or What went wrong and which improvements are needed? To this purpose, users can provide precious information and lessons from events by adding a new event to the repository. By filling out a limited number of forms collected data and experiences can be shared with other emergency management communities in Europe.

Lessons may be of varying nature and of mixed interest outside the organisation or sector where they were collected. Therefore, a filtering mechanism enables users to select the kind of information they would like to consult: information about an event that took place (e.g. a Trial in the DRIVER+ project), lessons from a particular type of event (e.g. exercises), or from certain types of incidents (e.g. forest fires or bomb attacks), or from specific crisis management functions (e.g. situation assessment).

##### Adding an event and its lessons

An event can be created by clicking the ‘+ ADD A NEW EVENT’ button on top of the main menu, and consequently clicking ‘EDIT DOCUMENT’.

##### Selecting and editing an event

An event can be selected from the repository by clicking the button of the concerned event from the list of available events. To this purpose, filtering options at the left can be used to reduce the list of available events. After having selected an event it can be edited similar to adding an event.

The menu at the left show the various sections to describe and to characterise the event and lessons. These sections are:

- - General event data
- - Incident characteristics
- - Geographic characteristics
- - Involved organisations
- - Critical CM functions
- - Lessons
- - Publications
- - Multimedia sources
- - Editors
`;

export const HelpPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md }),
    ]),
});
