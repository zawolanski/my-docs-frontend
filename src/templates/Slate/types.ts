import { Descendant } from 'slate';

export interface SlateTemplateProps {
  children: React.ReactNode;
  documentContent: Descendant[];
}
