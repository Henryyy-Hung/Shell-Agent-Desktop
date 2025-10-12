import { McpServiceBase } from '@main/services/McpServiceBase';

class McpServiceMgr {
  private services: Map<string, McpServiceBase> = new Map();

  public registerService(name: string, service: McpServiceBase) {
    this.services.set(name, service);
  }

  public getService(name: string): McpServiceBase | undefined {
    return this.services.get(name);
  }

  /** ====== ALL 级别 ====== */
  public async connectAll() {
    await Promise.all([...this.services.values()].map((s) => s.connect()));
  }

  public async disconnectAll() {
    await Promise.all([...this.services.values()].map((s) => s.disconnect()));
  }

  public async restartAll() {
    await Promise.all([...this.services.values()].map((s) => s.restart()));
  }

  /** ====== 单服务方法 ====== */
  public async connect(serverName: string) {
    return this.services.get(serverName)?.connect();
  }

  public async disconnect(serverName: string) {
    return this.services.get(serverName)?.disconnect();
  }

  public async restart(serverName: string) {
    return this.services.get(serverName)?.restart();
  }

  public async listPrompts(serverName: string) {
    return this.services.get(serverName)?.listPrompts();
  }

  public async getPrompt(
    serverName: string,
    name: string,
    args: Record<string, any> = {},
  ) {
    return this.services.get(serverName)?.getPrompt(name, args);
  }

  public async listResources(serverName: string) {
    return this.services.get(serverName)?.listResources();
  }

  public async readResource(serverName: string, uri: string) {
    return this.services.get(serverName)?.readResource(uri);
  }

  public async listTools(serverName: string) {
    return this.services.get(serverName)?.listTools();
  }

  public async callTool(
    serverName: string,
    name: string,
    args: Record<string, any>,
    callId?: string,
  ) {
    return this.services.get(serverName)?.callTool(name, args, callId);
  }

  public abortTool(serverName: string, callId: string) {
    return this.services.get(serverName)?.abortTool(callId);
  }
}

const mcpServiceManager = new McpServiceMgr();

// eslint-disable-next-line import/prefer-default-export
export { mcpServiceManager };
