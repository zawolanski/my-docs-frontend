import { IAuthData, IConnectedUser, IDocument } from 'types/util';

export interface ICurrentDocument extends IDocument {
  wasChange?: boolean;
}

export interface ISetAuthData extends IAuthData {
  token: string;
}

export interface IDocumentState {
  documents: {
    own: IDocument[] | null;
    shared: IDocument[] | null;
  };
}

export interface IEditorState {
  connectedUsers: IConnectedUser[] | null;
  wasChange: boolean;
  currentDocument: ICurrentDocument | null;
}
