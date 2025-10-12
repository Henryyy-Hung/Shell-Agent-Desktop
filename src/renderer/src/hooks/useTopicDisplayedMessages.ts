import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@renderer/store';
import {selectTopicById} from '@renderer/store/selectors/topicsSelectors';
import {selectMessagesByIds} from '@renderer/store/selectors/messagesSelectors';
import CustomTagParseUtil from '@renderer/utils/CustomTagParseUtil';
import {ChatMessageVO} from '@renderer/types/view/ChatMessageVO';
import {ChatMessage} from '@renderer/types/domain/ChatMessage';

function useTopicDisplayedMessages({
  topicId,
}: {
  topicId: string | null;
}): ChatMessageVO[] {
  const selectedTopic = useSelector((state: RootState) =>
    selectTopicById(state, topicId || ''),
  );
  const EMPTY_MESSAGES: ChatMessage[] = [];

  const messages = useSelector(
    (state: RootState) =>
      selectedTopic
        ? selectMessagesByIds(state, selectedTopic.messageIds)
        : EMPTY_MESSAGES,
  );

  return useMemo<ChatMessageVO[]>(() => {
    const result: ChatMessageVO[] = [];
    if (!messages.length) return result;
    let currentGroup: ChatMessageVO | null = null;
    messages.forEach((msg) => {
      const blocks = CustomTagParseUtil.parseCustomTags(
        msg.id,
        msg.content || '',
      );
      if (currentGroup && currentGroup.session === msg.session) {
        currentGroup.messageBlocks.push(...blocks);
      } else {
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
    return result;
  }, [messages]);
}

export { useTopicDisplayedMessages };
