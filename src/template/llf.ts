import { Form } from 'mithril-ui-form';

export const countries = [
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
    show: ['incidentCategory=natural'],
  },
  {
    id: 'avalanche',
    label: 'Avalanche',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'earthquake',
    label: 'Earthquake',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'epidemics',
    label: 'Epidemics / Pandemics',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'cold',
    label: 'Extreme cold',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'heat',
    label: 'Extreme heat/drought',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'hail',
    label: 'Extreme hail or snowfall',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'rain',
    label: 'Extreme rainfall',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'coastal',
    label: 'Flood: Coastal flood',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'flash',
    label: 'Flood: Flash flood',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'river',
    label: 'Flood: River flood',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'wildfire',
    label: 'Forest fire',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'landslide',
    label: 'Landslide',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'meteorites',
    label: 'Meteorites',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'storm',
    label: 'Storm/tornado',
    show: ['incidentCategory=natural'],
  },
  {
    id: 'eruption',
    label: 'Volcanic eruption',
    show: ['incidentCategory=natural'],
  },

  // {
  //   id: 'movement',
  //   label: 'Mass movement',
  //   show: ['incidentCategory=natural'],
  // },
  // {
  //   id: 'infestation',
  //   label: 'Insect infestation',
  //   show: ['incidentCategory=natural'],
  // },
  // {
  //   id: 'animal',
  //   label: 'Animal stampede',
  //   show: ['incidentCategory=natural'],
  // },

  {
    id: 'infra',
    label: 'Collapse of infra',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'explosion',
    label: 'Explosion/gas leak',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'fire',
    label: 'Fire in building/infrastructure',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'chemical',
    label: 'Industry: Chemical spill',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'industrial_explosion',
    label: 'Industry: Explosion/fire',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'nuclear',
    label: 'Industry: Nuclear accident',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'gas_supply',
    label: 'Outage: Gas supply',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'power',
    label: 'Outage: Power (electricity)',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'ict_failure',
    label: 'Outage: Telecom/ICT',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'drinkingwater',
    label: 'Outage: Water supply',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'aircrash',
    label: 'Transport: Air crash',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'railaccident',
    label: 'Transport: Railway accident',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'roadaccident',
    label: 'Transport: Road accident',
    show: ['incidentCategory=technical'],
  },
  {
    id: 'wateraccident',
    label: 'Transport: Accident on the water',
    show: ['incidentCategory=technical'],
  },

  {
    id: 'arson',
    label: 'Arson (fire raising)',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'biological',
    label: 'Biological attack',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'bomb',
    label: 'Bombing (explosives)',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'chemical_attack',
    label: 'Chemical attack',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'cyber_attack',
    label: 'Cyber attack/crime',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'dumping',
    label: 'Dumping waste',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'rn',
    label: 'Radiological/nuclear attack',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'sabotage',
    label: 'Sabotage',
    show: ['incidentCategory=attack'],
  },
  {
    id: 'vandalism',
    label: 'Vandalism',
    show: ['incidentCategory=attack'],
  },
].sort(sortByLabel);

const societalSectors = [
  { id: 'drinking_water', label: 'Drinking water' },
  { id: 'education', label: 'Education/Research' },
  { id: 'energy_supply', label: 'Energy supply' },
  { id: 'financial_services', label: 'Financial services' },
  { id: 'food_agriculture', label: 'Food/Agriculture' },
  { id: 'government_administr.', label: 'Government/Administr.' },
  { id: 'industry', label: 'Industry' },
  { id: 'legal_order', label: 'Legal order' },
  { id: 'media_culture', label: 'Media/Culture' },
  { id: 'public_health', label: 'Public health' },
  { id: 'public_order', label: 'Public order/safety' },
  { id: 'retail_trade', label: 'Retail trade' },
  { id: 'telecom_internet', label: 'Telecom/Internet' },
  { id: 'transport', label: 'Transport' },
  { id: 'water_management', label: 'Water management' },
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
  {
    id: 'na',
    label: 'Not applicable',
  },
];

// export const templateInfo = {
//   author: 'Dirk Stolk',
//   created: '2018-10-23',
//   version: 'v0.0.1',
//   tableOfContent: 'Table of Content',
//   and: 'and',
//   docInfoTitle: 'Document info',
//   authorLabel: 'Author',
//   releaseLabel: 'Comments',
//   versionLabel: 'Version',
//   createdLabel: 'Created on',
//   updatedLabel: 'Updated on',
//   nextLabel: 'Next',
//   prevLabel: 'Previous',
//   showTemplateSelector: true,
// };

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
  { id: 'crisis', label: 'Incident, crisis or disaster' },
  { id: 'prevention', label: 'Preventive activity' },
  { id: 'test', label: 'Test or trial' },
  { id: 'training', label: 'Training or exercise' },
];

export const cmFunctions = [
  { id: 'risk_assessment', label: 'Risk assessment' },
  { id: 'planning', label: 'Planning/Doctrines' },
  { id: 'education_training', label: 'Education & Training' },
  { id: 'risk_communication', label: 'Crisis/Risk communication' },
  { id: 'detection_surveillance', label: 'Detection/Surveillance' },
  { id: 'alerting', label: 'Alerting, incl. 112' },
  { id: 'scale', label: 'Up-scale/Down-scale' },
  { id: 'fight_incident_sources', label: 'Fight/Eliminate incident source' },
  { id: 'rescue_operations', label: 'Rescue operations/SAR' },
  { id: 'law_enforcement', label: 'Law enforcement' },
  { id: 'evacuation_shelter', label: 'Evacuation & Shelter' },
  { id: 'medical_treatment', label: 'Emergency Health Care' },
  { id: 'c3', label: 'C3/Information management' },
  { id: 'sa', label: 'Situation Assessment' },
  { id: 'logistics', label: 'Logistics/Resource mgt.' },
  { id: 'volunteer_management', label: 'Volunteer management' },
  { id: 'social_media_mining', label: 'Social media mining' },
  { id: 'debris', label: 'Remove debris' },
  { id: 'restore', label: 'Restore criticial services' },
  { id: 'crowd_mgmt', label: 'Crowd management' },
  { id: 'traffic_mgmt', label: 'Traffic management' },
  { id: 'decontamination', label: 'Decontamination' },
  { id: 'collaboration', label: 'International collaboration' },
  { id: 'needs', label: 'Provide basic needs' },
].sort(sortByLabel);

const preSelectedCmFunctions = cmFunctions.map(f => ({ ...f, show: [`cmFunctions = ${f.id}`] }));

const solutionTypes = [
  { id: 'doctrine', label: 'Doctrine/procedure' },
  { id: 'equipment', label: 'Equipment/tools' },
  { id: 'ict', label: 'ICT' },
  { id: 'personnel', label: 'Personnel' },
  { id: 'training', label: 'Training' },
  { id: 'other', label: 'Other' },
];
const lessonForm: Form = [
  { id: 'name', type: 'text', label: 'Title', icon: 'title', required: true },
  {
    type: 'md',
    value: '##### Observation',
  },
  {
    id: 'cmFunction',
    type: 'select',
    label: 'Applicable Crisis Management function',
    className: 'col s12',
    multiple: true,
    options: preSelectedCmFunctions,
  },
  {
    id: 'effectiveness',
    type: 'select',
    label: 'Observed effectiveness during the event',
    className: 'col s6',
    options: qualityLevels,
  },
  {
    id: 'observationInfo',
    label: 'Explanation of the observation',
    description:
      '_Description of the observation, positive or negative experiences, etc. with respect to the CM-function._',
    type: 'textarea',
  },

  {
    type: 'md',
    value: `##### Improvement aspects
Solution to improve effectiveness of the Crisis Management function.`,
  },
  {
    id: 'solutionType',
    label: 'Nature of solution',
    type: 'options',
    multiple: true,
    checkboxClass: 'col s12 m6 xl4',
    options: solutionTypes,
  },
  {
    id: 'lesson',
    label: 'Description of the solution',
    type: 'textarea',
  },

  {
    type: 'md',
    value: `##### Expectations
Consequences of the solution on the Crisis Management function when it has been implemented:`,
  },
  {
    id: 'effectsOnPerformance',
    label: 'Effectiveness improvement',
    type: 'select',
    className: 'col s12',
    options: improvementLevels,
  },
  {
    id: 'expectedImprovementsInfo',
    label: 'Explanation of the expected improvement of the CM-function',
    type: 'textarea',
  },
  {
    type: 'md',
    value:
      'Impact reduction of the solution in comparison to current practices (legacy) in case of the event’s incident:',
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
const scale = [
  { id: 'local', label: 'Local' },
  { id: 'regional', label: 'Regional' },
  { id: 'national', label: 'National' },
  { id: 'pan_europe', label: 'Pan-Europe' },
  { id: 'global', label: 'Global' },
];
const organisationType = [
  { id: 'authority', label: 'Authority' },
  { id: 'fireBrigade', label: 'Firebrigade' },
  { id: 'civil_protection', label: 'Civil Protection' },
  { id: 'police', label: 'Police' },
  { id: 'medical_services', label: 'Medical services', },
  { id: 'public_services', label: 'Other local public service' },
  { id: 'defence', label: 'Defence' },
  { id: 'command_centres', label: 'Command and/or Control centres' },
  { id: 'monitoring_institute', label: 'Monitoring institute' },
  { id: 'cip', label: 'Critical Infrastructure provider' },
  { id: 'ngo_volunteer.', label: 'NGO/Voluntary organisation' },
  { id: 'training', label: 'Training institute' },
  { id: 'other', label: 'Other' },
  { id: 'research_organisation', label: 'Research organisations' },
  { id: 'industry_sme', label: 'Industry/SME' },
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
    className: 'col s12',
  },
  {
    id: 'date',
    type: 'date',
    label: 'Start date of the event',
    required: true,
    className: 'col s12 m6',
  },
  {
    id: 'duration',
    type: 'number',
    label: 'Duration of the event (in days)',
    value: 1,
    required: true,
    className: 'col s12 m6',
  },
  {
    id: 'desc',
    label: 'Short description of the event',
    type: 'textarea',
  },

  // Incident characteristics
  { id: 'characteristics', type: 'section', label: 'Incident characteristics' },
  {
    type: 'md',
    value: `#### Incident characteristics
Description of the event scenario: characteristics of the incidents and their impact on society.`,
  },
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
    label: 'Explanation of the incident',
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
    checkboxClass: 'col s6 xl4',
    options: societalSectors,
  },
  {
    id: 'societalSectorsAdditional',
    label: 'Other involved societal sectors (if any)',
    type: 'textarea',
    show: ['societalSectors = other'],
  },
  {
    id: 'societalSectorsInfo',
    label: 'Explanation of the involved societal sectors',
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
    placeholder: 'Killed, and seriously or slightly wounded persons.',
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
    checkboxClass: 'col s6 m4 xl3',
    options: countries,
  },
  {
    id: 'otherCountries',
    label: 'Other countries',
    type: 'textarea',
  },
  {
    id: 'intInstitutions',
    label: 'International institutions',
    type: 'textarea',
  },
  {
    id: 'scaleExplanation',
    label: 'Explanation of the geographic scale',
    type: 'textarea',
  },
  {
    type: 'md',
    value: `##### Mark the event area on the map

_Use the buttons on the left to edit the map. You can add lines, polygons, squares and points of interest. Please remember to press the save button (one but last) to store your changes._`,
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
    label: 'CM functions of specific interest for adequately handling this event',
    className: 'col s12',
    checkboxClass: 'col s12 m6',
    options: cmFunctions,
  },
  {
    id: 'challengesInfo',
    label: 'Explanation of the challenge(s)',
    type: 'textarea',
  },

  // LESSONS
  { id: 'lessons', type: 'section', label: 'Lessons' },
  { type: 'md', value: '#### Lessons' },
  { type: 'md', value: 'Lessons learned can be added to the event by pressing the + sign.' },

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
