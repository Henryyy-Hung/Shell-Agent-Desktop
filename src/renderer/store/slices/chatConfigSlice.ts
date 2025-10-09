import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ChatConfig } from '@renderer/types/ChatConfig';
import { RemoteClientEnum } from '@renderer/enums/RemoteClientEnum';

const initialState: ChatConfig = {
  currentTopicId: null,
  currentRemoteShell: RemoteClientEnum.MOBAXTERM,
  webSearchEnabled: false,
};

const chatConfigSlice = createSlice({
  name: 'chatConfig',
  initialState,
  reducers: {
    setCurrentTopicId(state, action: PayloadAction<string | null>) {
      state.currentTopicId = action.payload;
    },
    setCurrentRemoteShell(state, action: PayloadAction<any>) {
      state.currentRemoteShell = action.payload;
    },
    toggleWebSearch(state) {
      state.webSearchEnabled = !state.webSearchEnabled;
    },
  },
});

export const { setCurrentTopicId, setCurrentRemoteShell, toggleWebSearch } =
  chatConfigSlice.actions;

export default chatConfigSlice.reducer;
