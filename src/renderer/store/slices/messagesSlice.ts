// messagesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '@renderer/types/Message';
import { AysncStatusEnumType } from '@renderer/enums/AysncStatusEnum';

interface MessagesState {
  [id: string]: Message;
}

const initialState: MessagesState = {};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    insertMessage: (state, action: PayloadAction<Message>) => {
      const message = action.payload;
      state[message.id] = message;
    },
    updateMessage: (state, action: PayloadAction<Message>) => {
      const message = action.payload;
      if (state[message.id]) {
        state[message.id] = message;
      }
    },
    deleteMessage: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      delete state[id];
    },
    updateMessageContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id, content } = action.payload;
      if (state[id]) {
        state[id].content = content;
      }
    },
    updateMessageStatus: (
      state,
      action: PayloadAction<{ id: string; status: AysncStatusEnumType }>,
    ) => {
      const { id, status } = action.payload;
      if (state[id]) {
        state[id].status = status;
      }
    },
    deleteMessages: (state, action: PayloadAction<string[]>) => {
      const ids = action.payload;
      ids.forEach((id) => {
        delete state[id];
      });
    },
  },
});

export const {
  insertMessage,
  updateMessage,
  deleteMessage,
  updateMessageContent,
  updateMessageStatus,
  deleteMessages,
} = messagesSlice.actions;

export default messagesSlice.reducer;
