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

export interface IConnectedUsers extends IConnectedUser {
  classNumber: number;
}

export interface IEditorState {
  connectedUsers: IConnectedUsers[];
  wasChange: boolean;
  currentDocument: ICurrentDocument | null;
}
