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
      author {
        name
      }
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($password: String!, $name: String!, $email: String!) {
    createUser(data: { password: $password, name: $name, email: $email }) {
      id
      email
      name
    }
  }
`;

const Login = gql`
  mutation Login($input: LoginUserInput!) {
    Login(loginUserInput: $input) {
      user {
        email
        name
        id
      }
      access_token
    }
  }
`;

const SignUp = gql`
  mutation SignUp($input: SignUpUserInput!) {
    SignUp(signUpInput: $input) {
      user {
        email
        name
        id
      }
      access_token
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $description: String!
    $authorId: String!
  ) {
    createPost(
      data: {
        title: $title
        description: $description
        author: { connect: { id: $authorId } }
      }
    ) {
      id
      title
      description
      author {
        id
        email
        name
      }
    }
  }
`;

const GET_USER = gql`
  query GetUser($userInput: UserWhereUniqueInput!) {
    user(where: $userInput) {
      name
    }
  }
`;
