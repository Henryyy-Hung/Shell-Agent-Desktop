import { MessageRoleEnum, MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum'
import { MessageOwnerEnum, MessageOwnerEnumType } from '@renderer/enums/MessageOwnerEnum'
import { AysncStatusEnum } from '@renderer/enums/AysncStatusEnum'
import { ChatMessage } from '@renderer/types/domain/ChatMessage'
import IdUtil from '@renderer/utils/IdUtil'

class MessageFactory {
  private static createMessage(
    role: MessageRoleEnumType,
    content: string,
    session: MessageOwnerEnumType
  ): ChatMessage {
    return {
      id: IdUtil.generateId(),
      role,
      owner: session,
      content,
      status: AysncStatusEnum.IDLE,
      creationTime: Date.now()
    }
  }

  public static createSystemMessage(content: string): ChatMessage {
    return this.createMessage(MessageRoleEnum.SYSTEM, content, MessageOwnerEnum.PUBLIC)
  }

  public static createUserMessage(content: string): ChatMessage {
    return this.createMessage(MessageRoleEnum.USER, content, MessageOwnerEnum.USER)
  }

  public static createAssistantMessage(content: string, owner: MessageOwnerEnumType): ChatMessage {
    return this.createMessage(MessageRoleEnum.ASSISTANT, content, owner)
  }

  public static createToolUseResultMessage(
    content: string,
    owner: MessageOwnerEnumType
  ): ChatMessage {
    return this.createMessage(MessageRoleEnum.USER, content, owner)
  }
}

export { MessageFactory }
