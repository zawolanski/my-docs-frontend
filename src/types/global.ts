import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type ParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

export type CodeElement = {
  type: 'code';
  children: CustomText[];
};

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  sup?: boolean;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: ParagraphElement | CodeElement;
    Text: CustomText;
  }
}
