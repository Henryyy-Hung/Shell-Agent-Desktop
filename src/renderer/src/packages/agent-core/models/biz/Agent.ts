import { ChatContext } from '@renderer/packages/agent-core/models/biz/ChatContext'

interface Agent {
  id: string
  name: string
  description: string
  instruction: string
  tools: string[]
  subAgents: Agent[]
  context: ChatContext
}

export type { Agent }
