export type ICallback<T> = (data: T, envelope: IEnvelope<T>) => void;

/** Message enveloppe */
export interface IEnvelope<T> {
  /* Uses DEFAULT_CHANNEL if no channel is provided */
  channel?: string;
  /** Topic name */
  topic: string;
  /** Payload */
  data?: T;
}

export interface ISubscriptionDefinition<T> {
  /** Channel name */
  channel: string;
  /** Topic name, which is either a string, a # (will always be called), or a regex pattern.  */
  topic: string;
  /** Callback to invoke */
  callback: ICallback<T>;
  unsubscribe(): void;
}

export interface IChannelDefinition<T> {
  /** Name of the channel */
  channel: string;
  /** Subscribe to a topic. A topic can be a string, a # (all), or a regex pattern (as string) */
  subscribe(topic: string, callback: ICallback<T>): ISubscriptionDefinition<T>;
  /** Publish to a topic */
  publish(topic: string, data?: T): void;
}

export interface IPubSub {
  /**
   * Get the channel, which you can use to subscribe or for publising messages.
   * @param channelName channel name.
   */
  channel<T>(channelName?: string): IChannelDefinition<T>;
  /**
   * Publish directly to a channel and topic, without getting the channel first.
   * @param msg The message you want to publish.
   */
  publish<T>(msg: { channel: string; topic: string; data: T }): void;
}

/**
 * Publish/subscribe in-memory message bus, loosely based on postal.js (https://www.npmjs.com/package/postal).
 *
 */
class MessageBusService implements IPubSub {
  private channels: { [channel: string]: IChannelDefinition<any> } = {};

  /**
   * Create a new channel, or get an existing one.
   * @param channelName If no channel name is supplied, 'DEFAULT_CHANNEL' will be used.
   */
  public channel<T>(channelName: string = 'DEFAULT_CHANNEL') {
    if (!this.channels.hasOwnProperty(channelName)) {
      const newChannel = this.createChannel<T>(channelName);
      this.channels[channelName] = newChannel;
    }
    return this.channels[channelName] as IChannelDefinition<T>;
  }

  /**
   * Directly publish a message, without first obtaining the channel.
   * @param msg: Channel
   */
  public publish<T>({ channel, topic, data }: { channel: string; topic: string; data: T }) {
    this.channel(channel).publish(topic, data);
  }

  private createChannel<T>(channel: string): IChannelDefinition<T> {
    const topics: { [topic: string]: Array<ICallback<T>> } = {};

    const createSubscriber = () => (topic: string, callback: ICallback<T>) => {
      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
      const listeners = topics[topic];
      listeners.push(callback);
      return {
        channel,
        topic,
        callback,
        unsubscribe: () => {
          const callbackIndex = listeners.indexOf(callback);
          if (callbackIndex > -1) { listeners.splice(callbackIndex, 1); }
        },
      } as ISubscriptionDefinition<T>;
    };

    const createPublisher = () => (topic: string, data: T) => {
      const byTopic = (key: string) => topic === '#' || topic.startsWith(key) || /key/.test(topic);
      const toListeners = (key: string) => topics[key];
      const envelope = { channel, topic, data };
      Object.keys(topics)
        .filter(byTopic)
        .map(toListeners)
        .reduce((p, c) => [ ...p, ...c ], [])
        .forEach(cb => cb(data, envelope));
    };

    return {
      channel,
      subscribe: createSubscriber(),
      publish: createPublisher(),
    };
  }
}

export const messageBus = new MessageBusService();
