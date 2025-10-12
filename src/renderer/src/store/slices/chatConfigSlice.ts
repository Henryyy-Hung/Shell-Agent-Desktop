import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RemoteClientEnum, RemoteClientEnumType } from '@renderer/enums/RemoteClientEnum'

export type ChatConfigState = {
  currentTopicId: string | null
  currentRemoteShell: RemoteClientEnumType
  webSearchEnabled: boolean
}

const initialState: ChatConfigState = {
  currentTopicId: null,
  currentRemoteShell: RemoteClientEnum.MOBAXTERM,
  webSearchEnabled: false
}

const chatConfigSlice = createSlice({
  name: 'chatConfig',
  initialState,
  reducers: {
    setCurrentTopicId(state, action: PayloadAction<string | null>) {
      state.currentTopicId = action.payload
    },
    setCurrentRemoteShell(state, action: PayloadAction<any>) {
      state.currentRemoteShell = action.payload
    },
    toggleWebSearch(state) {
      state.webSearchEnabled = !state.webSearchEnabled
    }
  }
})

export const { setCurrentTopicId, setCurrentRemoteShell, toggleWebSearch } = chatConfigSlice.actions

export { chatConfigSlice }
