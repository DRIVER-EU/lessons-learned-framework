import m, { Attributes, FactoryComponent } from 'mithril';
import { Form, LayoutForm, SlimdownView } from 'mithril-ui-form';
import { IEvent, IMultimedia, IPublication } from '../models';
import { ILesson } from '../models/lesson';
import { formatOptional } from '../utils';

/** Print optional */
const p = (val: string | number | Date | undefined, output?: string) => (val ? output || val : '');

/** Print a list: a, b and c */
const l = (val: undefined | string | string[]) => {
  if (!val) {
    return '';
  }
  if (val instanceof Array) {
    if (val.length === 1) {
      return val[0];
    }
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
        .filter(Boolean)
        .map(e => `${e.name}${formatOptional({ brackets: true }, e.role, e.organisation, e.country)}`)
        .join(', ')}</i></p>`
    : '';
};

const showOrganisations = (event: Partial<IEvent>) => {
  const { organisations } = event;
  return organisations
    ? organisations
        .filter(Boolean)
        .map(
          org =>
            `- ${org.name}${formatOptional({ brackets: true }, org.type, org.country)}${p(org.info, `<br>${org.info}`)}`
        )
        .join('\n')
    : '';
};

const showLessons = (event: Partial<IEvent>) => {
  const { lessons } = event;
  if (!lessons || lessons.length === 0) {
    return 'No lessons have been learned yet.';
  }
  const obs = ({ effectiveness, observationInfo }: ILesson) =>
    `Observations during the event of this CM function shows that its effectiveness was '${p(effectiveness)}'. ${p(
      observationInfo
    )}`;
  const createLesson = (les: ILesson, index: number) => {
    const {
      name,
      solutionType,
      expectedImprovementsInfo,
      lesson,
      cmFunction,
      victimsImprovements,
      // materialDamageImprovements,
      // ciLossImprovements,
      // socEcoDisruptionImprovements,
      // environmentalDegradationImprovements,
      effectsOnPerformance,
      // effectsOnEfficiency,
      // effectsOnResponderHealthAndSafety,
      explanationImprovements,
    } = les;
    const st = l(solutionType);
    const intro =
      index === 0
        ? `From the evaluation of this event, the following ${
            lessons.length === 1 ? 'lesson has' : `${lessons.length} lessons have`
          } been learned.`
        : '';

    return `${intro}
<h6 class="primary-text">Lesson ${index + 1}: ${p(name)}</h6>

This lesson addresses in particular CM function(s) ‘${p(cmFunction)}’.

${obs(les)}

Possible solution or improvement of the CM function(s)’ performance can/has been found in aspects related to: ${p(
      st
    )}. ${p(lesson)}

The (expected) improvements of the CM function(s)’ performance of implementing such a solution are ${p(
      effectsOnPerformance
    )}. ${p(expectedImprovementsInfo)}

Additionally, the expected impact reductions on the described incident are ${p(victimsImprovements)}.` +
// ${p(materialDamageImprovements, `- Material damage reduction: ${materialDamageImprovements}`)}
// ${p(ciLossImprovements, `- Loss of services reduction: ${ciLossImprovements}`)}
// ${p(socEcoDisruptionImprovements, `- Social/economic reduction: ${socEcoDisruptionImprovements}`)}
// ${p(
//   environmentalDegradationImprovements,
//   `- Environmental degradation reduction: ${environmentalDegradationImprovements}`
// )}
`${p(explanationImprovements)}`;
  };
  return lessons
    ? lessons
        .filter(Boolean)
        .map(createLesson)
        .join('\n')
    : '';
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

  const ps = publications
    ? publications
        .filter(Boolean)
        .map((pub, i) => `${i + 1}. ${formatPublication(pub)}`)
        .join('\n')
    : '';
  const ms = multimedia
    ? multimedia
        .filter(Boolean)
        .map((mm, i) => `${i + 1}. ${formatMultimedia(mm)}`)
        .join('\n')
    : '';

  // console.log(ps);

  return ps || ms
    ? `
<h5 class="primary-text">Publications</h5>
${ps}

<h5 class="primary-text">Multimedia sources</h5>
${ms}
`
    : '';
};

/**
 * Format an Event object to a markdown layout.
 */
const formatEvent = (event: IEvent) => {
  const {
    challengesInfo,
    cmFunctions,
    damage,
    date: startDate,
    duration,
    desc = '',
    disruption,
    environment,
    eventType,
    incidentInfo,
    initialIncident,
    locationText = '',
    lossOfServices,
    memberCountries,
    name,
    otherCountries,
    intInstitutions,
    otherIncidents,
    scale,
    scaleExplanation = '',
    societalSectors,
    societalSectorsAdditional,
    societalSectorsInfo,
    victims,
  } = event;
  const oi = l(otherIncidents);
  const ss = l(societalSectors);
  const mc = otherCountries ? l([...(memberCountries || []), otherCountries]) : l(memberCountries);
  const cm = l(cmFunctions);
  const md = `
<h4 class="primary-text center-align">${name}</h4>

${showEditors(event)}

${p(eventType, `Type of event: ${eventType}`)}

The event took place at ${p(locationText)} ${p(startDate, `on ${new Date(startDate).toDateString()}`)}${p(
    duration,
    ` and lasted ${duration} day${duration > 1 ? 's' : ''}`
  )}. ${desc}

<h5 class="primary-text">Incident characteristics</h5>

The incident was initiated by a${initialIncident && /^[aeiuo]/i.test(initialIncident) ? 'n' : ''} ${p(
    initialIncident
  )}${oi && oi.length > 0 ? formatOptional({ prepend: ', causing the following other incidents: ' }, oi) : ''}.

  ${p(incidentInfo)}
  ${p(scale, `The scale of this event was ${scale}.`)} ${p(
    ss,
    `It affected several societal sectors, notably ${ss}.`
  )} ${p(societalSectorsAdditional)} ${p(societalSectorsInfo)}

The (potential) impact of the incident was as follows:
${p(victims, `- Number of victims/casualties: ${victims}`)}
${p(damage, `- Material damage: ${damage}`)}
${p(lossOfServices, `- Loss of services: ${lossOfServices}`)}
${p(disruption, `- Social/economic disruption: ${disruption}`)}
${p(environment, `- Environmental degradation: ${environment}`)}

<h5 class="primary-text">Geographical characteristics</h5>

${p(mc, `The event involved the following country/countries: ${mc}. `)}
${p(intInstitutions, `Including the following international institution(s): ${intInstitutions}. `)}

${scaleExplanation}`;

  const md2 = `<h5 class="primary-text">Involved organisations</h5>

The following organisations were involved for effectively resolving this event:
${showOrganisations(event)}

<h5 class="primary-text">Critical Crisis Management functions</h5>

The following crisis management functions were of specific interest for adequately handling this event: ${p(cm, cm)}.

${p(challengesInfo)}

<h5 class="primary-text">Lessons</h5>
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
    view: ({ attrs: { event } }) => {
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
