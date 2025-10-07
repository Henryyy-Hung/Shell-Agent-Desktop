import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge } from 'electron';
import { windowApi } from './api/windowApi';
import mcpApi from './api/mcpApi';

// 自定义 API 的集合
const api = {
  window: windowApi,
  mcp: mcpApi,
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
