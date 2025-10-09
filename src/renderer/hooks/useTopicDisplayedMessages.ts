import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@renderer/store';
import { selectTopicById } from '@renderer/store/selectors/topicsSelectors';
import { selectMessagesByIds } from '@renderer/store/selectors/messagesSelectors';
import CustomTagParseUtil from '@renderer/utils/CustomTagParseUtil';
import { DisplayedChatMessage } from '@renderer/types/DisplayedChatMessage';
import { ChatMessage } from '@renderer/types/ChatMessage';

function useTopicDisplayedMessages({
  topicId,
}: {
  topicId: string | null;
}): DisplayedChatMessage[] {
  const selectedTopic = useSelector((state: RootState) =>
    selectTopicById(state, topicId || ''),
  );
  const EMPTY_MESSAGES: ChatMessage[] = [];
  const messages = useSelector(
    (state: RootState) =>
      selectedTopic
        ? selectMessagesByIds(state, selectedTopic.messageIds)
        : EMPTY_MESSAGES, // 保持引用稳定
  );

  const displayedMessages = useMemo<DisplayedChatMessage[]>(() => {
    if (!messages.length) return [];
    const result: DisplayedChatMessage[] = [];
    let currentGroup: DisplayedChatMessage | null = null;
    messages.forEach((msg) => {
      const blocks = CustomTagParseUtil.parseCustomTags(
        msg.id,
        msg.content || '',
      );
      if (
        currentGroup &&
        currentGroup.session === msg.session &&
        currentGroup.role === msg.role
      ) {
        // 同一个 session 且同一 role，合并到当前 group
        currentGroup.messageBlocks.push(...blocks);
      } else {
        // 新建一个 group
        currentGroup = {
          id: msg.id,
          role: msg.role,
          session: msg.session,
          messageBlocks: [...blocks],
          creationTime: msg.creationTime,
        };
        result.push(currentGroup);
      }
    });
    console.log(result);
    return result;
  }, [messages]);

  return displayedMessages;
}

export { useTopicDisplayedMessages };
