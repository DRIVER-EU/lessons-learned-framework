import m, { Attributes, FactoryComponent } from 'mithril';
import { Form, LayoutForm, SlimdownView } from 'mithril-ui-form';
import { IEvent, IMultimedia, IPublication } from '../models';
import { ILesson } from '../models/lesson';
import { formatOptional } from '../utils';

/** Print optional */
const p = (val: string | number | Date | undefined, output: string) => (val ? output : '');

/** Print a list: a, b and c */
const l = (val: undefined | string | string[]) => {
  if (!val) {
    return '';
  }
  if (val instanceof Array) {
    const [last, oneButLast, ...items] = val.reverse();
    return [...items, `${oneButLast} and ${last}`].filter(Boolean).join(', ');
  } else {
    return val;
  }
};

const showEditors = (event: Partial<IEvent>) => {
  const { editors } = event;
  return editors
    ? `<p class="center-align"><i>by ${editors
        .map(e => `${e.name}${formatOptional({ brackets: true }, e.role, e.organisation, e.country)}`)
        .join(', ')}</i></p>`
    : '';
};

const showOrganisations = (event: Partial<IEvent>) => {
  const { organisations } = event;
  return organisations
    ? organisations
        .map(
          org =>
            `- ${org.name}${formatOptional({ brackets: true }, org.type, org.country)}${p(
              org.info,
              `<br>${org.info}`
            )}`
        )
        .join(', ')
    : '';
};

const showLessons = (event: Partial<IEvent>) => {
  const { lessons } = event;
  const obs = ({ effectiveness, efficiency, responderHealthAndSafety }: ILesson) =>
    `Observation: the current effectiveness is '${effectiveness}', its efficiency '${efficiency}' and the Health & Safety risks for responders are '${responderHealthAndSafety}'.`;
  const createLesson = (les: ILesson, index: number) => {
    const {
      name,
      solutionType,
      expectedImprovementsInfo,
      lesson,
      cmFunction,
      victimsImprovements,
      materialDamageImprovements,
      ciLossImprovements,
      socEcoDisruptionImprovements,
      environmentalDegradationImprovements,
    } = les;
    return `
###### Lesson ${index + 1}: ${p(name, name)}${formatOptional({ brackets: true, prepend: 'addressing CM function ' }, cmFunction)}

${obs(les)}

${p(solutionType, `A solution can be found in the ${solutionType}:`)} ${p(lesson, lesson)}
Once the solution has been implemented, the expected improvements are: ${p(
      expectedImprovementsInfo,
      expectedImprovementsInfo
    )}
${p(victimsImprovements, `- Number of victims: ${victimsImprovements}`)}
${p(materialDamageImprovements, `- Material damage: ${materialDamageImprovements}`)}
${p(ciLossImprovements, `- Loss of services: ${ciLossImprovements}`)}
${p(socEcoDisruptionImprovements, `- Social/economic: ${socEcoDisruptionImprovements}`)}
${p(environmentalDegradationImprovements, `- Environmental degradation: ${environmentalDegradationImprovements}`)}
`;
  };
  return lessons ? lessons.map(createLesson).join(', ') : '';
};

const formatUrl = (url?: string) => (url ? `[${url}](${url})` : '');

const showSources = (event: Partial<IEvent>) => {
  const { publications, multimedia } = event;

  const formatPublication = (pub: IPublication) =>
    `${pub.title}${
      pub.yearOfPublication
        ? ` (${pub.yearOfPublication}${pub.dissemination ? `, ${pub.dissemination}` : ''})`
        : `${pub.dissemination ? `, ${pub.dissemination}` : ''}`
    }${pub.author ? `, ${pub.author}` : ''}${pub.url ? `, ${formatUrl(pub.url)}` : ''}${formatOptional(
      { brackets: true, prepend: 'original title: ' },
      pub.orgTitle,
      /other/i.test(pub.language || '') ? pub.otherLanguage : pub.language
    )}`;

  const formatMultimedia = (mm: IMultimedia) =>
    `${formatUrl(mm.url)}${mm.yearOfPublication ? ` (${mm.yearOfPublication})` : ''}${mm.desc ? `, ${mm.desc}` : ''}${
      mm.owner ? ` (owned by ${mm.owner})` : ''
    }`;

  const ps = publications ? publications.map((pub, i) => `${i + 1}. ${formatPublication(pub)}`).join('\n') : '';
  const ms = multimedia ? multimedia.map((mm, i) => `${i + 1}. ${formatMultimedia(mm)}`).join('\n') : '';

  console.log(ps);

  return ps || ms
    ? `
##### Publications
${ps}

##### Multimedia sources
${ms}
`
    : '';
};

/**
 * Format an Event object to a markdown layout.
 */
const formatEvent = (event: IEvent) => {
  const {
    name,
    eventType,
    desc = '',
    locationText = '',
    date: startDate,
    initialIncident,
    otherIncidents,
    societalSectors,
    victims,
    damage,
    lossOfServices,
    disruption,
    environment,
    geo,
    international,
    scale,
    memberCountries,
    scaleExplanation = '',
    cmFunctions,
  } = event;
  const oi = l(otherIncidents);
  const ss = l(societalSectors);
  const mc = l(memberCountries);
  const cm = l(cmFunctions);
  const md = `
<h4 class="center-align">${name}</h4>

${showEditors(event)}

##### Event description
${p(eventType, `_Type of event: ${eventType}`)}${p(startDate, `, on ${new Date(startDate).toDateString()}`)}${p(
    locationText,
    ` at ${locationText}._`
  )}

${desc}

##### Incident characteristics

The incident was caused initially by a${
    initialIncident && /aeiuo/.test(initialIncident) ? 'n' : ''
  } **${initialIncident}** ${formatOptional({ prepend: ', causing the following other incidents: _' }, oi)}_. ${p(
    ss,
    `This affected several societal sectors, notably _${ss}_. `
  )}As a consequence, the:
${p(victims, `- Number of victims: ${victims}`)}
${p(damage, `- Material damage: ${damage}`)}
${p(lossOfServices, `- Loss of services: ${lossOfServices}`)}
${p(disruption, `- Social/economic: ${disruption}`)}
${p(environment, `- Environmental degradation: ${environment}`)}

##### Geographical characteristics

The event took place ${p(geo, geo)}. Internationally, the dimension was ${p(international, international)} at a ${p(
    scale,
    scale
  )} scale${formatOptional({ prepend: ', involving ' }, mc)}.

${scaleExplanation}`;

  const md2 = `##### Involved organisations

The following organisations are involved in executing CM functions:
${showOrganisations(event)}

##### Critical Crisis Management functions

The most essential crisis management functions for effectively handling this event were ${p(cm, cm)}.

##### Lessons
${showLessons(event)}

${showSources(event)}
  `;

  return { md, md2 };
};

export interface IFormattedEvent extends Attributes {
  event: IEvent;
}

export const FormattedEvent: FactoryComponent<IFormattedEvent> = () => {
  return {
    view: ({ attrs: { event }}) => {
      const { md, md2 } = formatEvent(event);
      return m('.row', [
        m('.col.s12', m(SlimdownView, { md })),
        location
          ? m(LayoutForm, {
              form: [{ type: 'map', id: 'location' }] as Form,
              obj: event,
              disabled: true,
              context: {},
            })
          : undefined,
        m('.col.s12', m(SlimdownView, { md: md2 })),
      ]);
    },
  };
};
