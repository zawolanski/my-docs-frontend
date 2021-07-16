/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor, Element, Transforms } from 'slate';
import { BlockTypes, HeadingVariants } from 'types/util';

export const isBlockActive = (editor: Editor, format: BlockTypes): boolean => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
  }) as any;

  return !!match;
};

export const toggleBlock = (editor: Editor, format: BlockTypes): void => {
  const isActive = isBlockActive(editor, format);

  Transforms.setNodes(
    editor,
    { type: isActive ? 'paragraph' : format },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};

export const toogleHeader = (
  editor: Editor,
  variant: HeadingVariants
): void => {
  Transforms.setNodes(
    editor,
    { type: variant !== 'body1' ? 'heading' : 'paragraph', variant },
    { match: (n) => Editor.isBlock(editor, n), split: true }
  );
};
