import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Topic} from '@renderer/types/domain/Topic';

export interface TopicsState {
  [id: string]: Topic;
}

const initialState: TopicsState = {};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    insertTopic(state, action: PayloadAction<Topic>) {
      state[action.payload.id] = action.payload;
    },
    updateTopic(state, action: PayloadAction<Topic>) {
      if (state[action.payload.id]) {
        state[action.payload.id] = action.payload;
      }
    },
    removeTopic(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
    addMessageToTopic(
      state,
      action: PayloadAction<{ topicId: string; messageId: string }>,
    ) {
      const {topicId, messageId} = action.payload;
      if (state[topicId]) {
        state[topicId].messageIds.push(messageId);
        state[topicId].updateTime = Date.now();
      }
    },
    removeMessageFromTopic(
      state,
      action: PayloadAction<{ topicId: string; messageId: string }>,
    ) {
      const {topicId, messageId} = action.payload;
      const topic = state[topicId];
      if (topic) {
        topic.messageIds = topic.messageIds.filter((m) => m !== messageId);
      }
    },
  },
});

export const {
  insertTopic,
  updateTopic,
  removeTopic,
  addMessageToTopic,
  removeMessageFromTopic,
} = topicsSlice.actions;

export {topicsSlice};
