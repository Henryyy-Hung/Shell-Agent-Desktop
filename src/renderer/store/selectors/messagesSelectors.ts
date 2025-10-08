// messagesSelectors.ts
import { RootState } from '@renderer/store'; // 假设你有 RootState 类型
import { Message } from '@renderer/types/Message';

export const selectMessageById = (
  state: RootState,
  id: string,
): Message | undefined => {
  return state.messages[id];
};

export const selectMessagesByIds = (
  state: RootState,
  ids: string[],
): Message[] => {
  return ids
    .map((id) => state.messages[id])
    .filter((message): message is Message => message !== undefined)
    .sort((a, b) => a.creationTime - b.creationTime);
};
