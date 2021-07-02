/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDocument } from 'types/util';
import { IDocumentState } from './types';

const initialState: IDocumentState = {
  documents: {
    own: null,
    shared: null,
  },
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    addDocuments: (
      state,
      action: PayloadAction<{ own: IDocument[]; shared: IDocument[] }>
    ) => {
      state.documents.own = action.payload.own;
      state.documents.shared = action.payload.shared;
    },
  },
});

export const { addDocuments } = documentSlice.actions;

export default documentSlice.reducer;
