import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum'
import { MessageOwnerEnumType } from '@renderer/enums/MessageOwnerEnum'
import { AysncStatusEnumType } from '@renderer/enums/AysncStatusEnum'

interface ChatMessage {
  id: string
  role: MessageRoleEnumType
  owner: MessageOwnerEnumType // 这个消息隶属于哪个子会话
  content: string
  status: AysncStatusEnumType
  creationTime: number
}

export type { ChatMessage }
