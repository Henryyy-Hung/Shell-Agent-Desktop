import React from 'react';
import { ChatContentTypeEnum } from '@renderer/enums/ChatContentTypeEnum';
import {
  MarkdownBlock,
  MessageContainer,
  PlanBlock,
  ToolCallBlock,
} from '@renderer/components/ChatMessageBlock/styles';
import { DisplayedChatMessage } from '@renderer/types/DisplayedChatMessage';

type MessageBlockProps = {
  message: DisplayedChatMessage;
};
const ChatMessageBlock: React.FC<MessageBlockProps> = ({ message }) => {
  return (
    <MessageContainer>
      {message.messageBlocks.map((block) => {
        switch (block.type) {
          case ChatContentTypeEnum.THINK:
            return <PlanBlock>{block.rawContent}</PlanBlock>;
          case ChatContentTypeEnum.PLAN:
            return <PlanBlock>{block.rawContent}</PlanBlock>;
          case ChatContentTypeEnum.TOOL_USE:
            return <ToolCallBlock>{block.rawContent}</ToolCallBlock>;
          case ChatContentTypeEnum.TOOL_USE_RESULT:
            return <ToolCallBlock>{block.rawContent}</ToolCallBlock>;
          case ChatContentTypeEnum.FINAL_ANSWER:
            return <ToolCallBlock>{block.innerContent}</ToolCallBlock>;
          default:
            return <MarkdownBlock>{block.rawContent}</MarkdownBlock>;
        }
      })}
    </MessageContainer>
  );
};

export default ChatMessageBlock;
