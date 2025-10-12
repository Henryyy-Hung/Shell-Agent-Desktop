import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'
import {
  CallToolResult,
  CompatibilityCallToolResult,
  GetPromptResult,
  ListPromptsResult,
  ListResourcesResult,
  ListToolsResult,
  ReadResourceResult,
  Tool
} from '@modelcontextprotocol/sdk/types.js'
import { randomUUID } from 'node:crypto'

abstract class McpServiceBase {
  public mcpServerName: string

  protected client: Client

  protected transport?: StdioClientTransport

  protected connected: boolean

  protected activeToolCalls: Map<string, AbortController>

  protected constructor(protected serverName: string) {
    this.mcpServerName = serverName
    this.client = new Client({
      name: `${serverName}-client`,
      version: '1.0.0'
    })
    this.connected = false
    this.activeToolCalls = new Map()
  }

  /**
   * 子类需要实现：返回可执行文件路径与启动参数
   */
  protected abstract getExecutableConfig(): {
    command: string
    args: string[]
    env?: Record<string, string>
  }

  public async connect(): Promise<void> {
    if (this.connected) return

    const { command, args, env } = this.getExecutableConfig()
    this.transport = new StdioClientTransport({ command, args, env })
    await this.client.connect(this.transport)
    this.connected = true
  }

  public async disconnect(): Promise<void> {
    if (this.transport) {
      await this.client.close()
      this.connected = false
    }
  }

  public async restart(): Promise<void> {
    await this.disconnect()
    await this.connect()
  }

  public async listPrompts(): Promise<ListPromptsResult> {
    return this.client.listPrompts()
  }

  public async getPrompt(name: string, args: Record<string, any> = {}): Promise<GetPromptResult> {
    return this.client.getPrompt({ name, arguments: args })
  }

  public async listResources(): Promise<ListResourcesResult> {
    return this.client.listResources()
  }

  public async readResource(uri: string): Promise<ReadResourceResult> {
    return this.client.readResource({ uri })
  }

  public async listTools(): Promise<Array<Tool>> {
    const result: ListToolsResult = await this.client.listTools()
    const tools: Array<Tool> = result.tools || []
    console.log(`[${this.serverName}] Available tools:`, JSON.stringify(tools, null, 2))
    return tools
  }

  public async callTool(
    name: string,
    args?: Record<string, any>,
    callId?: string
  ): Promise<CallToolResult | CompatibilityCallToolResult> {
    const id = callId || randomUUID()
    const abortController = new AbortController()
    this.activeToolCalls.set(id, abortController)
    try {
      return await this.client.callTool({ name, arguments: args || {} }, undefined, {
        signal: abortController.signal
      })
    } finally {
      this.activeToolCalls.delete(id)
    }
  }

  public abortTool(callId: string): boolean {
    const controller = this.activeToolCalls.get(callId)
    if (controller) {
      controller.abort()
      this.activeToolCalls.delete(callId)
      return true
    }
    return false
  }
}

export { McpServiceBase }
