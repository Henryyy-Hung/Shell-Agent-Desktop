import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { selectCurrentTopicId } from './chatConfigSelectors'

// 基础 selector：返回整个 topics 对象
export const selectTopics = (state: RootState) => state.topics

// 根据 id 获取单个 topic
export const selectTopicById = (state: RootState, topicId: string) => state.topics[topicId]

// 获取当前选中的 topic（结合 chatConfig）
export const selectCurrentTopic = createSelector(
  [selectTopics, selectCurrentTopicId],
  (topics, currentTopicId) => {
    if (!currentTopicId) return null
    return topics[currentTopicId] || null
  }
)

// 获取当前 topic 的全部消息
export const selectCurrentMessageIds = createSelector([selectCurrentTopic], (topic) => {
  if (!topic) return []
  return topic.messageIds
})

// 根据 topicId 获取消息
export const selectMessageIdsByTopicId = createSelector(
  [selectTopics, (_: RootState, topicId: string) => topicId],
  (topics, topicId) => {
    const topic = topics[topicId]
    return topic ? topic.messageIds : []
  }
)

// 获取所有 topic 列表（值数组）
export const selectAllTopicsArray = createSelector([selectTopics], (topics) =>
  Object.values(topics)
)

// 获取按更新时间排序后的 topic 列表
export const selectSortedTopicsByUpdateTime = createSelector(
  [selectAllTopicsArray],
  (topicsArray) => [...topicsArray].sort((a, b) => b.updateTime - a.updateTime)
)
