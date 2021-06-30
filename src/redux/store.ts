import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slice/document';

export const store = configureStore({
  reducer: {
    document: documentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
