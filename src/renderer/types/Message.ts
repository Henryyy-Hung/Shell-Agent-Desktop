import { MessageRoleEnumType } from '@renderer/enums/MessageRoleEnum';
import { MessageSubRoleEnumType } from '@renderer/enums/MessageSubRoleEnum';
import { AysncStatusEnumType } from '@renderer/enums/AysncStatusEnum';

interface Message {
  id: string;
  role: MessageRoleEnumType;
  subRole?: MessageSubRoleEnumType;
  content: string;
  status: AysncStatusEnumType;
  creationTime: number;
}

export type { Message };
