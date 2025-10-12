import { ChatMessageBlockVO } from '@renderer/types/view/ChatMessageBlockVO'
import { ChatContentTypeEnum, ChatContentTypeEnumType } from '@renderer/enums/ChatContentTypeEnum'

class CustomTagParseUtil {
  public static specialTags: string[] = [
    ChatContentTypeEnum.THINK,
    ChatContentTypeEnum.PLAN,
    ChatContentTypeEnum.TOOL_USE,
    ChatContentTypeEnum.TOOL_USE_RESULT,
    ChatContentTypeEnum.FINAL_ANSWER
  ]

  private static createRegex(tags: string[]): RegExp {
    // 先处理成正则的模式
    const tagPattern = tags.map((tag) => tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
    // 使用命名捕获组和反向引用
    const pattern = `<(?<tag>${tagPattern})>(?<inner>[\\s\\S]*?)<\\/\\k<tag>>`
    return new RegExp(pattern, 'i')
  }

  public static parseCustomTags = (messageId: string, input: string): ChatMessageBlockVO[] => {
    let count = 0

    const blocks: ChatMessageBlockVO[] = []

    let remaining = input

    const regex = CustomTagParseUtil.createRegex(CustomTagParseUtil.specialTags)

    let match: RegExpExecArray | null
    match = regex.exec(remaining)

    while (match !== null) {
      const before = remaining.slice(0, match.index)
      if (before.trim()) {
        blocks.push({
          id: `${messageId}-block-${count}`,
          type: ChatContentTypeEnum.NORMAL,
          rawContent: before,
          innerContent: before
        })
        count += 1
      }

      const tagName = match.groups?.tag?.toLowerCase()
      const innerContent = match.groups?.inner ?? ''
      const isTagValid: boolean =
        tagName !== undefined && CustomTagParseUtil.specialTags.includes(tagName)

      blocks.push({
        id: `${messageId}-block-${count}`,
        type: isTagValid ? (tagName as ChatContentTypeEnumType) : ChatContentTypeEnum.NORMAL,
        rawContent: match[0],
        innerContent: innerContent.trim()
      })
      count += 1

      remaining = remaining.slice(match.index + match[0].length)
      match = regex.exec(remaining)
    }

    if (remaining.trim()) {
      blocks.push({
        id: `${messageId}-block-${count}`,
        type: ChatContentTypeEnum.NORMAL,
        rawContent: remaining,
        innerContent: remaining
      })
    }

    return blocks
  }
}

export default CustomTagParseUtil
