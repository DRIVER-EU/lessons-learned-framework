import { ILesson } from './lesson';
import { IOrganisation } from './organisation';

export interface ILokiObj {
  $loki: number;
  meta: {
    created: number; // Date().getTime()
    revision: number;
    updated: number; // Date().getTime()
    version: number;
  };
}

export interface IEvent extends ILokiObj {
  /** Owner of the document */
  owner: string;
  /** If true, the document is published */
  published: boolean;
  /** List of emails of the persons who can edit this document */
  canEdit: string[];
  challengesInfo: string;
  cmFunctions: string[];
  damage: string;
  date: Date;
  desc: string;
  disruption: string;
  editors: IEditor[];
  effectsOnEfficiency: string;
  effectsOnPerformance: string;
  effectsOnResponderHealthAndSafety: string;
  environment: string;
  eventType: string;
  geo: string;
  incidentCategory: string;
  incidentInfo: string;
  incidentTypes: string[];
  initialIncident: string;
  international: string;
  lessons?: ILesson[];
  location: { [key: string]: any };
  locationText: string;
  lossOfServices: string;
  memberCountries: string[];
  multimedia: IMultimedia[];
  name: string;
  organisations: IOrganisation[];
  otherCountries: string;
  otherIncidents: string | string[];
  publications: IPublication[];
  scale: string;
  scaleExplanation: string;
  societalSectors: string[];
  societalSectorsAdditional: string;
  societalSectorsInfo: string;
  victims: string;
}

interface IEditor {
  name: string;
  role: string;
  region: string;
  country: string;
  organisation: string;
}

export interface IPublication {
  title: string;
  orgTitle?: string;
  author?: string;
  yearOfPublication?: number;
  url?: string;
  language?: string;
  dissemination?: string;
  otherLanguage?: string;
}

export interface IMultimedia {
  desc?: string;
  owner?: string;
  url?: string;
  yearOfPublication?: string;
}
