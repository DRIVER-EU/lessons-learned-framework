import m from 'mithril';
import { IEvent } from '../models';
import { ChannelNames } from '../models/channels';
import { RestService } from './rest-service';

class EventsService extends RestService<Partial<IEvent>> {
  constructor() {
    super('events', ChannelNames.LESSON);
    this.loadList();
  }

  public async loadList(): Promise<Array<Partial<IEvent>> | undefined> {
    const filter = 'view?props=$loki,name,desc,cmFunctions,initialIncident,eventType,lessons';
    // http://localhost:3000/events/view?props=name,cmFunctions,incidentType,eventType
    try {
      const result = await m.request<IEvent[]>({
        method: 'GET',
        url: this.baseUrl + filter,
        withCredentials: this.withCredentials,
      });
      if (!result) {
        throw Error('No result found at ' + this.baseUrl);
      }
      this.setList(result);
      return this.list;
    } catch (error) {
      if (this.useDevServer) {
        throw Error(`No result found at ${this.baseUrl}\n${error}`);
      }
      this.useDevServer = true;
      this.baseUrl = this.createBaseUrl(true);
      return this.loadList();
    }
  }
}

export const EventsSvc = new EventsService();
