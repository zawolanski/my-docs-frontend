import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import DocumentFetchError from 'components/atoms/DocumentsFetchError/documentFetchError';
import { ResponseData, ParamData } from './types';

const Editor = (): JSX.Element => {
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
      } catch (e) {
        const { data, status } = e.response;
        if (
          status === 404 ||
          (status === 400 && data.message[0] === 'invalid document id')
        )
          setResponse({ status: 404, message: 'Document not found!' });
        else if (status === 403) {
          setResponse({
            status: 403,
            message: 'You are not authorized to open this document!',
          });
        } else {
          setResponse({
            status: 500,
            message: 'Unknown error occured!',
          });
        }
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

  return <div>{docId}</div>;
};

export default Editor;
