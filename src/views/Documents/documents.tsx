import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import Document from 'components/molecules/Document/document';
import {
  Typography,
  List,
  Container,
  ListSubheader,
  CircularProgress,
} from '@material-ui/core';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import styles from './document.module.scss';
import { IDocumentFetched } from './types';

const Documents = (): JSX.Element => {
  const { authAxios } = useFetchContext();
  const [documents, setDocuments] = useState<IDocumentFetched | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getUserDocuments = async (): Promise<void> => {
      try {
        const response = await authAxios?.get('/document/getall');
        if (response?.data !== undefined)
          setDocuments(response.data as IDocumentFetched);
      } catch (e) {
        enqueueSnackbar('Unknown error occured.', { variant: 'error' });
      }
    };

    getUserDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (documents === null)
    return (
      <CenterWrapper>
        <CircularProgress />
      </CenterWrapper>
    );

  return (
    <Container maxWidth="md" className={styles.wrapper}>
      <Typography variant="h4" component="h2">
        Documents
      </Typography>
      {documents?.own.length > 0 ? (
        <List
          aria-labelledby="recent-subheader"
          subheader={
            <ListSubheader component="div" id="recent-subheader">
              Recent
            </ListSubheader>
          }
        >
          {documents?.own.map((doc) => (
            <Document name={doc.name} id={doc._id} key={doc._id} />
          ))}
        </List>
      ) : null}
      {documents?.shared.length > 0 ? (
        <List
          aria-labelledby="shared-subheader"
          subheader={
            <ListSubheader component="div" id="shared-subheader">
              Shared
            </ListSubheader>
          }
        >
          {documents?.shared.map((doc) => (
            <Document name={doc.name} id={doc._id} key={doc._id} />
          ))}
        </List>
      ) : null}
    </Container>
  );
};

export default Documents;
