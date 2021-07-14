import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type ParagraphElement = { type: 'paragraph'; children: CustomText[] };
export type CodeElement = { type: 'code'; children: CustomText[] };
export type LinkElement = { type: 'link'; url: string; children: Descendant[] };
export type BlockQuoteElement = { type: 'block-quote'; children: Descendant[] };

export type CustomText = {
  text: string;
  children: CustomText[];
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  sup?: boolean;
  sub?: boolean;
  strikethrough?: boolean;
  remove?: boolean;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: ParagraphElement | CodeElement | LinkElement | BlockQuoteElement;
    Text: CustomText;
  }
}
