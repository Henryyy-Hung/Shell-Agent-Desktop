import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatInputField from '@renderer/components/ChatInputField';
import { selectCurrentTopic } from '@renderer/store/selectors/topicsSelectors';
import { Topic } from '@renderer/types/Topic';
import { insertTopic } from '@renderer/store/slices/topicsSlice';
import { TopicFactory } from '@renderer/factory/TopicFactory';
import { MessageFactory } from '@renderer/factory/MessageFactory';
import { addMessageAndSyncToTopic } from '@renderer/store/thunks/messagesThunks';
import { AppDispatch } from '@renderer/store';
import { setCurrentTopicId } from '@renderer/store/slices/chatConfigSlice';
import { ChatContent, Container, ChatOperation } from './styles';

interface Props {}

// eslint-disable-next-line no-empty-pattern
export default function Page({}: Props) {
  const currentTopic: Topic | null = useSelector(selectCurrentTopic);

  const messageSubmitEnabled = useMemo(() => {
    return !(currentTopic && currentTopic.isProcessing);
  }, [currentTopic]);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const topic = TopicFactory.create('new topic');
    dispatch(insertTopic(topic));
    dispatch(setCurrentTopicId(topic.id));
    const systemMessage = MessageFactory.createSystemMessage(
      'You are a helpful assistant.',
    );
    dispatch(addMessageAndSyncToTopic(topic.id, systemMessage));
  }, [dispatch]);

  return (
    <Container>
      <ChatContent />
      <ChatOperation
        as={ChatInputField}
        messageSubmitEnabled={messageSubmitEnabled}
        onSubmit={() => {}}
      />
    </Container>
  );
}
