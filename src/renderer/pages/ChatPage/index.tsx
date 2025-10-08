import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatInputField from '@renderer/components/ChatInputField';
import { selectCurrentTopic } from '@renderer/store/selectors/topicsSelectors';
import { Topic } from '@renderer/types/Topic';
import { insertTopic } from '@renderer/store/slices/topicsSlice';
import { TopicFactory } from '@renderer/factory/TopicFactory';
import { MessageFactory } from '@renderer/factory/MessageFactory';
import { addMessageAndSyncToTopic } from '@renderer/store/thunks/messagesThunks';
import { AppDispatch, RootState } from '@renderer/store';
import { setCurrentTopicId } from '@renderer/store/slices/chatConfigSlice';
import { selectMessagesByIds } from '@renderer/store/selectors/messagesSelectors';
import ChatMessageBlock from '@renderer/components/ChatMessageBlock';
import { ChatContent, Container, ChatOperation } from './styles';

interface Props {}

export default function Page({}: Props) {
  const currentTopic: Topic | null = useSelector(selectCurrentTopic);

  const dispatch = useDispatch<AppDispatch>();

  const messageSubmitEnabled = useMemo(() => {
    return !(currentTopic && currentTopic.isProcessing);
  }, [currentTopic]);

  // 获取当前话题的所有消息
  const messages = useSelector((state: RootState) =>
    currentTopic ? selectMessagesByIds(state, currentTopic.messageIds) : [],
  );

  useEffect(() => {
    const topic = TopicFactory.create('new topic');
    dispatch(insertTopic(topic));
    dispatch(setCurrentTopicId(topic.id));

    const userMessage = MessageFactory.createUserMessage('What is your name?');
    dispatch(addMessageAndSyncToTopic(topic.id, userMessage));

    const assistantMessage = MessageFactory.createAssistantMessage(
      'You are a helpful assistant.<tool_call> hello world </tool_call> <plan>nice to meet you</plan>',
      undefined,
    );
    dispatch(addMessageAndSyncToTopic(topic.id, assistantMessage));
  }, [dispatch]);

  return (
    <Container>
      <ChatContent>
        {messages.map((message) => (
          <ChatMessageBlock key={message.id} message={message} />
        ))}
      </ChatContent>
      <ChatOperation
        as={ChatInputField}
        messageSubmitEnabled={messageSubmitEnabled}
        onSubmit={() => {}}
      />
    </Container>
  );
}
