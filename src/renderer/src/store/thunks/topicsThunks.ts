import { AppThunk } from '@renderer/store'
import { deleteMessages } from '@renderer/store/slices/messagesSlice'
import { removeTopic } from '@renderer/store/slices/topicsSlice'

export const deleteTopicAndSyncToMessages =
  (topicId: string): AppThunk =>
  (dispatch, getState) => {
    const topic = getState().topics[topicId]
    if (!topic) return

    // 删除该 topic 的所有消息
    dispatch(deleteMessages(topic.messageIds))

    // 删除 topic
    dispatch(removeTopic(topicId))
  }
