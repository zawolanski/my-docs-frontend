import { gql } from '@apollo/client';

export const CONTENT = gql`
  subscription OnCommentAdded {
    content
  }
`;

export const CHANGE_CONTENT = gql`
  mutation ChangeContent($name: String!) {
    executeSub(name: $name)
  }
`;
