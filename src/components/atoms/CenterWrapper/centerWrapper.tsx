import styled from './centerWrapper.module.scss';
import { CenterWrapperProps } from './types';

const CenterWrapper = ({ children }: CenterWrapperProps): JSX.Element => (
  <div className={styled.wrapper}>{children}</div>
);

export default CenterWrapper;
