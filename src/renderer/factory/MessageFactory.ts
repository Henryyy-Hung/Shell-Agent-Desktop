import {
  MessageRoleEnumType,
  MessageRoleEnum,
} from '@renderer/enums/MessageRoleEnum';
import { MessageSubRoleEnumType } from '@renderer/enums/MessageSubRoleEnum';
import { AysncStatusEnum } from '@renderer/enums/AysncStatusEnum';
import { Message } from '@renderer/types/Message';
import IdUtil from '@renderer/utils/IdUtil';

class MessageFactory {
  // 私有基础创建方法
  private static createMessage(
    role: MessageRoleEnumType,
    content: string,
    subRole?: MessageSubRoleEnumType,
  ): Message {
    return {
      id: IdUtil.generateId(),
      role,
      subRole,
      content,
      status: AysncStatusEnum.IDLE,
      creationTime: Date.now(),
    };
  }

  // 创建用户消息
  public static createUserMessage(content: string): Message {
    return this.createMessage(MessageRoleEnum.User, content);
  }

  // 创建助手消息（可选 subRole）
  public static createAssistantMessage(
    content: string,
    subRole?: MessageSubRoleEnumType,
  ): Message {
    return this.createMessage(MessageRoleEnum.Assistant, content, subRole);
  }

  // 创建系统消息
  public static createSystemMessage(content: string): Message {
    return this.createMessage(MessageRoleEnum.System, content);
  }
}

export { MessageFactory };
