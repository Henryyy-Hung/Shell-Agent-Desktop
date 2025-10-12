export const getToolUseExampleExample = (
  toolUseExamplePrompt: string = '',
  avilableTools: string = ''
): string => {
  return TOOL_USE_INSTRUCTION
    .replace('{{ TOOL_USE_EXAMPLES }}', toolUseExamplePrompt)
    .replace('{{ AVAILABLE_TOOLS }}', avilableTools)
}

export const TOOL_USE_INSTRUCTION = `
在此环境中，您可以使用一组工具来回答用户的问题。
您可以在每条消息中使用一个工具，并将在用户的响应中收到该工具使用的结果。您可以逐步使用工具来完成给定任务，每次使用工具的操作都基于前一个工具使用的结果。

## 工具使用格式

工具使用采用XML风格的标签格式。工具名称用起始标签和结束标签括起来，每个参数也用自己的一组标签括起来。结构如下：

<tool_use>
  <name>{tool_name}</name>
  <arguments>{json_arguments}</arguments>
</tool_use>

工具名称应为您使用的工具的确切名称，参数应为包含该工具所需参数的JSON对象。例如：
<tool_use>
  <name>python_interpreter</name>
  <arguments>{"code": "5 + 3 + 1294.678"}</arguments>
</tool_use>

工具使用的结果将以以下格式进行响应：

<tool_use_result>
  <name>{tool_name}</name>
  <result>{result}</result>
</tool_use_result>

工具调用结果应为字符串或JSON对象。例如：
<tool_use>
  <name>python_interpreter</name>
  <result>{"result": "1302.678"}</result>
</tool_use>

始终遵循工具使用的格式，以确保正确解析和执行。

## 工具使用示例
{{ TOOL_USE_EXAMPLES }}

## 可用工具
上述示例使用了虚拟工具，这些工具可能并不存在。您只能使用以下这些工具：
{{ AVAILABLE_TOOLS }}

## 工具使用规则
以下是您应始终遵循的规则来完成任务：
1. 始终为工具使用正确的参数。不要使用变量名作为操作参数，而是直接使用值。
2. 仅在需要时调用工具：如果不需要信息，请勿调用搜索代理，尝试自己解决任务。
3. 如果不需要调用工具，则直接回答问题。
4. 切勿重复调用之前已使用完全相同参数的工具。
5. 对于工具使用，请确保使用上述示例中显示的XML标签格式。不要使用任何其他格式。
`
