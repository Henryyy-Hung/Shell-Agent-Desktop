import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatInputField from '@renderer/components/ChatInputField'
import { insertTopic } from '@renderer/store/slices/topicsSlice'
import { TopicFactory } from '@renderer/factory/TopicFactory'
import { MessageFactory } from '@renderer/factory/MessageFactory'
import { addMessageAndSyncToTopic } from '@renderer/store/thunks/messagesThunks'
import { AppDispatch } from '@renderer/store'
import { setCurrentTopicId } from '@renderer/store/slices/chatConfigSlice'
import ChatMessageBlock from '@renderer/components/ChatMessageBlock'
import { ChatSessionEnum } from '@renderer/enums/ChatSessionEnum'
import { selectCurrentTopicId } from '@renderer/store/selectors/chatConfigSelectors'
import { useTopicDisplayedMessages } from '@renderer/hooks/useTopicDisplayedMessages'
import { selectCurrentTopic } from '@renderer/store/selectors/topicsSelectors'
import { ChatContent, Container, ChatOperation } from './styles'

export default function Page() {
  const currentTopicId = useSelector(selectCurrentTopicId)

  const currentTopic = useSelector(selectCurrentTopic)

  const messageSubmitEnabled = useMemo(() => {
    return !(currentTopic && !currentTopic.isProcessing)
  }, [currentTopic])

  const displayedMessages = useTopicDisplayedMessages({
    topicId: currentTopicId
  })

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const topic = TopicFactory.create('new topic')
    dispatch(insertTopic(topic))
    dispatch(setCurrentTopicId(topic.id))

    const userMessage = MessageFactory.createUserMessage('What is your name?')
    dispatch(addMessageAndSyncToTopic(topic.id, userMessage))

    const assistantMessage = MessageFactory.createAssistantMessage(
      '<think>Before I decide, I need to provide a plan.</think>' +
        '<plan>nice to meet you</plan><tool_use> hello world </tool_use>',
      ChatSessionEnum.AGENT_COMMON
    )
    dispatch(addMessageAndSyncToTopic(topic.id, assistantMessage))

    const assistantMessage1 = MessageFactory.createAssistantMessage(
      '<tool_use_result> received </tool_use_result>',
      ChatSessionEnum.AGENT_COMMON
    )
    dispatch(addMessageAndSyncToTopic(topic.id, assistantMessage1))

    const assistantMessage2 = MessageFactory.createAssistantMessage(
      '<final_answer> final answer </final_answer>',
      ChatSessionEnum.AGENT_COMMON
    )
    dispatch(addMessageAndSyncToTopic(topic.id, assistantMessage2))
  }, [dispatch])

  return (
    <Container>
      <ChatContent>
        {displayedMessages.map((message) => (
          <ChatMessageBlock key={message.id} message={message} />
        ))}
      </ChatContent>
      <ChatOperation
        as={ChatInputField}
        messageSubmitEnabled={messageSubmitEnabled}
        onSubmit={() => {}}
      />
    </Container>
  )
}
