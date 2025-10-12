// messagesSelectors.ts
import { RootState } from '@renderer/store'; // 假设你有 RootState 类型
import { ChatMessage } from '@renderer/types/domain/ChatMessage';
import { createSelector } from '@reduxjs/toolkit';

export const selectMessageById = (
  state: RootState,
  id: string,
): ChatMessage | undefined => {
  return state.messages[id];
};

export const selectMessagesByIds = createSelector(
  [(state: RootState) => state.messages, (_, ids: string[]) => ids],
  (messages, ids) => {
    return ids
      .map((id) => messages[id])
      .filter((message): message is ChatMessage => message !== undefined)
      .sort((a, b) => a.creationTime - b.creationTime);
  },
);
