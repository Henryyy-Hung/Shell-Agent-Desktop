import { Tool } from '@modelcontextprotocol/sdk/types.js'
import { getToolUseSchema } from '@renderer/packages/agent-core/resources/promptTemplates/toolUseSchema'

export const getAvailableTools = (tools: Tool[]): string => {
  const availableTools = tools
    .map((tool) => {
      return getToolUseSchema({
        id: tool.id as string,
        description: tool.description as string,
        inputSchema: tool.inputSchema ? JSON.stringify(tool.inputSchema) : ''
      })
    })
    .join('\n')
  return AVAILABLE_TOOLS.replace('{{ AVAILABLE_TOOL_LIST }}', availableTools)
}

const AVAILABLE_TOOLS = `
<tools>
  {{ AVAILABLE_TOOL_LIST }}
</tools>
`
