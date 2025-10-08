import React from 'react';
import styled from 'styled-components';
import { MessageBlockTypeEnum } from '@renderer/enums/MessageBlockType';
import { MessageBlock } from '@renderer/types/MessageBlock';

type MessageBlockProps = {
  content: string;
};

// 样式区
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MarkdownBlock = styled.div`
  width: 100%;
  line-height: 1.5rem;

  *:first-child {
    margin-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem var(--primary-color-300);
  }
`;

const ToolCallBlock = styled.div`
  border: 1px solid var(--primary-color-500);
  background-color: var(--primary-color-50);
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: monospace;
  white-space: pre-wrap;
`;

const PlanBlock = styled.div`
  border: 1px solid green;
  background-color: #eaffea;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

function createRegex(tags: string[]) {
  // 先处理成正则的模式
  const tagPattern = tags
    .map((tag) => tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  // 使用命名捕获组和反向引用
  const pattern = `<(?<tag>${tagPattern})>(?<inner>[\\s\\S]*?)<\\/\\k<tag>>`;
  return new RegExp(pattern, 'i');
}

const parseCustomTags = (input: string): MessageBlock[] => {
  const blocks: MessageBlock[] = [];

  let remaining = input;

  const regex = createRegex([
    MessageBlockTypeEnum.PLAN,
    MessageBlockTypeEnum.THINK,
    MessageBlockTypeEnum.TOOL_CALL,
  ]);

  let match: RegExpExecArray | null;
  match = regex.exec(remaining);

  while (match !== null) {
    const before = remaining.slice(0, match.index);
    if (before.trim()) {
      blocks.push({
        type: undefined,
        rawContent: before,
        innerContent: before,
      });
    }

    const tagName = match.groups?.tag?.toLowerCase();
    const innerContent = match.groups?.inner ?? '';

    switch (tagName) {
      case MessageBlockTypeEnum.PLAN:
        blocks.push({
          type: MessageBlockTypeEnum.PLAN,
          rawContent: match[0],
          innerContent: innerContent.trim(),
        });
        break;
      case MessageBlockTypeEnum.THINK:
        blocks.push({
          type: MessageBlockTypeEnum.THINK,
          rawContent: match[0],
          innerContent: innerContent.trim(),
        });
        break;
      case MessageBlockTypeEnum.TOOL_CALL:
        blocks.push({
          type: MessageBlockTypeEnum.TOOL_CALL,
          rawContent: match[0],
          innerContent: innerContent.trim(),
        });
        break;
      default:
        // 如果 tagName 不符合枚举，直接作为未知类型处理
        blocks.push({
          type: undefined,
          rawContent: match[0],
          innerContent: innerContent.trim(),
        });
        break;
    }
    remaining = remaining.slice(match.index + match[0].length);
    match = regex.exec(remaining);
  }

  if (remaining.trim()) {
    blocks.push({
      type: undefined,
      rawContent: remaining,
      innerContent: remaining,
    });
  }

  return blocks;
};

const ChatMessageBlock: React.FC<MessageBlockProps> = ({ content }) => {
  const blocks = parseCustomTags(content);

  return (
    <MessageContainer>
      {blocks.map((block) => {
        switch (block.type) {
          case MessageBlockTypeEnum.TOOL_CALL:
            return <ToolCallBlock>{block.rawContent}</ToolCallBlock>;
          case MessageBlockTypeEnum.PLAN:
            return <PlanBlock>{block.rawContent}</PlanBlock>;
          default:
            return <MarkdownBlock>{block.rawContent}</MarkdownBlock>;
        }
      })}
    </MessageContainer>
  );
};

export default ChatMessageBlock;
