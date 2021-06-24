import Editable from 'components/organisms/Editable/editable';
import SlateTemplate from 'templates/Slate/slate';
import Toolbar from 'components/organisms/Toolbar/toolbar';
import { useEffect, useState } from 'react';
import CenteredError from 'components/atoms/DocumentsFetchError/documentFetchError';
import { Descendant } from 'slate';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@material-ui/core';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import styled from './editor.module.scss';
import { EditorProps } from './types';

const Editor = ({ content, permissions }: EditorProps): JSX.Element | null => {
  const { enqueueSnackbar } = useSnackbar();
  const [documentContent, setDocumentContent] =
    useState<Descendant[] | null | 'loading'>('loading');

  useEffect(() => {
    if (content !== undefined) {
      try {
        const data: Descendant[] = JSON.parse(content.toString());

        setDocumentContent(data);
      } catch {
        enqueueSnackbar('Occurred error while loading the document', {
          variant: 'error',
        });
        setDocumentContent(null);
      }
    }
  }, [content, enqueueSnackbar]);

  if (documentContent === 'loading')
    return (
      <CenterWrapper>
        <CircularProgress />
      </CenterWrapper>
    );

  if (documentContent === null)
    return (
      <CenteredError>Occurred error while loading the document</CenteredError>
    );

  return (
    <SlateTemplate documentContent={documentContent}>
      <div className={styled.wrapper}>
        {permissions === 'editor' ? <Toolbar /> : null}
        <Editable permissions={permissions} />
      </div>
    </SlateTemplate>
  );
};

export default Editor;
