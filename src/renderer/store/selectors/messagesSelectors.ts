// messagesSelectors.ts
import { RootState } from '@renderer/store'; // 假设你有 RootState 类型
import { ChatMessage } from '@renderer/types/ChatMessage';

export const selectMessageById = (
  state: RootState,
  id: string,
): ChatMessage | undefined => {
  return state.messages[id];
};

export const selectMessagesByIds = (
  state: RootState,
  ids: string[],
): ChatMessage[] => {
  return ids
    .map((id) => state.messages[id])
    .filter((message): message is ChatMessage => message !== undefined)
    .sort((a, b) => a.creationTime - b.creationTime);
};
