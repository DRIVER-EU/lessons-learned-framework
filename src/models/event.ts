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
  sources?: ISource[];
  lessons?: Array<{ title: string; status: string; [key: string]: any }>;
  [key: string]: any;
}

interface IEditor {
  name: string;
  role: string;
  region: string;
  country: string;
}

interface ISource {
  title: string;
  url: string;
}
