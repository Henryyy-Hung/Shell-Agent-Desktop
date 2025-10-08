import { RemoteClientEnumType } from '@renderer/enums/RemoteClientEnum';

interface ChatConfig {
  currentTopicId: string | null;
  currentRemoteShell: RemoteClientEnumType;
  webSearchEnabled: boolean;
}

export type { ChatConfig };
