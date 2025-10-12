import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum'
import { MessageOwnerEnumType } from '@renderer/enums/MessageOwnerEnum'
import { ChatMessageBlockVO } from '@renderer/types/view/ChatMessageBlockVO'

interface ChatMessageVO {
  id: string
  role: MessageRoleEnumType
  owner: MessageOwnerEnumType
  messageBlocks: ChatMessageBlockVO[]
  creationTime: number
}

export type { ChatMessageVO }
