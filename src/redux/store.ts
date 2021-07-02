import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slice/document';
import editorReducer from './slice/editor';

export const store = configureStore({
  reducer: {
    document: documentReducer,
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
