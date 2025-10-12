export const getToolUseExamplePrompt = (): string => {
  return TOOL_USE_EXAMPLE
}

const TOOL_USE_EXAMPLE = `
以下是使用假想工具的一些示例：

---
用户：生成文档中年龄最大人物的图像。

助手：我可以使用 document_qa 工具找出文档中年龄最大的人是谁。
<tool_use>
  <name>document_qa</name>
  <arguments>{"document": "document.pdf", "question": "Who is the oldest person mentioned?"}</arguments>
</tool_use>

用户：<tool_use_result>
  <name>document_qa</name>
  <result>John Doe, a 55 year old lumberjack living in Newfoundland.</result>
</tool_use_result>

助手：我可以使用 image_generator 工具来创建 John Doe 的肖像。
<tool_use>
  <name>image_generator</name>
  <arguments>{"prompt": "A portrait of John Doe, a 55-year-old man living in Canada."}</arguments>
</tool_use>

用户：<tool_use_result>
  <name>image_generator</name>
  <result>image.png</result>
</tool_use_result>

助手：图像已生成，文件名为 image.png。

---
用户：“以下运算的结果是什么：5 + 3 + 1294.678？”

助手：我可以使用 python_interpreter 工具来计算该运算的结果。
<tool_use>
  <name>python_interpreter</name>
  <arguments>{"code": "5 + 3 + 1294.678"}</arguments>
</tool_use>

用户：<tool_use_result>
  <name>python_interpreter</name>
  <result>1302.678</result>
</tool_use_result>

助手：该运算的结果是 1302.678。

---
用户：“广州和上海哪个城市人口最多？”

助手：我可以使用 search 工具来查找广州的人口。
<tool_use>
  <name>search</name>
  <arguments>{"query": "Population Guangzhou"}</arguments>
</tool_use>

用户：<tool_use_result>
  <name>search</name>
  <result>Guangzhou has a population of 15 million inhabitants as of 2021.</result>
</tool_use_result>

助手：我可以使用 search 工具来查找上海的人口。
<tool_use>
  <name>search</name>
  <arguments>{"query": "Population Shanghai"}</arguments>
</tool_use>

用户：<tool_use_result>
  <name>search</name>
  <result>26 million (2019)</result>
</tool_use_result>

助手：上海的人口为 2600 万，而广州的人口为 1500 万。因此，上海的人口最多。
`
