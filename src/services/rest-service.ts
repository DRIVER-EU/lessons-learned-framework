import m from 'mithril';
import { AppState } from '../models/app-state';
import { TopicNames } from '../models/channels';
import { IChannelDefinition, messageBus } from './message-bus-service';

const log = console.log;
const error = console.error;

// export class RestService<T extends IBaseModel> {
export class RestService<T extends { $loki?: number }> {
  protected current: T = {} as T;
  protected list: T[] = [];
  protected baseUrl: string;
  protected channel: IChannelDefinition<{ list: T[] } | { cur: T; old: T }>;
  protected withCredentials = false;

  constructor(protected urlFragment: string, protected channelName?: string) {
    this.baseUrl = this.createBaseUrl();
    this.channel = messageBus.channel(channelName || urlFragment);
  }

  public getList() {
    return this.list;
  }

  public getCurrent() {
    return this.current;
  }

  public save(item: T, fd?: FormData) {
    return item.$loki ? this.update(item, fd) : this.create(item, fd);
  }

  public async create(item: T, fd?: FormData) {
    try {
      const result = await m.request<T>({
        method: 'POST',
        url: this.baseUrl,
        body: fd || item,
        withCredentials: this.withCredentials,
      });
      this.setCurrent(result);
      this.addItemToList(this.current);
      return this.current;
    } catch (err) {
      return error(err.message);
    }
  }

  public async update(item: T, fd?: FormData) {
    try {
      console.debug('put');
      await m
        .request({
          method: 'PUT',
          url: this.baseUrl + item.$loki,
          body: fd || item,
          withCredentials: this.withCredentials,
        })
        .catch(e => console.error(e));
      // this.setCurrent(data);
      this.current = item;
      this.updateItemInList(item);
      return this.current;
    } catch (err) {
      return error(err.message);
    }
  }

  public async delete(id = this.current.$loki) {
    try {
      await m.request<T>({
        method: 'DELETE',
        url: this.baseUrl + id,
        withCredentials: this.withCredentials,
      });
      log(`Deleted with id: ${id}.`);
      this.removeItemFromList(id);
    } catch (err) {
      return error(err.message);
    }
  }

  public async load(id?: number | string): Promise<T | undefined> {
    if (id === '-1') {
      return this.current;
    }
    const result = await m.request<T>({
      method: 'GET',
      url: this.baseUrl + id,
      withCredentials: this.withCredentials,
    });
    if (!result) {
      console.warn('No result found at ' + this.baseUrl);
    }
    this.setCurrent(result || {});
    this.updateItemInList(this.current);
    return this.current;
  }

  public async loadList(): Promise<T[] | undefined> {
    const result = await m.request<T[]>({
      method: 'GET',
      url: this.baseUrl,
      withCredentials: this.withCredentials,
    });
    if (!result) {
      console.warn('No result found at ' + this.baseUrl);
    }
    this.setList(result || []);
    return this.list;
  }

  public async new(item: T) {
    return this.create(item);
  }

  protected setList(value: T[]) {
    this.list = value;
    this.channel.publish(TopicNames.LIST_UPDATE, { list: this.list });
  }

  /** Create the base URL, either using the apiService or the apiDevService */
  protected createBaseUrl(): string {
    return `${AppState.apiService}/api/${this.urlFragment}/`;
  }

  private setCurrent(value: T) {
    const old = this.current;
    this.current = value;
    this.channel.publish(TopicNames.ITEM_UPDATE, { old, cur: this.current });
  }

  private addItemToList(item: T) {
    this.setList([...this.list, item]);
  }

  private updateItemInList(item: T) {
    this.setList(this.list.map(i => (i.$loki === item.$loki ? item : i)));
  }

  private removeItemFromList(id?: string | number) {
    this.setList([...this.list.filter(i => i.$loki !== id)]);
  }
}
