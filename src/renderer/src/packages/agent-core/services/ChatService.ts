import OpenAI from 'openai'
import { ChatMessageDTO } from '@renderer/packages/agent-core/models/dto/ChatMessageDTO'

class ChatService {
  public static async sendMessage(
    systemPrompt: string,
    messages: ChatMessageDTO[]
  ): Promise<string | null> {
    const client = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_APIKEY,
      baseURL: import.meta.env.VITE_OPENAI_BASE_URL,
      dangerouslyAllowBrowser: true
    })

    const completion = await client.chat.completions.create({
      model: 'Qwen/Qwen3-235B-A22B-Instruct-2507',
      messages: [{ role: 'system', content: systemPrompt }, ...messages]
    })

    return completion.choices[0].message.content
  }
}

export { ChatService }
