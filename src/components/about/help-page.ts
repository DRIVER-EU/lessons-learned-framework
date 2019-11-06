import m from 'mithril';
import { SlimdownView } from 'mithril-ui-form';
import l3 from '../../assets/l3-schema.png';

const md = `<h4 class="primary-text">Explanation of the Lessons Learned Library</h4>
<h5 class="primary-text">Objective</h5>

The Lessons Learned Library (L3) aims to support organisations in editing, maintaining, consulting and sharing lessons within the domain of crisis management (CM) and disaster risk reduction (DRR) in Europe. Thereby sharing of lessons is not strictly limited to one organisation. L3 is especially intended to share lessons across organisations, across sectors, and across countries with the ultimate goal to improve CM and DRR in Europe by learning from each other’s experiences.

Lessons may be collected from various types of events: routine, every day operations, near incidents, crisis situations, training and exercises, experiments and tests, but also from risk management studies or other preventive activities. Learning lessons can be considered as a structured approach to produce and apply experience-based knowledge to develop and improve doctrines, organisations, training, equipment, leadership, personnel and facilities to achieve more effective, efficient and safe operations.

In simple terms, a lesson is a set of answers to questions such as: ‘What was the situation?’, ‘What was the impact?’, ‘What went well in emergency management and is worthwhile to implement?’, or ‘What went wrong and which improvements are needed?’. To this purpose, users can provide precious information and lessons from events by adding a new event to the repository. By filling out a limited number of forms collected data and experiences can be shared with other emergency management communities in Europe.

Lessons may be of varying nature and of mixed interest outside the organisation or sector where they have been collected. Therefore, a filtering mechanism enables users to select the kind of information they would like to consult: information about an event that took place (e.g. a Trial in the DRIVER+ project), lessons from a particular type of event (e.g. exercises),  from certain types of incidents (e.g. forest fires or bomb attacks), or from specific crisis management functions (e.g. evacuation or situation assessment).

<h5 class="primary-text">Functionalities and structure</h5>

The main functionalities of the L3 are to add and edit crisis events and associated lessons from these events, and to find and consult specific events or lessons. Because the aim of the L3 is to share lessons across the CM community throughout Europe the user interface is in English. For the same reason users are encouraged (but are not obliged) to provide their information on events and lessons in English as well.

The L3 contains a set of events and their associated lessons. As depicted in the adjacent figure, each event in the repository can contain 0, 1 or more lessons, while each lesson in its turn can be linked to one or more crisis management functions. Note that a certain CM function can be addressed by different lessons from the same or from other events.`;

const md2 = `<h5 class="primary-text">Events, lessons and CM functions</h5>

An **event** is described by:

-	A summary, including some general data such as type of event (e.g. an incident or an exercise), and the date and place of the event.
-	More detailed information on the incident scenario and crisis management operations, such as the initial incident and cascading events, the (potential) impact, a map of the situation, involved organisations, and an overview of critical CM functions that had to be executed.
-	Lessons that have been learned from the event.

A **lesson** consists of two sets of information:

-	A description of the observation of positive or negative experiences concerning the applicable CM function during the event. This includes the performance of executing the CM function during the event, which is expressed by the effectiveness (adequacy) of executing the CM function on a 5 point-scale.
-	The characterisation of a (potential) solution to improve the CM function based on the experiences during the event. This includes a description of the expected performance improvement of the CM function (also expressed on a 5 point-scale) once it will have been implemented. In addition an indication can be provided of the expected impact reduction by the solution. To this purpose five impact dimensions of UNISDR are used: numbers of victims, material damage, loss of services, social/economic losses, and environmental degradation.

The L3 includes 24 **CM functions** to choose from. It concerns:

-	_Operational CM functions_<br>Alerting (112), Crisis/Risk communication to society, Crowd management, Decontamination, Emergency Health Care, Evacuation & Shelter, Fight/Eliminate incident source (e.g. fire-fighting, stop a leakage), Law enforcement, Provide basic needs to the population, Remove debris, Rescue operations (SAR), and Restore critical services.
-	_Operations enabling or supporting CM functions_<br>Command, Control and Coordination (C3)/Information management, Detection/Surveillance, International collaboration (incl. home nation support), Logistics/Resource management, Situation assessment, Social media mining, Traffic management, Up-scale/Down-scale of emergency services, and Volunteer management.
-	_Preparatory CM functions_<br>Education & Training, Planning/Doctrine development, and Risk assessment.`;

export const HelpPage = () => ({
  view: () =>
    m('.row', [
      m(SlimdownView, { md }),
      m('img.responsive-img', { src: l3, style: 'margin: 0 auto; padding: 0 10px' }),
      m(SlimdownView, { md: md2 }),
    ]),
});
