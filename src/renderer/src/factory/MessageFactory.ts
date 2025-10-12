import {
  MessageRoleEnumType,
  MessageRoleEnum,
} from '@renderer/enums/MessageRoleEnum';
import {
  ChatSessionEnum,
  ChatSessionEnumType,
} from '@renderer/enums/ChatSessionEnum';
import { AysncStatusEnum } from '@renderer/enums/AysncStatusEnum';
import { ChatMessage } from '@renderer/types/domain/ChatMessage';
import IdUtil from '@renderer/utils/IdUtil';

class MessageFactory {
  // 私有基础创建方法
  private static createMessage(
    role: MessageRoleEnumType,
    content: string,
    session: ChatSessionEnumType,
  ): ChatMessage {
    return {
      id: IdUtil.generateId(),
      role,
      session,
      content,
      status: AysncStatusEnum.IDLE,
      creationTime: Date.now(),
    };
  }

  public static createSystemMessage(content: string): ChatMessage {
    return this.createMessage(
      MessageRoleEnum.SYSTEM,
      content,
      ChatSessionEnum.SYSTEM_PROMPT,
    );
  }

  public static createUserMessage(content: string): ChatMessage {
    return this.createMessage(
      MessageRoleEnum.USER,
      content,
      ChatSessionEnum.USER_QUERY,
    );
  }

  public static createAssistantMessage(
    content: string,
    session: ChatSessionEnumType,
  ): ChatMessage {
    return this.createMessage(MessageRoleEnum.ASSISTANT, content, session);
  }
}

export { MessageFactory };
