import { ChannelNames } from '../models/channels';
import { RestService } from './rest-service';

class LessonsService extends RestService<any> {
  constructor() {
    super('lessons', ChannelNames.LESSON);
  }
}

export const LessonsSvc = new LessonsService();
