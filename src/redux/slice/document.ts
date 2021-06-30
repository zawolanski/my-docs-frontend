/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDocument } from 'types/util';

interface IDocumentState {
  documents: {
    own: IDocument[] | null;
    shared: IDocument[] | null;
  };
  currentDocument: IDocument | null;
}

const initialState: IDocumentState = {
  documents: {
    own: null,
    shared: null,
  },
  currentDocument: null,
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
    addCurrentDocument: (state, action: PayloadAction<IDocument>) => {
      state.currentDocument = action.payload;
    },
    updateContent: (state, action: PayloadAction<string>) => {
      if (state.currentDocument?.content)
        state.currentDocument.content = action.payload;
    },
  },
});

export const { addDocuments, addCurrentDocument, updateContent } =
  documentSlice.actions;

export default documentSlice.reducer;
