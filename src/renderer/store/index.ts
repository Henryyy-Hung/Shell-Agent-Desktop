// src/store/index.ts
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import chatConfigReducer from '@renderer/store/slices/chatConfigSlice';
import topicsReducer from '@renderer/store/slices/topicsSlice';
import messagesReducer from '@renderer/store/slices/messagesSlice';

export const store = configureStore({
  reducer: {
    chatConfig: chatConfigReducer,
    topics: topicsReducer,
    messages: messagesReducer,
  },
});

// 获取 RootState 类型（整个 Redux 状态树的类型）
export type RootState = ReturnType<typeof store.getState>;

// 获取 AppDispatch 类型（dispatch 能接受的 action 类型）
export type AppDispatch = typeof store.dispatch;

// 定义统一的 AppThunk 类型
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // thunk 的返回值类型，默认为 void
  RootState, // redux 全局状态的类型
  unknown, // 额外参数（一般不用）
  Action<string> // action 类型
>;
