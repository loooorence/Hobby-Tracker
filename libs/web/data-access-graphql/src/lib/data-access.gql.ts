import { gql } from 'graphql-request';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
      authorId
    }
  }
`;
