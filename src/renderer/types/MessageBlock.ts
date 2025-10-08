import { MessageBlockTypeEnumType } from '@renderer/enums/MessageBlockType';

interface MessageBlock {
  type: MessageBlockTypeEnumType | undefined;
  rawContent: string;
  innerContent: string;
}

export type { MessageBlock };
