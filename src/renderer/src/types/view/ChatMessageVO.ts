import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum'
import { ChatSessionEnumType } from '@renderer/enums/ChatSessionEnum'
import { ChatMessageBlockVO } from '@renderer/types/view/ChatMessageBlockVO'

interface ChatMessageVO {
  id: string
  role: MessageRoleEnumType
  session: ChatSessionEnumType
  messageBlocks: ChatMessageBlockVO[]
  creationTime: number
}

export type { ChatMessageVO }
