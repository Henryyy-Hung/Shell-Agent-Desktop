import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatMessage } from '@renderer/types/domain/ChatMessage'
import { AysncStatusEnumType } from '@renderer/enums/AysncStatusEnum'

export interface MessagesState {
  [id: string]: ChatMessage
}

const initialState: MessagesState = {}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    insertMessage: (state, action: PayloadAction<ChatMessage>) => {
      const message = action.payload
      state[message.id] = message
    },
    updateMessage: (state, action: PayloadAction<ChatMessage>) => {
      const message = action.payload
      if (state[message.id]) {
        state[message.id] = message
      }
    },
    deleteMessage: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      delete state[id]
    },
    updateMessageContent: (state, action: PayloadAction<{ id: string; content: string }>) => {
      const { id, content } = action.payload
      if (state[id]) {
        state[id].content = content
      }
    },
    updateMessageStatus: (
      state,
      action: PayloadAction<{ id: string; status: AysncStatusEnumType }>
    ) => {
      const { id, status } = action.payload
      if (state[id]) {
        state[id].status = status
      }
    },
    deleteMessages: (state, action: PayloadAction<string[]>) => {
      const ids = action.payload
      ids.forEach((id) => {
        delete state[id]
      })
    }
  }
})

export const {
  insertMessage,
  updateMessage,
  deleteMessage,
  updateMessageContent,
  updateMessageStatus,
  deleteMessages
} = messagesSlice.actions

export { messagesSlice }
