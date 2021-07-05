/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove, uniqBy, xorBy } from 'lodash';
import { IConnectedUser, IDocument } from 'types/util';
import { IConnectedUsers, IEditorState } from './types';

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
      let uniqueArray: IConnectedUsers[] = [];

      const payloadCopy = action.payload.map((el) => ({
        ...el,
        classNumber: Math.floor(Math.random() * 15),
      }));

      const connectedUsersCopy: IConnectedUsers[] = [
        ...JSON.parse(JSON.stringify(state.connectedUsers)),
        ...JSON.parse(JSON.stringify(payloadCopy)),
      ];

      if (state.connectedUsers.length > action.payload.length) {
        const excluded = xorBy(connectedUsersCopy, payloadCopy, '_id');
        remove(
          connectedUsersCopy,
          (n) => excluded.findIndex((el) => el._id === n._id) !== -1
        );
      }

      uniqueArray = uniqBy(connectedUsersCopy, '_id');

      state.connectedUsers = uniqueArray;
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
