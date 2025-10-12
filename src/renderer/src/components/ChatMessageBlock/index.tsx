import React from 'react'
import { ChatContentTypeEnum } from '@renderer/enums/ChatContentTypeEnum'
import {
  Avatar,
  Desc,
  MarkdownBlock,
  MessageContainer,
  SessionCreationTime,
  SessionInfo,
  SessionMessages,
  SessionName
} from '@renderer/components/ChatMessageBlock/styles'
import { ChatMessageVO } from '@renderer/types/view/ChatMessageVO'
import { DetailSummary } from '@renderer/components/DetailSummary'
import { DateTimeUtil } from '@renderer/utils/TimeUtil'
import { ChatSessionEnum, ChatSessionEnumType } from '@renderer/enums/ChatSessionEnum'

const sessionNameMap: Record<ChatSessionEnumType, string> = {
  [ChatSessionEnum.SYSTEM_PROMPT]: '系统提示词',
  [ChatSessionEnum.USER_QUERY]: '用户',
  [ChatSessionEnum.AGENT_COMMON]: '通用助手',
  [ChatSessionEnum.AGENT_PROJECT_MANAGER]: '项目经理',
  [ChatSessionEnum.AGENT_FRONTLINE_ENGINEER]: '一线工程师',
  [ChatSessionEnum.AGENT_SENIOR_ENGINEER]: '高级工程师',
  [ChatSessionEnum.AGENT_ARCHIVE_ADMIN]: '档案管理员'
}

type MessageBlockProps = {
  message: ChatMessageVO
}

const ChatMessageBlock: React.FC<MessageBlockProps> = ({ message }) => {
  return (
    <MessageContainer>
      <SessionInfo>
        <Avatar />
        <Desc>
          <SessionName>{sessionNameMap[message.session]}</SessionName>
          <SessionCreationTime>
            {DateTimeUtil.formatToBeijing(message.creationTime)}
          </SessionCreationTime>
        </Desc>
      </SessionInfo>
      <SessionMessages>
        {message.messageBlocks.map((block) => {
          switch (block.type) {
            case ChatContentTypeEnum.THINK:
              return (
                <DetailSummary
                  key={block.id}
                  name="hw-mcp-shell-toolkit : get_sop_list"
                  status="已完成"
                  detailText={block.innerContent}
                />
              )
            case ChatContentTypeEnum.PLAN:
              return (
                <DetailSummary
                  key={block.id}
                  name="制订计划"
                  status="已完成"
                  detailText={block.innerContent}
                />
              )
            case ChatContentTypeEnum.TOOL_USE:
              return (
                <DetailSummary
                  key={block.id}
                  name="工具调用"
                  status="已完成"
                  detailText={block.innerContent}
                />
              )
            case ChatContentTypeEnum.TOOL_USE_RESULT:
              return (
                <DetailSummary
                  key={block.id}
                  name="工具调用结果"
                  status="已完成"
                  detailText={block.innerContent}
                />
              )
            case ChatContentTypeEnum.FINAL_ANSWER:
              return <MarkdownBlock key={block.id}>{block.innerContent}</MarkdownBlock>
            default:
              return <MarkdownBlock key={block.id}>{block.rawContent}</MarkdownBlock>
          }
        })}
      </SessionMessages>
    </MessageContainer>
  )
}

export default ChatMessageBlock
