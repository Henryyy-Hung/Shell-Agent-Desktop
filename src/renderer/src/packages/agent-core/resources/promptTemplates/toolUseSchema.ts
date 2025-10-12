export const getToolUseSchema = (tool: {
  id: string
  description: string
  inputSchema: string
}): string => {
  return TOOL_USE_SCHEMA.replace('{{ id }}', tool.id)
    .replace('{{ description }}', tool.description)
    .replace('{{ inputSchema }}', tool.inputSchema)
}

const TOOL_USE_SCHEMA = `
<tool>
  <name>{{ id }}</name>
  <description>{{ description }}</description>
  <arguments>
    {{ inputSchema }}
  </arguments>
</tool>
`
