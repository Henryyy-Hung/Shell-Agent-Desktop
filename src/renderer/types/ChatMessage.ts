import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum';
import { ChatSessionEnumType } from '@renderer/enums/ChatSessionEnum';
import { AysncStatusEnumType } from '@renderer/enums/AysncStatusEnum';

interface ChatMessage {
  id: string;
  role: MessageRoleEnumType;
  session: ChatSessionEnumType; // 这个消息隶属于哪个子会话
  content: string;
  status: AysncStatusEnumType;
  creationTime: number;
}

export type { ChatMessage };
