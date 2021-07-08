/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConnectedUser, IDocument } from 'types/util';
import { IEditorState } from './types';

const initialState: IEditorState = {
  connectedUsers: [],
  wasChange: false,
  currentDocument: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setConnectedUsers: (state, action: PayloadAction<IConnectedUser[]>) => {
      state.connectedUsers = action.payload;
    },
    setWasChange: (state, action: PayloadAction<boolean>) => {
      state.wasChange = action.payload;
    },
    updateContent: (state, action: PayloadAction<string>) => {
      if (state.currentDocument?.content)
        state.currentDocument.content = action.payload;
    },
    updateDocumentName: (state, action: PayloadAction<string>) => {
      if (state.currentDocument?.name)
        state.currentDocument.name = action.payload;
    },
    addCurrentDocument: (state, action: PayloadAction<IDocument>) => {
      state.currentDocument = action.payload;
    },
  },
});

export const {
  setConnectedUsers,
  setWasChange,
  updateContent,
  updateDocumentName,
  addCurrentDocument,
} = editorSlice.actions;

export default editorSlice.reducer;
