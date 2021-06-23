import { IDocument } from 'types/util';

export interface ResponseData {
  status: number;
  message: string;
  data?: IDocument;
}

export interface ParamData {
  docId: string;
}
