import path from 'path'
import { resourceDirPath } from '@main/config/path'
import { McpServiceBase } from '@main/services/McpServiceBase'
import { McpServerNameEnum } from '@shared/enums/McpServerNameEnum'

export class RemoteShellService extends McpServiceBase {
  constructor() {
    super(McpServerNameEnum.REMOTE_SHELL_TOOLKIT)
  }
  protected getExecutableConfig() {
    const exePath = path.join(resourceDirPath, 'mcpServers', 'remote_shell_toolkit.exe')
    return {
      command: exePath,
      args: [],
      env: {
        CURRENT_SHELL: 'MobaXterm',
        MOBAXTERM_LOG_DIR: 'D:\\ProgramData\\ShellAgent\\MobaXterm'
      }
    }
  }
}
