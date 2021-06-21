import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { IDocument } from 'types/util';
import { useSnackbar } from 'notistack';
import Document from 'components/molecules/Document/documents';
import { Typography, List, Container, ListSubheader } from '@material-ui/core';
import styles from './document.module.scss';

const Documents = (): JSX.Element => {
  const { authAxios } = useFetchContext();
  const [documents, setDocuments] = useState<IDocument[] | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getUserDocuments = async (): Promise<void> => {
      try {
        const response = await authAxios?.get('/document/get');
        if (response?.data !== undefined)
          setDocuments(response.data as IDocument[]);
      } catch (e) {
        enqueueSnackbar('Unknown error occured.', { variant: 'error' });
      }
    };

    getUserDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md" className={styles.wrapper}>
      <Typography variant="h4" component="h2">
        Documents
      </Typography>
      <List
        aria-labelledby="recent-subheader"
        subheader={
          <ListSubheader component="div" id="recent-subheader">
            Recent
          </ListSubheader>
        }
      >
        {documents?.map((doc) => (
          <Document name={doc.name} id={doc._id} key={doc._id} />
        ))}
      </List>
    </Container>
  );
};

export default Documents;
