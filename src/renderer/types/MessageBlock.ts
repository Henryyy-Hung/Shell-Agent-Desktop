import { ChatContentTypeEnumType } from '@renderer/enums/ChatContentTypeEnum';

interface MessageBlock {
  id: string;
  type: ChatContentTypeEnumType;
  rawContent: string;
  innerContent: string;
}

export type { MessageBlock };
