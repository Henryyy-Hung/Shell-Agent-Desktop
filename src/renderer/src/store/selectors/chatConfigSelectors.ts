// src/store/selectors/chatConfigSelectors.ts
import { RootState } from '../index' // 这里假设你的 store 类型在 store.ts 里导出了 RootState

export const selectChatConfig = (state: RootState) => state.chatConfig

export const selectCurrentTopicId = (state: RootState) => state.chatConfig.currentTopicId

export const selectCurrentRemoteShell = (state: RootState) => state.chatConfig.currentRemoteShell

export const selectWebSearchEnabled = (state: RootState) => state.chatConfig.webSearchEnabled
