import { Form } from 'mithril-ui-form';

const countries = [
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
    label: 'Netherlands',
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
  {
    id: 'other',
    label: 'Other',
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
    label: 'Earthquake',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'eruption',
    label: 'Volcanic eruption',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'movement',
    label: 'Mass movement',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'storm',
    label: 'Storm',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'tornado',
    label: 'Tornado',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'cold',
    label: 'Extreme cold',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'heat',
    label: 'Extreme heat',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'drought',
    label: 'Drought',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'wildfire',
    label: 'Wildfire',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'river',
    label: 'River flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'flash',
    label: 'Flash flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'coastal',
    label: 'Coastal flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'landslide',
    label: 'Landslide',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'epidemics',
    label: 'Epidemics / Pandemics',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'infestation',
    label: 'Insect infestation',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'animal',
    label: 'Animal stampede',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'asteroids',
    label: 'Asteroids / Meteoroids / Comets',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'chemical',
    label: 'Chemical spill',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'explosion',
    label: 'Explosion',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'fire',
    label: 'Fire',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'gas',
    label: 'Gas leak',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'nuclear',
    label: 'Nuclear accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'aircrash',
    label: 'Air crash',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'roadaccident',
    label: 'Road accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'railaccident',
    label: 'Rail accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'wateraccident',
    label: 'Accident on water',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'infra',
    label: 'Collapse of infra',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'drinkingwater',
    label: 'Drinking water failure',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'energy_failure',
    label: 'Energy failure',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'ict_failure',
    label: 'Telecom / ICT failure',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'arson',
    label: 'Arson (fire raising)',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'bomb',
    label: 'Bomb attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'chemical',
    label: 'Chemical attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'biological',
    label: 'Biological attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'rn',
    label: 'Radiological or Nuclear attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'cyber_attack',
    label: 'Cyber attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'cyber_crime',
    label: 'Cyber crime',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'sabotage',
    label: 'Sabotage',
    show: ['incidentCategory = attack'],
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
    id: 'veryLow',
    label: 'Very low costs',
  },
  {
    id: 'low',
    label: 'Low costs',
  },
  {
    id: 'acceptable',
    label: 'Acceptable costs',
  },
  {
    id: 'high',
    label: 'High costs',
  },
  {
    id: 'tooHigh',
    label: 'Far too high costs',
  },
];

const riskLevels = [
  { id: 'none', label: 'None' },
  { id: 'veryLow', label: 'Very low' },
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' },
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
  { id: 'url', label: 'Link', type: 'url', icon: 'link', className: 'col s6', placeholder: 'https://...' },
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

export const eventTypes = [
  { id: 'incident', label: 'Incident, disaster or crisis' },
  { id: 'prevention', label: 'Preventive activity' },
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

const lessonForm: Form = [
  {
    type: 'md',
    value: `##### Observations
Description of positive or negative observations, experiences, etc. based on a single CM function.`,
  },
  {
    id: 'cmFunction',
    type: 'select',
    label: 'Applicable Crisis Management function',
    className: 'col s12',
    checkboxClass: 'col s6 m4',
    options: preSelectedCmFunctions,
  },
  {
    id: 'effectiveness',
    label: 'Quality/effectiveness',
    type: 'select',
    className: 'col s6 l4',
    options: qualityLevels,
  },
  {
    id: 'efficiency',
    label: 'Efficiency',
    type: 'select',
    className: 'col s6 l4',
    options: costLevels,
  },
  {
    id: 'responderHealthAndSafety',
    label: 'Health & Safety risks for responders',
    type: 'select',
    className: 'col s6 l4',
    options: riskLevels,
  },

  {
    type: 'md',
    value: `##### Improvement aspects
  Solution description – based on the observation – to meet one or more challenges of the event.`,
  },
  {
    id: 'lesson',
    label: 'Description of the lesson',
    type: 'textarea',
  },
  {
    id: 'solutionType',
    label: 'Nature of solution',
    type: 'options',
    checkboxClass: 'col s12 m6 xl3',
    options: [
      { id: 'doctrine', label: 'Doctrine/procedure' },
      { id: 'equipment', label: 'Equipment/ICT' },
      { id: 'personnel', label: 'Personnel/training' },
      { id: 'other', label: 'Other' },
    ],
  },

  {
    type: 'md',
    value: `##### Expectations
Expected improvement of the CM function once the solution has been implemented:`,
  },
  {
    id: 'effectsOnPerformance',
    label: 'Quality improvement',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'effectsOnEfficiency',
    label: 'Efficiency improvement',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'effectsOnResponderHealthAndSafety',
    label: 'Health & Safety risk reduction',
    type: 'select',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'expectedImprovementsInfo',
    label: 'Explanation of expected improvements',
    type: 'textarea',
  },
  {
    type: 'md',
    value: 'Expected impact reduction on the event:',
  },
  {
    id: 'victimsImprovements',
    label: 'Victims/casualties reduction',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'materialDamageImprovements',
    label: 'Material damage reduction',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'ciLossImprovements',
    label: 'Loss of services reduction',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'socEcoDisruptionImprovements',
    label: 'Social/economic disruption reduction',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'environmentalDegradationImprovements',
    label: 'Environmental degradation reduction',
    className: 'col s6 l4',
    options: improvementLevels,
  },
  {
    id: 'explanationImprovements',
    label: 'Explanation of expected impact reductions',
    type: 'textarea',
  },
];

export const llf: Form = [
  { id: 'general event data', type: 'section' },
  {
    type: 'md',
    value: `#### General event data
Name and general characteristics that describe the event.`,
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
    required: true,
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
    required: true,
    type: 'textarea',
  },
  {
    id: 'startDate',
    type: 'date',
    label: 'Start date of the event',
    required: true,
    className: 'col s12 m6',
  },
  {
    id: 'endDate',
    type: 'date',
    label: 'End date of the event',
    className: 'col s12 m6',
  },

  // Incident characteristics
  { id: 'characteristics', type: 'section', label: 'Incident characteristics' },
  { type: 'md', value: '#### Incident characteristics' },
  {
    id: 'incidentCategory',
    label: 'Initial incident category',
    className: 'col s12 m6',
    type: 'select',
    options: [
      { id: 'natural', label: 'Natural' },
      { id: 'technical', label: 'Technical' },
      { id: 'attack', label: 'Intentional (attacks, acts of terrorism)' },
    ],
  },
  {
    id: 'initialIncident',
    label: 'Initial incident',
    className: 'col s12 m6',
    type: 'select',
    options: incidentTypes,
  },
  {
    id: 'otherIncidents',
    label: 'Other incidents',
    className: 'col s12',
    multiple: true,
    options: incidentTypes.filter(i => i.show[0].indexOf('attack') < 0).map(i => ({ ...i, show: undefined })),
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
    type: 'md',
    value: `##### Description of the (potential) societal impact of the incident(s)

Description of the (potential) impact of the incident(s) on society, expressed in criteria used by [UNISDR](https://www.unisdr.org/we/inform/terminology), and of the problems that have or had to be tackled by crisis management organisations.`,
  },
  {
    id: 'victims',
    label: 'Numbers of victims',
    type: 'textarea',
  },
  {
    id: 'damage',
    label: 'Material damage',
    type: 'textarea',
  },
  {
    id: 'lossOfServices',
    label: 'Loss of services',
    type: 'textarea',
  },
  {
    id: 'disruption',
    label: 'Social/economic disruption',
    type: 'textarea',
  },
  {
    id: 'enviroment',
    label: 'Environmental degradation',
    type: 'textarea',
  },

  // SCALE
  { id: 'geo', type: 'section', label: 'Geographic characteristics' },
  {
    type: 'md',
    value: '#### Geographical characteristics of the event',
  },
  {
    id: 'geo',
    label: 'Inside and/or outside the EU',
    type: 'select',
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
    type: 'options',
    options: countries,
  },
  {
    id: 'scaleExplanation',
    label: 'Explanation',
    type: 'textarea',
  },
  {
    type: 'md',
    value: `##### Mark the event area on the map

_Use the buttons on the left to edit the map. Please remember to press the save button below to store your changes._`,
  },
  { id: 'location', type: 'map', className: 'col s12' },

  // Involved organisations
  { id: 'organisations', type: 'section', label: 'Involved organisations' },
  {
    type: 'md',
    value: `#### Organisations involved in executing CM functions

List of organisations that were involved in executing one or more crisis management functions during the event.`,
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
  { id: 'impact', type: 'section', label: 'Critical functions' },
  {
    type: 'md',
    value: '#### Critical crisis management functions',
  },
  {
    id: 'cmFunctions',
    type: 'options',
    multiple: true,
    required: true,
    label: 'Most essential crisis management functions for effectively handling this event',
    className: 'col s12',
    checkboxClass: 'col s6 xl4',
    options: cmFunctions,
  },
  {
    id: 'challengesInfo',
    label: 'Explanation of the importance of the selected CM functions',
    type: 'textarea',
  },

  // LESSONS
  { id: 'lessons', type: 'section', label: 'Lessons' },
  { type: 'md', value: '#### Lessons' },
  { type: 'md', value: 'Lessons can be added to the event by pressing the + sign.' },

  {
    id: 'lessons',
    label: 'Add lesson',
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
    label: 'Add publication',
    repeat: true,
    type: publicationType,
  },
  {
    id: 'multimedia',
    label: 'Add multimedia source',
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
