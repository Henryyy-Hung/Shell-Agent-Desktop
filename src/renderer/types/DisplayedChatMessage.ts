import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum';
import { ChatSessionEnumType } from '@renderer/enums/ChatSessionEnum';
import { MessageBlock } from '@renderer/types/MessageBlock';

interface DisplayedChatMessage {
  id: string;
  role: MessageRoleEnumType;
  session: ChatSessionEnumType;
  messageBlocks: MessageBlock[];
  creationTime: number;
}

export type { DisplayedChatMessage };
