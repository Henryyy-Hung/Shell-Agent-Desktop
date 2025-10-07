import { ipcRenderer } from 'electron';
import { IpcChannel } from '@shared/ipcChannel';

const windowApi = {
  toggleAlwaysOnTop: (): Promise<boolean | null> =>
    ipcRenderer.invoke(IpcChannel.Window_ToggleAlwaysOnTop),

  minimizeWindow: (): Promise<void> =>
    ipcRenderer.invoke(IpcChannel.Window_Minimize),

  closeWindow: (): Promise<void> => ipcRenderer.invoke(IpcChannel.Window_Close),
};

// eslint-disable-next-line import/prefer-default-export
export { windowApi };
