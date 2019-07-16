export interface ILokiObj {
  $loki: number;
  meta: {
    created: number; // Date().getTime()
    revision: number;
    updated: number; // Date().getTime()
    version: number;
  };
}

export interface ILesson extends ILokiObj {
  title: string;
  desc: string;
  /** GeoJSON area definition */
  area: { [key: string]: any };
  categories: string[]; // TODO Allow the user to specify defaults
  created: Date;
  edited: Date;
  editors: IEditor[];
  sources?: ISource[];
  lessons?: Array<{ title: string; status: string; [key: string]: any }>;
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
