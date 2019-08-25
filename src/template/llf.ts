import { Form } from 'mithril-ui-form';

const countries = [
  {
    id: 'n_a',
    label: 'N/A',
  },
  {
    id: 'austria',
    label: 'Austria',
  },
  {
    id: 'belgium',
    label: 'Belgium',
  },
  {
    id: 'bulgaria',
    label: 'Bulgaria',
  },
  {
    id: 'croatia',
    label: 'Croatia',
  },
  {
    id: 'cyprus',
    label: 'Cyprus',
  },
  {
    id: 'czech_republic',
    label: 'Czech Republic',
  },
  {
    id: 'denmark',
    label: 'Denmark',
  },
  {
    id: 'estonia',
    label: 'Estonia',
  },
  {
    id: 'finland',
    label: 'Finland',
  },
  {
    id: 'france',
    label: 'France',
  },
  {
    id: 'germany',
    label: 'Germany',
  },
  {
    id: 'greece',
    label: 'Greece',
  },
  {
    id: 'hungary',
    label: 'Hungary',
  },
  {
    id: 'ireland',
    label: 'Ireland',
  },
  {
    id: 'italy',
    label: 'Italy',
  },
  {
    id: 'latvia',
    label: 'Latvia',
  },
  {
    id: 'lithuania',
    label: 'Lithuania',
  },
  {
    id: 'luxembourg',
    label: 'Luxembourg',
  },
  {
    id: 'malta',
    label: 'Malta',
  },
  {
    id: 'netherlands',
    label: 'The Netherlands',
  },
  {
    id: 'poland',
    label: 'Poland',
  },
  {
    id: 'portugal',
    label: 'Portugal',
  },
  {
    id: 'romania',
    label: 'Romania',
  },
  {
    id: 'slovakia',
    label: 'Slovakia',
  },
  {
    id: 'slovenia',
    label: 'Slovenia',
  },
  {
    id: 'spain',
    label: 'Spain',
  },
  {
    id: 'sweden',
    label: 'Sweden',
  },
  {
    id: 'united_kingdom',
    label: 'United Kingdom',
  },
];

const languages = [
  {
    id: 'en',
    label: 'English',
  },
  {
    id: 'de',
    label: 'German',
  },
  {
    id: 'fr',
    label: 'French',
  },
  {
    id: 'other',
    label: 'Other',
  },
];

const sortByLabel: ((a: { id: string; label: string }, b: { id: string; label: string }) => number) | undefined = (
  a,
  b
) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0);
const incidentTypes = [
  {
    id: 'earthquake',
    label: 'NAT Earthquake',
    // show: ['incidentCategory = general', 'incidentCategory = natural', 'incidentCategory = nattech'],
  },
  {
    id: 'eruption',
    label: 'NAT - Volcanic eruption',
  },
  {
    id: 'movement',
    label: 'NAT - Mass movement',
  },
  {
    id: 'storm',
    label: 'NAT - Storm',
  },
  {
    id: 'tornado',
    label: 'NAT - Tornado',
  },
  {
    id: 'cold',
    label: 'NAT - Extreme cold',
  },
  {
    id: 'heat',
    label: 'NAT - Extreme heat',
  },
  {
    id: 'drought',
    label: 'NAT - Drought',
  },
  {
    id: 'wildfire',
    label: 'NAT - Wildfire',
  },
  {
    id: 'river',
    label: 'NAT - River flood',
  },
  {
    id: 'flash',
    label: 'NAT - Flash flood',
  },
  {
    id: 'coastal',
    label: 'NAT - Coastal flood',
  },
  {
    id: 'landslide',
    label: 'NAT - Landslide',
  },
  {
    id: 'epidemics',
    label: 'NAT - Epidemics / Pandemics',
  },
  {
    id: 'infestation',
    label: 'NAT - Insect infestation',
  },
  {
    id: 'animal',
    label: 'NAT - Animal stampede',
  },
  {
    id: 'asteroids',
    label: 'NAT - Asteroids / Meteoroids / Comets',
  },
  {
    id: 'chemical',
    label: 'Chemical spill',
  },
  {
    id: 'explosion',
    label: 'Explosion',
  },
  {
    id: 'fire',
    label: 'Fire',
  },
  {
    id: 'gas',
    label: 'Gas leak',
  },
  {
    id: 'nuclear',
    label: 'Nuclear accident',
  },
  {
    id: 'aircrash',
    label: 'Air crash',
  },
  {
    id: 'roadaccident',
    label: 'Road accident',
  },
  {
    id: 'railaccident',
    label: 'Rail accident',
  },
  {
    id: 'wateraccident',
    label: 'Accident on water',
  },
  {
    id: 'infra',
    label: 'Collapse of infra',
  },
  {
    id: 'drinkingwater',
    label: 'Drinking water failure',
  },
  {
    id: 'energy_failure',
    label: 'Energy failure',
  },
  {
    id: 'ict_failure',
    label: 'Telecom / ICT failure',
  },
  {
    id: 'bomb',
    label: 'Bomb attack',
  },
  {
    id: 'cbrn',
    label: 'CBRN attack',
  },
  {
    id: 'cyber_attack',
    label: 'Cyber attack',
  },
  {
    id: 'cyber_crime',
    label: 'Cyber crime',
  },
].sort(sortByLabel);

const cips = [
  {
    id: 'drinking_water',
    label: 'Drinking water',
  },
  {
    id: 'electricity',
    label: 'Electricity',
  },
  {
    id: 'gas_supply',
    label: 'Gas supply',
  },
  {
    id: 'public_health',
    label: 'Public Health',
  },
  {
    id: 'telecom_ict',
    label: 'Telecom/ICT',
  },
  {
    id: 'transport_air',
    label: 'Transport - Air',
  },
  {
    id: 'transport_rail',
    label: 'Transport - Rail',
  },
  {
    id: 'transport_rivers',
    label: 'Transport - Rivers',
  },
  {
    id: 'transport_sea',
    label: 'Transport - Sea',
  },
  {
    id: 'water_management',
    label: 'Water management',
  },
  {
    id: 'other',
    label: 'Other',
  },
];

const impactLevels = [
  {
    id: 'unknown',
    label: 'Unknown',
  },
  {
    id: 'veryHigh',
    label: 'Very high',
  },
  {
    id: 'high',
    label: 'High',
  },
  {
    id: 'neutral',
    label: 'Neutral',
  },
  {
    id: 'limited',
    label: 'Limited',
  },
  {
    id: 'veryLimited',
    label: 'Very limited',
  },
];

const qualityLevels = [
  {
    id: 'unknown',
    label: 'Unknown',
  },
  {
    id: 'very_poor',
    label: 'Very poor',
  },
  {
    id: 'poor',
    label: 'Poor',
  },
  {
    id: 'neutral',
    label: 'Neutral',
  },
  {
    id: 'good',
    label: 'Good',
  },
  {
    id: 'very_good',
    label: 'Very good',
  },
];

const improvementLevels = [
  {
    id: 'unknown',
    label: 'Unknown',
  },
  {
    id: 'none',
    label: 'None',
  },
  {
    id: 'limited',
    label: 'Limited',
  },
  {
    id: 'moderate',
    label: 'Moderate',
  },
  {
    id: 'considerable',
    label: 'Considerable',
  },
  {
    id: 'very_high',
    label: 'Very high',
  },
];

const costLevels = [
  {
    id: 'unknown',
    label: 'Unknown',
  },
  {
    id: 'less_then_100000',
    label: 'Less then 100.000',
  },
  {
    id: 'between_100_200_thousand',
    label: '100 - 200 thousand',
  },
  {
    id: 'between_200_500_thousand',
    label: '200 - 500 thousand',
  },
  {
    id: 'more_than_half_million',
    label: '0,5 - 1 million',
  },
  {
    id: 'one_to_two_million',
    label: '1 - 2 million',
  },
  {
    id: 'two_to_five_million',
    label: '2 - 5 million',
  },
  {
    id: 'five_to_ten_million',
    label: '5 - 10 million',
  },
  {
    id: 'more_then_10_million',
    label: 'More then 10 million',
  },
];

export const templateInfo = {
  author: 'Dirk Stolk',
  created: '2018-10-23',
  version: 'v0.0.1',
  tableOfContent: 'Table of Content',
  and: 'and',
  docInfoTitle: 'Document info',
  authorLabel: 'Author',
  releaseLabel: 'Comments',
  versionLabel: 'Version',
  createdLabel: 'Created on',
  updatedLabel: 'Updated on',
  nextLabel: 'Next',
  prevLabel: 'Previous',
  showTemplateSelector: true,
};

const publicationType = [
  {
    id: 'title',
    label: 'English title',
    type: 'text',
    required: true,
    icon: 'title',
    className: 'col s6',
  },
  {
    id: 'orgTitle',
    label: 'Original title (if applicable)',
    type: 'text',
    icon: 'title',
    className: 'col s6',
  },
  { id: 'author', type: 'text', label: 'First author and/or organisation', icon: 'person', className: 'col s9' },
  { id: 'yearOfPublication', type: 'number', min: 1900, max: 2100, label: 'Year of publication', className: 'col s3' },
  { id: 'url', label: 'Link', type: 'url', icon: 'link', className: 'col s6' },
  { id: 'language', label: 'Language', type: 'select', value: 'en', options: languages, className: 'col s3' },
  {
    id: 'dissemination',
    required: true,
    label: 'Dissemination level',
    type: 'select',
    className: 'col s3',
    options: [
      {
        id: 'public',
        label: 'Public',
      },
      {
        id: 'restricted',
        label: 'Restricted',
      },
      {
        id: 'secret',
        label: 'Secret',
      },
    ],
  },
  {
    id: 'otherLanguage',
    label: 'Other language',
    type: 'text',
    show: 'language = other',
    options: languages,
    className: 'col s3',
  },
] as Form;

const incidentCategories = [
  {
    id: 'general',
    label: 'Incidents in general',
  },
  {
    id: 'natural',
    label: 'Natural incidents',
  },
  {
    id: 'technological',
    label: 'Technological incidents',
  },
  {
    id: 'nattech',
    label: 'Natural and Technological incidents',
  },
  {
    id: 'attacks',
    label: 'Intentional incidents / Attacks',
  },
];

export const eventTypes = [
  { id: 'disaster', label: 'Crisis or disaster' },
  { id: 'incident' },
  { id: 'action', label: 'Preventive activity' },
  { id: 'test', label: 'Test or trial' },
  { id: 'training', label: 'Training or exercise' },
];

const cipOptions = [
  {
    id: 'drinkingWater',
    label: 'Drinking water',
  },
  {
    id: 'electricity',
    label: 'Electricity',
  },
  {
    id: 'gasSupply',
    label: 'Gas supply',
  },
  {
    id: 'publicHealth',
    label: 'Public Health',
  },
  {
    id: 'telecomIct',
    label: 'Telecom/ICT',
  },
  {
    id: 'airTransport',
    label: 'Transport - Air',
  },
  {
    id: 'railTransport',
    label: 'Transport - Rail',
  },
  {
    id: 'riverTransportRiver',
    label: 'Transport - Rivers',
  },
  {
    id: 'seaTransport',
    label: 'Transport - Sea',
  },
  {
    id: 'waterManagement',
    label: 'Water management',
  },
  {
    id: 'other',
    label: 'Other',
  },
].sort(sortByLabel);

const cmFunctions = [
  {
    id: 'risk_assessment',
    label: 'Risk assessment',
  },
  {
    id: 'protection_prevention',
    label: 'Protection/Prevention',
  },
  {
    id: 'contingency_planning',
    label: 'Contingency planning',
  },
  {
    id: 'collaboration_planning',
    label: 'Collaboration planning',
  },
  {
    id: 'education_training',
    label: 'Education & Training',
  },
  {
    id: 'asset_management',
    label: 'Asset management',
  },
  {
    id: 'detection_surveillance',
    label: 'Detection/Surveillance',
  },
  {
    id: 'risk_communication',
    label: 'Risk communication',
  },
  {
    id: 'alerting',
    label: 'Alerting, incl. 112',
  },
  {
    id: 'crisis_communication',
    label: 'Crisis communication',
  },
  {
    id: 'source_fighting',
    label: 'Source fighting',
  },
  {
    id: 'rescue_operations',
    label: 'Rescue operations',
  },
  {
    id: 'law_enforcement',
    label: 'Law enforcement',
  },
  {
    id: 'evacuation_shelter',
    label: 'Evacuation & Shelter',
  },
  {
    id: 'medical_treatment',
    label: 'Medical treatment',
  },
  {
    id: 'clear_incident_area',
    label: 'Clear incident area',
  },
  {
    id: 'basic_needs_supply',
    label: 'Basic needs supply',
  },
  {
    id: 'c4i',
    label: 'C4I',
  },
  {
    id: 'situation_assessment',
    label: 'Situation Assessment',
  },
  {
    id: 'collect_incident_data',
    label: 'Collect incident data',
  },
  {
    id: 'social_media_mining',
    label: 'Social media mining',
  },
  {
    id: 'volunteer_mgt',
    label: 'Volunteer mgt.',
  },
  {
    id: 'logistics',
    label: 'Logistics',
  },
  {
    id: 'humanitarian_recovery',
    label: 'Humanitarian recovery',
  },
  {
    id: 'environment_recovery',
    label: 'Environment recovery',
  },
  {
    id: 'infrastr',
    label: 'Re-establish infrastr.',
  },
].sort(sortByLabel);

const preSelectedCmFunctions = cmFunctions.map(f => ({ ...f, show: [`cmFunctions = ${f.id}`] }));
console.table(preSelectedCmFunctions);

const lessonForm: Form = [
  {
    type: 'md',
    value: `##### Observations
Description of positive or negative observations, experiences, etc. based on a single Crisis Management (CM) function.`,
  },
  {
    id: 'lessonCmFunctions',
    type: 'select',
    label: 'Applicable Crisis Management function',
    className: 'col s12',
    checkboxClass: 'col s6 m4',
    options: preSelectedCmFunctions,
  },
  {
    id: 'performance',
    label: 'Performance',
    type: 'select',
    className: 'col s6 l4',
    options: qualityLevels,
  },
  {
    id: 'responderHealthAndSafety',
    label: 'Responder health and safety',
    type: 'select',
    className: 'col s6 l4',
    options: qualityLevels,
  },
  {
    id: 'efficiency',
    label: 'Efficiency',
    type: 'select',
    className: 'col s6 l4',
    options: qualityLevels,
  },

  {
    type: 'md',
    value: `##### Improvement aspects
  Solution description – based on the observation – to meet one or more challenges of the event.`,
  },
  {
    id: 'lesson',
    type: 'textarea',
  },
  {
    id: 'solutionType',
    label: 'Nature of solution',
    type: 'options',
    options: [
      { id: 'doctrine', label: 'Doctrine/procedure' },
      { id: 'equipment', label: 'Equipment' },
      { id: 'ict', label: 'ICT' },
      { id: 'personnel', label: 'Personnel' },
      { id: 'training', label: 'Training' },
      { id: 'other', label: 'Other' },
    ],
  },

  {
    type: 'md',
    value: `##### Expectations
Expected effects on CM function once the solution has been implemented:`,
  },
  {
    id: 'effectsOnPerformance',
    label: 'Performance',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'effectsOnResponderHealthAndSafety',
    label: 'Responder health and safety',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'effectsOnEfficiency',
    label: 'Efficiency',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    type: 'md',
    value: 'Expected improvement of the CM function\'s status:',
  },
  {
    id: 'victimsImprovements',
    label: 'Numbers of victims/casualties',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'materialDamageImprovements',
    label: 'Material damage',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'ciLossImprovements',
    label: 'Loss of (critical) infrastructure services',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'socEcoDisruptionImprovements',
    label: 'Social / Economic disruption',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'environmentalDegradationImprovements',
    label: 'Environmental degradation',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'explanationImprovements',
    label: 'Explanation',
    type: 'textarea',
  },
];

export const llf: Form = [
  { id: 'general information', type: 'section' },
  {
    type: 'md',
    value: `#### Event description

This questionnaire allows you to capture the lessons that you've learned while dealing with an  incident or after running a specific event or trial.

_Fields marked with a <span style='color: red;'>*</span> are mandatory._
`,
  },
  {
    id: 'name',
    label: 'Name of the evaluated event',
    description: '_Short name to indicate the event and its evaluation (max. 70 characters)._',
    type: 'text',
    maxLength: 70,
    required: true,
    className: 'col s12 m8',
  },
  {
    id: 'eventType',
    label: 'Event type',
    type: 'select',
    className: 'col s12 m4',
    options: eventTypes,
  },
  {
    id: 'desc',
    label: 'Short description of the event',
    type: 'textarea',
  },
  {
    id: 'locationText',
    label: 'Location of the event',
    type: 'textarea',
  },
  // {
  //   id: 'eventPhase',
  //   type: 'select',
  //   multiple: true,
  //   label: 'Relevant disaster management phase(s):',
  //   className: 'col s12 m6',
  //   options: [
  //     {
  //       id: 'risk_assessment',
  //       label: 'Risk assessment',
  //     },
  //     {
  //       id: 'mi',
  //       label: 'Mitigation & Prevention',
  //     },
  //     {
  //       id: 'preparedness',
  //       label: 'Preparedness',
  //     },
  //     {
  //       id: 'response',
  //       label: 'Response',
  //     },
  //     {
  //       id: 'recovery',
  //       label: 'Recovery',
  //     },
  //   ],
  // },
  {
    id: 'startDate',
    type: 'date',
    label: 'Start date of the event',
    className: 'col s12 m6',
  },
  {
    id: 'endDate',
    type: 'date',
    label: 'End date of the event',
    className: 'col s12 m6',
  },
  // {
  //   id: 'areaType',
  //   type: 'select',
  //   label: 'Type of area:',
  //   className: 'col s12 m6',
  //   options: [
  //     {
  //       id: 'mixed',
  //       label: 'Mixed',
  //     },
  //     {
  //       id: 'centre',
  //       label: 'City/town centre',
  //     },
  //     {
  //       id: 'residential',
  //       label: 'Residential area',
  //     },
  //     {
  //       id: 'industrial',
  //       label: 'Industrial area',
  //     },
  //     {
  //       id: 'countryside',
  //       label: 'Countryside',
  //     },
  //     {
  //       id: 'water',
  //       label: 'Water',
  //     },
  //   ],
  // },
  // {
  //   id: 'incidentCategory',
  //   label: 'Incident category',
  //   className: 'col s12 m6',
  //   options: incidentCategories,
  // },
  // {
  //   id: 'incidentTypes',
  //   label: 'Select all the incident types that apply:',
  //   checkboxClass: 'col s12 m6 xl4',
  //   type: 'options',
  //   options: incidentTypes,
  // },

  // Incident characteristics
  { id: 'characteristics', type: 'section', label: 'Incident characteristics' },
  { type: 'md', value: '#### Incident characteristics' },
  {
    id: 'initialIncident',
    label: 'Initial incident',
    className: 'col s12 m4',
    type: 'select',
    options: incidentTypes,
  },
  {
    id: 'cascadingIncidents',
    label: 'Other involved incidents (cascading effects)',
    className: 'col s12 m8',
    multiple: true,
    options: incidentTypes,
  },
  {
    id: 'incidentInfo',
    label: 'Explanation',
    type: 'textarea',
  },
  { type: 'md', value: '#### Affected societal sectors' },
  {
    id: 'cip',
    label: 'Involved critical infrastructure',
    type: 'options',
    break: true,
    checkboxClass: 'col s6 m4',
    options: cipOptions,
  },
  {
    id: 'cipAdditional',
    label: 'Other involved societal sectors (if any)',
    type: 'textarea',
  },
  {
    id: 'cipInfo',
    label: 'Explanation',
    type: 'textarea',
  },

  // SCALE
  { id: 'geo', type: 'section', label: 'Geographic scale' },
  {
    type: 'md',
    value: `#### Geographical scale of the event

Overview of the geographic and organisational dimensions of the event.`,
  },
  { id: 'location', type: 'map', className: 'col s12' },
  {
    id: 'geo',
    label: 'Inside and/or outside the EU',
    type: 'select',
    className: 'col s6 m4',
    options: [
      {
        id: 'inside',
        label: 'Inside EU',
      },
      {
        id: 'inside_outside',
        label: 'Inside and outside EU',
      },
      {
        id: 'europe',
        label: 'Elsewhere in Europe',
      },
      {
        id: 'outside',
        label: 'Outside Europe',
      },
    ],
  },
  {
    id: 'international',
    label: 'International dimension',
    type: 'select',
    className: 'col s6 m4',
    options: [
      {
        id: 'one_country',
        label: 'One country',
      },
      {
        id: 'bi_tri',
        label: 'Bi/Tri national',
      },
      {
        id: 'multi',
        label: 'Multi-national',
      },
      {
        id: 'pan_eu',
        label: 'Pan EU',
      },
      {
        id: 'european',
        label: 'European',
      },
      {
        id: 'extern_europe',
        label: 'Extern Europe',
      },
      {
        id: 'worldwide',
        label: 'Worldwide',
      },
    ],
  },
  {
    id: 'scale',
    label: 'Scale',
    type: 'select',
    className: 'col s6 m4',
    options: [
      {
        id: 'regional',
        label: 'Regional',
      },
      {
        id: 'national',
        label: 'National',
      },
      {
        id: 'pan_europe',
        label: 'Pan-Europe',
      },
      {
        id: 'global',
        label: 'Global',
      },
    ],
  },
  {
    id: 'memberCountries',
    label: 'Involved EU member state(s)',
    type: 'options',
    options: countries,
  },
  {
    id: 'scaleExplanation',
    label: 'Explanation',
    type: 'textarea',
  },

  // Involved organisations
  { id: 'organisations', type: 'section', label: 'Involved organisations' },
  {
    type: 'md',
    value: `#### Organisations that were involved in executing CM functions

Description of all organisations that have been involved in crisis management operations during the event.`,
  },
  {
    id: 'organisations',
    label: 'Add Organisation',
    repeat: true,
    type: [
      {
        id: 'name',
        label: 'Organisation',
        type: 'text',
        className: 'col s12 m4',
      },
      {
        id: 'type',
        label: 'Type of organisation',
        type: 'select',
        className: 'col s12 m4',
        options: [
          {
            id: 'none',
            label: 'Choose one option',
          },
          {
            id: 'fireBrigade',
            label: 'Firebrigade/Civil Prot.',
          },
          {
            id: 'policeMilitary',
            label: 'Police / Military',
          },
          {
            id: 'medicalServices',
            label: 'Medical services',
          },
          {
            id: 'searchAndRescue',
            label: 'Search and Rescue',
          },
          {
            id: 'coastguard',
            label: 'Coastguard',
          },
          {
            id: 'ngoVolunteerOrg.',
            label: 'NGO / Volunteer org.',
          },
          {
            id: 'monitoringInstitutes',
            label: 'Monitoring institutes',
          },
          {
            id: 'publicServices',
            label: 'Public services',
          },
          {
            id: 'criticalInfrastructures',
            label: 'Critical Infrastructures',
          },
          {
            id: 'commandCentres',
            label: 'Command centres',
          },
          {
            id: 'policyAuthorities',
            label: 'Policy / Authorities',
          },
          {
            id: 'internationalAgency',
            label: 'International agency',
          },
          {
            id: 'other',
            label: 'Other',
          },
        ],
      },
      {
        id: 'country',
        label: 'Country of organisation',
        type: 'select',
        className: 'col s12 m4',
        options: countries,
      },
      {
        id: 'info',
        label: 'Role during the event',
        type: 'textarea',
      },
    ],
  },

  // Impact & Challenges
  { id: 'impact', type: 'section', label: 'Impact & Challenges' },
  {
    type: 'md',
    value: `#### Impact & Challenges

Description of the (potential) impact of the incident(s) on society, expressed in criteria used by [UNISDR](https://www.unisdr.org/we/inform/terminology), and of the problems that have or had to be tackled by crisis management organisations.

##### Societal impact`,
  },
  {
    id: 'victims',
    type: 'select',
    label: 'Numbers of victims / casualties',
    className: 'col s6 xl4',
    options: impactLevels,
  },
  {
    id: 'materialDamage',
    type: 'select',
    label: 'Material damage',
    className: 'col s6 xl4',
    options: impactLevels,
  },
  {
    id: 'ci_loss',
    type: 'select',
    label: 'Loss of (critical) infrastructure services',
    className: 'col s6 xl4',
    options: impactLevels,
  },
  {
    id: 'soc_eco_disruption',
    label: 'Social / economical disruption',
    type: 'select',
    className: 'col s6 xl4',
    options: impactLevels,
  },
  {
    id: 'environmental_degradation',
    label: 'Environmental degradation',
    type: 'select',
    className: 'col s6 xl4',
    options: impactLevels,
  },
  {
    id: 'societalInfo',
    label: 'Explanation',
    type: 'textarea',
  },
  { type: 'md', value: '##### Challenges' },
  {
    id: 'cmFunctions',
    type: 'options',
    multiple: true,
    label: 'Applicable Crisis Management functions (up to 4)',
    className: 'col s12',
    checkboxClass: 'col s6 xl4',
    options: cmFunctions,
  },
  {
    id: 'challengesInfo',
    label: 'Explanation',
    type: 'textarea',
  },

  // LESSONS
  { id: 'lessons', type: 'section', label: 'Lessons' },
  { type: 'md', value: '#### Lessons' },
  { type: 'md', value: 'Lessons can be added to the event by pressing the + sign.' },

  {
    id: 'lessons',
    label: 'Lesson',
    repeat: true,
    type: lessonForm,
  },

  { id: 'editors', type: 'section' },
  { type: 'md', value: '#### Editors' },
  {
    id: 'editors',
    label: 'Editors',
    className: 'col s12',
    repeat: true,
    type: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        className: 'col s6',
        iconName: 'title',
        required: true,
      },
      { id: 'organisation', type: 'text', className: 'col s6' },
      { id: 'country', type: 'select', options: countries, className: 'col s6' },
      { id: 'lastEdit', label: 'Last edit on', type: 'date', className: 'col s6' },
      {
        id: 'info',
        label: 'Description of provided input',
        type: 'textarea',
      },
    ],
  },
  { id: 'created', label: 'Created "{{event}}" event on:', type: 'date', required: true },
  { id: 'sources', type: 'section' },
  { type: 'md', value: '#### Sources of information' },
  {
    id: 'publications',
    label: 'Add Publications',
    repeat: true,
    type: publicationType,
  },
  {
    id: 'multimedia',
    label: 'Add Multimedia sources',
    repeat: true,
    type: [
      { id: 'desc', label: 'Short description', type: 'textarea' },
      { id: 'owner', label: 'Owner', type: 'text', className: 'col s6' },
      {
        id: 'yearOfPublication',
        type: 'number',
        min: 1900,
        max: 2100,
        label: 'Year of publication',
        className: 'col s6',
      },
      { id: 'url', label: 'Link', type: 'url', icon: 'link', className: 'col s12' },
    ],
  },
] as Form;
