import IdUtil from '@renderer/utils/IdUtil';
import { Topic } from '@renderer/types/domain/Topic';

export class TopicFactory {
  /**
   * 创建一个新的 Topic
   */
  static create(title: string): Topic {
    return {
      id: IdUtil.generateId(),
      title,
      messageIds: [],
      isProcessing: false,
      creationTime: Date.now(),
      updateTime: Date.now(),
    };
  }
}
