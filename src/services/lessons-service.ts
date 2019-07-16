import { ILesson } from '../models';
import { ChannelNames } from '../models/channels';
import { RestService } from './rest-service';

class LessonsService extends RestService<Partial<ILesson>> {
  constructor() {
    super('lessons', ChannelNames.LESSON);
    this.loadList();
  }
}

export const LessonsSvc = new LessonsService();
