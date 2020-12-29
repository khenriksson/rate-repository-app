import { gql } from 'apollo-boost';
import { REPOSITORY_PARTS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      ...RepositoryParts
    }
  }
  ${REPOSITORY_PARTS}
`;
