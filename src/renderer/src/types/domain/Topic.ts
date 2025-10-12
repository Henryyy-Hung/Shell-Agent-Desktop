interface Topic {
  id: string
  title: string
  messageIds: string[]
  isProcessing: boolean
  creationTime: number
  updateTime: number
}

export type { Topic }
