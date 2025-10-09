// 1. 添加消息并同步到对应 Topic
import { AppThunk } from '@renderer/store';
import { ChatMessage } from '@renderer/types/ChatMessage';
import {
  insertMessage,
  updateMessage,
} from '@renderer/store/slices/messagesSlice';
import {
  addMessageToTopic,
  updateTopic,
} from '@renderer/store/slices/topicsSlice';
import { Topic } from '@renderer/types/Topic';

export const addMessageAndSyncToTopic =
  (topicId: string, message: ChatMessage): AppThunk =>
  (dispatch, getState) => {
    // 插入消息
    dispatch(insertMessage(message));

    // 同步到 topic
    dispatch(addMessageToTopic({ topicId, messageId: message.id }));
  };

// 2. 更新消息并（如果必要）同步到 Topic 的更新时间等信息
export const updateMessageAndSyncToTopic =
  (topicId: string, message: ChatMessage): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMessage(message));

    const topic = getState().topics[topicId];
    if (topic) {
      // 示例：更新 topic 的 updateTime 或其他元数据
      const newTopic: Topic = {
        ...topic,
        updateTime: Date.now(),
      };
      dispatch(updateTopic(newTopic));
    }
  };
