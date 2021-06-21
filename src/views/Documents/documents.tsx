import { IconButton } from '@material-ui/core';
import { useAuthContext } from 'context/auth/AuthContext';
import LogoutIcon from '@material-ui/icons/ExitToAppOutlined';
import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { IDocument } from 'types/util';
import { useSnackbar } from 'notistack';
import styles from './document.module.scss';

const Documents = (): JSX.Element => {
  const { logout } = useAuthContext();
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
    <div className={styles.wrapper}>
      <div>
        <IconButton onClick={() => logout()}>
          <LogoutIcon />
        </IconButton>
        <div>Documents</div>
        <div>
          {documents?.map((doc) => (
            <p key={doc._id}>{doc.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
