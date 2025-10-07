/* eslint global-require: off, no-console: off, promise/always-return: off */

import path from 'path';
import { app, BrowserWindow, shell } from 'electron';
import { resourceDirPath } from '@main/config/path';
import { resolveHtmlPath } from '../util';

class WindowMgr {
  private mainWindow: BrowserWindow | null = null;

  private readonly isDebug: boolean;

  constructor() {
    this.isDebug =
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true';
  }

  public async createMainWindow(): Promise<void> {
    if (this.isDebug) {
      await this.installExtensions();
    }

    const getAssetPath = (...paths: string[]): string => {
      return path.join(resourceDirPath, ...paths);
    };

    this.mainWindow = new BrowserWindow({
      show: false,
      width: 520,
      height: 800,
      frame: false,
      autoHideMenuBar: true,
      skipTaskbar: false,
      resizable: false,
      maximizable: false,
      transparent: true,
      backgroundColor: '#00000000',
      icon: getAssetPath('icon.png'),
      webPreferences: {
        preload: app.isPackaged
          ? path.join(__dirname, 'preload.js')
          : path.join(__dirname, '../../.erb/dll/preload.js'),
      },
    });

    await this.mainWindow.loadURL(resolveHtmlPath('index.html'));

    this.registerEvents();
  }

  private registerEvents() {
    if (!this.mainWindow) return;

    this.mainWindow.on('ready-to-show', () => {
      if (!this.mainWindow) return;
      if (process.env.START_MINIMIZED) {
        this.mainWindow.minimize();
      } else {
        this.mainWindow.show();
      }
    });

    this.mainWindow.on('blur', () => {
      if (!this.mainWindow) return;
      this.mainWindow.setBackgroundColor('#00000000');
    });

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });

    this.mainWindow.webContents.setWindowOpenHandler((edata) => {
      shell.openExternal(edata.url);
      return { action: 'deny' };
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private async installExtensions() {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS'];

    return installer
      .default(
        extensions.map((name) => installer[name]),
        forceDownload,
      )
      .catch(console.log);
  }

  public getMainWindow(): BrowserWindow | null {
    return this.mainWindow;
  }
}

const windowMgr = new WindowMgr();

// eslint-disable-next-line import/prefer-default-export
export { windowMgr };
