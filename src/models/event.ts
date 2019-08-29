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
  name: string;
  desc: string;
  eventType: string;
  locationText: string;
  /** Initial incident category */
  incidentCategory: string;
  initialIncident: string;
  otherIncidents: string[];
  incidentInfo: string;
  startDate: Date;
  endDate: Date;
  societalSectors: string[];
  societalSectorsAdditional: string;
  incidentTypes: string[];
  victims: string;
  damage: string;
  lossOfServices: string;
  disruption: string;
  environment: string;
  /** Geographic region */
  geo: string;
  /** internationalDimension */
  international: string;
  scale: string;
  scaleExplanation: string;
  memberCountries: string[];
  /** GeoJSON area definition */
  location: { [key: string]: any };
  organisations: IOrganisation[];
  cmFunctions: string[];
  challengesInfo: string;
  lessons?: ILesson[];
  editors: IEditor[];
  publications: IPublication[];
  multimedia: IMultimedia[];
}

interface IEditor {
  name: string;
  role: string;
  region: string;
  country: string;
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
}
