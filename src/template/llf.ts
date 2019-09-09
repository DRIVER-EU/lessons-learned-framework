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

export const incidentTypes = [
  {
    id: 'animalDisease',
    label: 'Animal disease',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'avalanche',
    label: 'Avalanche',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'earthquake',
    label: 'Earthquake',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'epidemics',
    label: 'Epidemics / Pandemics',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'cold',
    label: 'Extreme cold',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'heat',
    label: 'Extreme heat/drought',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'hail',
    label: 'Extreme hail or snowfall',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'rain',
    label: 'Extreme rainfall',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'coastal',
    label: 'Flood: Coastal flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'flash',
    label: 'Flood: Flash flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'river',
    label: 'Flood: River flood',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'wildfire',
    label: 'Forest fire',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'landslide',
    label: 'Landslide',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'meteorites',
    label: 'Meteorites',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'storm',
    label: 'Storm/tornado',
    show: ['incidentCategory = natural'],
  },
  {
    id: 'eruption',
    label: 'Volcanic eruption',
    show: ['incidentCategory = natural'],
  },

  // {
  //   id: 'movement',
  //   label: 'Mass movement',
  //   show: ['incidentCategory = natural'],
  // },
  // {
  //   id: 'infestation',
  //   label: 'Insect infestation',
  //   show: ['incidentCategory = natural'],
  // },
  // {
  //   id: 'animal',
  //   label: 'Animal stampede',
  //   show: ['incidentCategory = natural'],
  // },

  {
    id: 'infra',
    label: 'Collapse of infra',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'explosion',
    label: 'Explosion/gas leak',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'fire',
    label: 'Fire in building/infrastructure',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'chemical',
    label: 'Industry: Chemical spill',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'industrial_explosion',
    label: 'Industry: Explosion/fire',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'nuclear',
    label: 'Industry: Nuclear accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'gas_supply',
    label: 'Outage: Gas supply',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'power',
    label: 'Outage: Power (electricity)',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'ict_failure',
    label: 'Outage: Telecom/ICT',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'drinkingwater',
    label: 'Outage: Water supply',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'aircrash',
    label: 'Transport: Air crash',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'railaccident',
    label: 'Transport: Railway accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'roadaccident',
    label: 'Transport: Road accident',
    show: ['incidentCategory = technical'],
  },
  {
    id: 'wateraccident',
    label: 'Transport: Accident on the water',
    show: ['incidentCategory = technical'],
  },

  {
    id: 'arson',
    label: 'Arson (fire raising)',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'biological',
    label: 'Biological attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'bomb',
    label: 'Bombing (explosives)',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'chemical',
    label: 'Chemical attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'cyber_attack',
    label: 'Cyber attack/crime',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'dumping',
    label: 'Dumping waste',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'rn',
    label: 'Radiological/nuclear attack',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'sabotage',
    label: 'Sabotage',
    show: ['incidentCategory = attack'],
  },
  {
    id: 'vandalism',
    label: 'Vandalism',
    show: ['incidentCategory = attack'],
  },
].sort(sortByLabel);

const societalSectors = [
  { id: 'authorities', label: 'Authorities / Administration' },
  { id: 'business_industry', label: 'Business and industry' },
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'mass_media', label: 'Mass media' },
  { id: 'public_transport', label: 'Public transport' },
  { id: 'transport', label: 'Transport in general' },
  { id: 'other', label: 'Other' },
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

const publicationForm = [
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
  {
    id: 'url',
    label: 'Link',
    type: 'url',
    icon: 'link',
    className: 'col s6',
  },
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
  { id: 'crisis', label: 'Crisis' },
  { id: 'disaster', label: 'Disaster' },
  { id: 'incident', label: 'Incident' },
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

export const cmFunctions = [
  { id: 'risk_assessment', label: 'Risk assessment' },
  { id: 'planning', label: 'Planning/Doctrines' },
  { id: 'education_training', label: 'Education & Training' },
  { id: 'risk_communication', label: 'Crisis/Risk communication' },
  { id: 'detection_surveillance', label: 'Detection/Surveillance' },
  { id: 'alerting', label: 'Alerting, incl. 112' },
  { id: 'scale', label: 'Up-scale/Down-scale' },
  { id: 'fight_incident_sources', label: 'Fight/Eliminate incident source' },
  { id: 'rescue_operations', label: 'Rescue operations' },
  { id: 'law_enforcement', label: 'Law enforcement' },
  { id: 'evacuation_shelter', label: 'Evacuation & Shelter' },
  { id: 'medical_treatment', label: 'Medical treatment' },
  { id: 'c3', label: 'C3/Information management' },
  { id: 'sa', label: 'Situation Assessment' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'volunteer_management', label: 'Volunteer management' },
  { id: 'social_media_mining', label: 'Social media mining' },
  { id: 'debris', label: 'Remove debris' },
  { id: 'restore', label: 'Restore criticial services' },
  { id: 'crowd_mgmt', label: 'Crowd management' },
  { id: 'traffic_mgmt', label: 'Traffic management' },
].sort(sortByLabel);

const preSelectedCmFunctions = cmFunctions.map(f => ({ ...f, show: [`cmFunctions = ${f.id}`] }));

const solutionTypes = [
  { id: 'doctrine', label: 'Doctrine/procedure' },
  { id: 'equipment', label: 'Equipment/ICT' },
  { id: 'personnel', label: 'Personnel/training' },
  { id: 'other', label: 'Other' },
];
const lessonForm: Form = [
  { id: 'name', type: 'text', label: 'Title', icon: 'title', required: true,   },
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
    label: 'Effectiveness',
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
    id: 'observationInfo',
    label: 'Explanation of the observation',
    type: 'textarea',
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
    type: 'radio',
    checkboxClass: 'col s12 m6 xl3',
    options: solutionTypes,
  },

  {
    type: 'md',
    value: `##### Expectations
Expected improvement of the CM function once the solution has been implemented:`,
  },
  {
    id: 'effectsOnPerformance',
    label: 'Effectiveness improvement',
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
    value: 'Expected impact reduction on the described incident:',
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

const incidentCategories = [
  { id: 'natural', label: 'Natural incident' },
  { id: 'technical', label: 'Technological/human failure' },
  { id: 'attack', label: 'Intentional incident' },
];
const geographicRegion = [
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
];
const internationalDimension = [
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
];
const scale = [
  {
    id: 'local',
    label: 'Local',
  },
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
];
const organisationType = [
  {
    id: 'authority',
    label: 'Authority',
  },
  {
    id: 'fireBrigade',
    label: 'Firebrigade',
  },
  {
    id: 'civil_protection',
    label: 'Civil Protection',
  },
  {
    id: 'police',
    label: 'Police',
  },
  {
    id: 'medical_services',
    label: 'Medical services',
  },
  {
    id: 'public_services',
    label: 'Other local public service',
  },
  {
    id: 'defence',
    label: 'Defence',
  },
  {
    id: 'command_centres',
    label: 'Command and/or Control centres',
  },
  {
    id: 'monitoring_institute',
    label: 'Monitoring institute',
  },
  {
    id: 'cip',
    label: 'Critical Infrastructure provider',
  },
  {
    id: 'ngo_volunteer.',
    label: 'NGO/Voluntary organisation',
  },
  {
    id: 'training',
    label: 'Training institure',
  },
  {
    id: 'other',
    label: 'Other',
  },
].sort(sortByLabel);

const organisationForm: Form = [
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
    options: organisationType,
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
];

const editorForm = [
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
];

const multimediaForm = [
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
    id: 'locationText',
    label: 'Location of the event',
    required: true,
    type: 'textarea',
    className: 'col s12 m8',
  },
  {
    id: 'date',
    type: 'date',
    label: 'Date',
    required: true,
    className: 'col s12 m4',
  },
  {
    id: 'desc',
    label: 'Short description of the event',
    type: 'textarea',
  },

  // Incident characteristics
  { id: 'characteristics', type: 'section', label: 'Incident characteristics' },
  { type: 'md', value: `#### Incident characteristics
Description of the event scenario: characteristics of the incidents and their impact on society.` },
  {
    id: 'incidentCategory',
    label: 'Initial incident category',
    required: true,
    className: 'col s12 m6',
    type: 'select',
    options: incidentCategories,
  },
  {
    id: 'initialIncident',
    label: 'Initial incident',
    required: true,
    className: 'col s12 m6',
    type: 'select',
    options: incidentTypes,
  },
  {
    id: 'otherIncidents',
    label: 'Other incidents',
    className: 'col s12',
    multiple: true,
    options: incidentTypes.filter(i => i.show[0].indexOf('attack') < 0).map(i => ({ id: i.id, label: i.label })),
  },
  {
    id: 'incidentInfo',
    label: 'Explanation',
    type: 'textarea',
  },
  {
    id: 'scale',
    label: 'Scale of the incident and its impact',
    type: 'select',
    required: true,
    className: 'col s6',
    options: scale,
  },
  { type: 'md', value: '#### Affected societal sectors' },
  {
    id: 'societalSectors',
    label: 'Please select one or more',
    type: 'options',
    required: true,
    checkboxClass: 'col s6 m4',
    options: societalSectors,
  },
  {
    id: 'societalSectorsAdditional',
    label: 'Other involved societal sectors (if any)',
    type: 'textarea',
    show: ['societalSectors = other']
  },
  {
    id: 'societalSectorsInfo',
    label: 'Explanation',
    type: 'textarea',
  },
  {
    type: 'md',
    value: `#### Societal impact of the incident(s)

Description of the (potential) impact of the incident(s) on society, expressed in criteria used by [UNISDR](https://www.unisdr.org/we/inform/terminology), and of the problems that have or had to be tackled by crisis management organisations.`,
  },
  {
    id: 'victims',
    label: 'Number of victims',
    type: 'textarea',
    description: '_Killed, and seriously or slightly wounded persons._',
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
    id: 'environment',
    label: 'Environmental degradation',
    type: 'textarea',
  },

  // SCALE
  { id: 'geo', type: 'section', label: 'Geographic characteristics' },
  {
    type: 'md',
    value: `#### Geographical characteristics of the event

Geographic dimensions of the event scenario.`,
  },
  // {
  //   id: 'geo',
  //   label: 'Inside and/or outside the EU',
  //   type: 'select',
  //   required: true,
  //   className: 'col s6 m4',
  //   options: geographicRegion,
  // },
  // {
  //   id: 'international',
  //   label: 'International dimension',
  //   type: 'select',
  //   required: true,
  //   className: 'col s6 m4',
  //   options: internationalDimension,
  // },
  {
    id: 'memberCountries',
    label: 'Involved EU member state(s)',
    required: true,
    type: 'options',
    options: countries,
  },
  {
    id: 'otherCountries',
    label: 'Other countries',
    type: 'textarea',
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
    type: organisationForm,
    i18n: {
      createRepeat: 'Create a new organisation',
      editRepeat: 'Edit organisation',
    },
  },

  // Impact & Challenges
  { id: 'impact', type: 'section', label: 'Critical CM functions' },
  {
    type: 'md',
    value: '#### Critical Crisis Management functions',
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

  // { id: 'sources', type: 'section' },
  // { type: 'md', value: '#### Sources of information' },
  { id: 'publications', type: 'section' },
  { type: 'md', value: '#### Publications' },
  {
    id: 'publications',
    label: 'Add publication',
    repeat: true,
    type: publicationForm,
    i18n: {
      createRepeat: 'Create a new publication',
      editRepeat: 'Edit publication',
    },
  },
  { id: 'multimedia', label: 'Multimedia sources', type: 'section' },
  { type: 'md', value: '#### Multimedia sources' },
  {
    id: 'multimedia',
    label: 'Add multimedia source',
    repeat: true,
    type: multimediaForm,
    i18n: {
      createRepeat: 'Create a new multimedia source',
      editRepeat: 'Edit multimedia source',
    },
  },
  { id: 'editors', type: 'section' },
  { type: 'md', value: '#### Editors' },
  {
    id: 'editors',
    label: 'Add editor',
    className: 'col s12',
    repeat: true,
    type: editorForm,
    i18n: {
      createRepeat: 'Create a new editor',
      editRepeat: 'Edit editor',
    },
  },
  { id: 'created', label: 'Created "{{event}}" event on:', type: 'date', required: true },
] as Form;
