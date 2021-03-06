import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import DocumentFetchError from 'components/atoms/DocumentsFetchError/documentFetchError';
import Main from 'components/slate/Editor/editor';
import { useDispatch } from 'react-redux';
import { addCurrentDocument } from 'redux/slice/editor';
import { ResponseData, ParamData } from './types';

const Editor = (): JSX.Element => {
  const dispatch = useDispatch();
  const { docId } = useParams<ParamData>();
  const { authAxios } = useFetchContext();
  const [response, setResponse] = useState<ResponseData | null>(null);

  useEffect(() => {
    async function fetchDocument(): Promise<void> {
      try {
        const res = await authAxios?.get(`/document/${docId}`);
        setResponse({
          status: 200,
          message: 'Data succesfully fetched',
          data: res?.data,
        });

        dispatch(addCurrentDocument(res?.data));
      } catch (e) {
        if (e.response?.data && e.response?.status) {
          const { data, status } = e.response;
          if (
            status === 404 ||
            (status === 400 && data.message[0] === 'invalid document id')
          ) {
            setResponse({ status: 404, message: 'Document not found!' });
            return;
          }
          if (status === 403) {
            setResponse({
              status: 403,
              message: 'You are not authorized to open this document!',
            });
            return;
          }
        }
        setResponse({
          status: 500,
          message: 'Unknown error occured!',
        });
      }
    }

    fetchDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docId]);

  if (response === null)
    return (
      <CenterWrapper>
        <CircularProgress />
      </CenterWrapper>
    );

  if (response?.status !== null && response?.status !== 200)
    return <DocumentFetchError>{response.message}</DocumentFetchError>;

  if (!response.data)
    return <DocumentFetchError>Unknown error occured</DocumentFetchError>;

  return (
    <Main
      content={response.data.content}
      permissions={response.data.permissions}
    />
  );
};

export default Editor;
