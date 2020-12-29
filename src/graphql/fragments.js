import { gql } from 'apollo-boost';

export const REPOSITORY_PARTS = gql`
  fragment RepositoryParts on RepositoryConnection {
    edges {
      node {
        id
        ownerName
        fullName
        reviewCount
        ratingAverage
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
      }
    }
  }
`;
