import m, { Attributes, FactoryComponent } from 'mithril';
import { Form, LayoutForm, SlimdownView } from 'mithril-ui-form';
import { IEvent, IMultimedia, IPublication } from '../models';
import { ILesson } from '../models/lesson';
import { formatOptional } from '../utils';

/** Print optional */
const p = (val: string | number | Date | undefined, output?: string) => (val ? output || val : '???');

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
            `- ${org.name}${formatOptional({ brackets: true }, org.type, org.country)}${p(org.info, `<br>${org.info}`)}`
        )
        .join('\n')
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
      effectsOnPerformance,
      effectsOnEfficiency,
      effectsOnResponderHealthAndSafety
    } = les;
    return `
<h6 class="primary-text">Lesson ${index + 1}: ${p(name, name)}${formatOptional(
      { brackets: true, prepend: 'addressing CM function ' },
      cmFunction
    )}</h6>

${obs(les)}

${p(solutionType, `A solution can be found in ${solutionType}:`)} ${p(lesson, lesson)}
Once the solution has been implemented, the expected improvements are: ${p(expectedImprovementsInfo)}

As a result, the expected improvements of the CM function once the solution has been implemented are:
${p(effectsOnPerformance, `- Quality improvement: ${effectsOnPerformance}`)}
${p(effectsOnEfficiency, `- Efficiency improvement: ${effectsOnEfficiency}`)}
${p(effectsOnResponderHealthAndSafety, `- Health & Safety risk reduction: ${effectsOnResponderHealthAndSafety}`)}

Additionally, the expected impact reductions are:
${p(victimsImprovements, `- Number of victims/casualties reduction: ${victimsImprovements}`)}
${p(materialDamageImprovements, `- Material damage reduction: ${materialDamageImprovements}`)}
${p(ciLossImprovements, `- Loss of services reduction: ${ciLossImprovements}`)}
${p(socEcoDisruptionImprovements, `- Social/economic reduction: ${socEcoDisruptionImprovements}`)}
${p(environmentalDegradationImprovements, `- Environmental degradation reduction: ${environmentalDegradationImprovements}`)}`;
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
    desc = '',
    disruption,
    environment,
    eventType,
    geo,
    incidentInfo,
    initialIncident,
    international,
    locationText = '',
    lossOfServices,
    memberCountries,
    name,
    otherCountries,
    otherIncidents,
    scale,
    scaleExplanation = '',
    societalSectors,
    victims,
  } = event;
  const oi = l(otherIncidents);
  const ss = l(societalSectors);
  const mc = l([...memberCountries, otherCountries]);
  const cm = l(cmFunctions);
  const md = `
<h4 class="primary-text center-align">${name}</h4>

${showEditors(event)}

<div class="center-align">
${desc}
${p(eventType, `Type of event: ${eventType}`)}${p(startDate, `, on ${new Date(startDate).toDateString()}`)}${p(
    locationText,
    ` at ${locationText}.`
  )}
</div>

<h5 class="primary-text">Incident characteristics</h5>

The incident was caused initially by a${initialIncident && /^[aeiuo]/i.test(initialIncident) ? 'n' : ''} ${p(
    initialIncident
  )}${oi && oi.length > 0 ? formatOptional({ prepend: ', causing the following other incidents: ' }, oi) : ''}.

  ${p(incidentInfo)}

  ${p(ss, `This affected several societal sectors, notably ${ss}. `)}

As a consequence of this incident, the (potential) impact is the following:
${p(victims, `- Number of victims: ${victims}`)}
${p(damage, `- Material damage: ${damage}`)}
${p(lossOfServices, `- Loss of services: ${lossOfServices}`)}
${p(disruption, `- Social/economic disruption: ${disruption}`)}
${p(environment, `- Environmental degradation: ${environment}`)}

<h5 class="primary-text">Geographical characteristics</h5>

The event took place ${p(geo, geo)}. Internationally, the dimension was ${p(international, international)} at a ${p(
    scale,
    scale
  )} scale${formatOptional({ prepend: ', involving ' }, mc)}.

${scaleExplanation}`;

  const md2 = `<h5 class="primary-text">Involved organisations</h5>

The following organisations are involved in executing CM functions:
${showOrganisations(event)}

<h5 class="primary-text">Critical Crisis Management functions</h5>

The most essential crisis management functions for effectively handling this event were ${p(cm, cm)}.

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
