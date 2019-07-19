import { IEvent } from '../models';
import { ChannelNames } from '../models/channels';
import { RestService } from './rest-service';

class EventsService extends RestService<Partial<IEvent>> {
  constructor() {
    super('events', ChannelNames.LESSON);
    this.loadList();
  }
}

export const EventsSvc = new EventsService();
