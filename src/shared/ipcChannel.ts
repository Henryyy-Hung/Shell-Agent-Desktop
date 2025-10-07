const IpcChannel = {
  TEST: 'test',
  ToggleAlwaysOnTop: 'ToggleAlwaysOnTop',
  CloseWindow: 'CloseWindow',
  MinimizeWindow: 'MinimizeWindow',
} as const;

export type IpcChannelType = (typeof IpcChannel)[keyof typeof IpcChannel];

export { IpcChannel };
