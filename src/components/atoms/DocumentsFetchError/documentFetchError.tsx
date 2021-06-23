import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import styles from './documentFetchError.module.scss';
import { IDocumentFetchErrorProps } from './types';

const DocumentFetchError = ({
  children,
}: IDocumentFetchErrorProps): JSX.Element => (
  <CenterWrapper>
    <div className={styles.wrapper}>
      <ErrorIcon />
      <Typography variant="h4" component="h2">
        {children}
      </Typography>
      <Button variant="outlined" component={Link} to="/">
        Back to main page
      </Button>
    </div>
  </CenterWrapper>
);

export default DocumentFetchError;
