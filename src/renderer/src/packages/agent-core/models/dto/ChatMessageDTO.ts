import { MessageRoleEnumType } from 'src/renderer/src/enums/MessageRoleEnum'

interface ChatMessageDTO {
  role: MessageRoleEnumType
  content: string
}

export type { ChatMessageDTO }
