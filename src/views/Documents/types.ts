import { IDocument } from 'types/util';

export interface IDocumentFetched {
  own: IDocument[];
  shared: IDocument[];
}
