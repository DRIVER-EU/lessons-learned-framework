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
  title: string;
  desc: string;
  /** GeoJSON area definition */
  location: { [key: string]: any };
  categories: string[]; // TODO Allow the user to specify defaults
  startDate: Date;
  endDate: Date;
  incidentTypes: string[];
  incidentCategory: string[];
  eventType: string;
  areaType: string;
  eventPhase: string[];
  editors: IEditor[];
  publications: IPublication[];
  multimedia: IMultimedia[];
  lessons?: Array<{ title: string; status: string; [key: string]: any }>;
  [key: string]: any;
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
