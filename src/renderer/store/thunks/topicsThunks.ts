// 1. 添加消息并同步到对应 Topic
import { AppThunk } from '@renderer/store';
import {
  deleteMessage,
  deleteMessages,
} from '@renderer/store/slices/messagesSlice';
import {
  removeMessageFromTopic,
  removeTopic,
} from '@renderer/store/slices/topicsSlice';

export const deleteMessageAndSyncToTopic =
  (topicId: string, messageId: string): AppThunk =>
  (dispatch, getState) => {
    // 删除消息
    dispatch(deleteMessage({ id: messageId }));

    // 从 topic 中移除
    dispatch(removeMessageFromTopic({ topicId, messageId }));
  };

export const deleteTopicAndSyncToMessages =
  (topicId: string): AppThunk =>
  (dispatch, getState) => {
    const topic = getState().topics[topicId];
    if (!topic) return;

    // 删除该 topic 的所有消息
    dispatch(deleteMessages(topic.messageIds));

    // 删除 topic
    dispatch(removeTopic(topicId));
  };
