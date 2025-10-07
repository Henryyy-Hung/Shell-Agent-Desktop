import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge, ipcRenderer } from 'electron';
import { IpcChannel } from '@shared/ipcChannel';

const api = {
  test: (input: string): Promise<void> => {
    return ipcRenderer.invoke(IpcChannel.TEST, input);
  },
  // 切换置顶，不需要返回值
  toggleAlwaysOnTop: (): Promise<boolean|null> => {
    return ipcRenderer.invoke(IpcChannel.ToggleAlwaysOnTop);
  },
  minimizeWindow: (): Promise<void> => {
    return ipcRenderer.invoke(IpcChannel.MinimizeWindow);
  },
  // 关闭窗口/退出应用
  closeWindow: (): Promise<void> => {
    return ipcRenderer.invoke(IpcChannel.CloseWindow);
  },
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[Preload]Failed to expose APIs:', error as Error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}

export type WindowApiType = typeof api;
