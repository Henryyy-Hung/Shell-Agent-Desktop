import { ChatContentTypeEnumType } from '@renderer/enums/ChatContentTypeEnum';

interface ChatMessageBlockVO {
  id: string;
  type: ChatContentTypeEnumType;
  rawContent: string;
  innerContent: string;
}

export type { ChatMessageBlockVO };
