import { BrowserWindow, App } from 'electron'
import { registerMcpIpc } from './mcpRegistry'
import { registerWindowIpc } from './windowRegistry'

function registerIpc(app: App, mainWindow: BrowserWindow | null) {
  registerMcpIpc()
  registerWindowIpc(app, mainWindow)
}

// eslint-disable-next-line import/prefer-default-export
export { registerIpc }
