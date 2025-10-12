import React, { useState } from 'react';
import IconPaperAirplane from '@renderer/assets/vectors/IconPaperAirplane';
import AutoHeightTextArea from '@renderer/components/AutoHeightTextArea';
import IconAtSign from '@renderer/assets/vectors/IconAtSign';
import IconEarth from '@renderer/assets/vectors/IconEarth';
import {
  ChatInputFieldContainer,
  StyledTextArea,
  SendButton,
  OperationArea,
  OperationButton,
} from './styles';

interface ChatInputFieldProps {
  messageSubmitEnabled: boolean;
  onSubmit: (content: string) => void;
}

const ChatInputField: React.FC<ChatInputFieldProps> = ({
  messageSubmitEnabled,
  onSubmit,
}) => {
  const [textContent, setTextContent] = useState<string>('');

  const onSendMessageTriggered = (): void => {
    // get the text content
    const content = textContent;
    // check if the content is empty
    if (content.trim() === '') {
      return;
    }
    // check if the messages is an array
    if (!messageSubmitEnabled) {
      return;
    }
    // clear the textarea
    setTextContent('');
    // submit the message
    onSubmit(content);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      onSendMessageTriggered();
    }
  };

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setTextContent(e.target.value);
  };

  return (
    <ChatInputFieldContainer as="form">
      <StyledTextArea
        as={AutoHeightTextArea}
        placeholder="在这里输入消息，按 Ctrl + Enter 发送 - @ 选择SOP模板"
        value={textContent || ''}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <OperationArea>
        <OperationButton type="button">
          <IconEarth />
        </OperationButton>
        <OperationButton type="button">
          <IconAtSign />
        </OperationButton>
        <SendButton
          disabled={!messageSubmitEnabled}
          onClick={onSendMessageTriggered}
          type="button"
        >
          <IconPaperAirplane />
        </SendButton>
      </OperationArea>
    </ChatInputFieldContainer>
  );
};

export default ChatInputField;
