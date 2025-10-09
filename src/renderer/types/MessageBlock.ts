import { ChatContentTypeEnumType } from '@renderer/enums/ChatContentTypeEnum';

interface MessageBlock {
  type: ChatContentTypeEnumType;
  rawContent: string;
  innerContent: string;
}

export type { MessageBlock };
