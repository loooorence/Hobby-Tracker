import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type GetPostsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, description: string, authorId: string, author: { __typename?: 'User', name?: string | null }, Label?: Array<{ __typename?: 'Label', name: string }> | null }> };

export type CreateUserVariables = Types.Exact<{
  password: Types.Scalars['String'];
  name: Types.Scalars['String'];
  email: Types.Scalars['String'];
}>;


export type CreateUser = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, name?: string | null } };

export type LoginVariables = Types.Exact<{
  input: Types.LoginUserInput;
}>;


export type Login = { __typename?: 'Mutation', Login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', email: string, name?: string | null, id: string } } };

export type SignUpVariables = Types.Exact<{
  input: Types.SignUpUserInput;
}>;


export type SignUp = { __typename?: 'Mutation', SignUp: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', email: string, name?: string | null, id: string } } };

export type CreatePostVariables = Types.Exact<{
  title: Types.Scalars['String'];
  description: Types.Scalars['String'];
  authorId: Types.Scalars['String'];
  labelId: Types.Scalars['String'];
}>;


export type CreatePost = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, title: string, description: string, author: { __typename?: 'User', id: string, email: string, name?: string | null } } };

export type GetUserVariables = Types.Exact<{
  userInput: Types.UserWhereUniqueInput;
}>;


export type GetUser = { __typename?: 'Query', user: { __typename?: 'User', name?: string | null } };

export type CreateLabelVariables = Types.Exact<{
  labelInput: Types.LabelCreateInput;
}>;


export type CreateLabel = { __typename?: 'Mutation', createLabel: { __typename?: 'Label', name: string, id: string } };

export type GetLabelsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLabels = { __typename?: 'Query', labels: Array<{ __typename?: 'Label', id: string, name: string }> };


export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;
export const GetPostsDocument = /*#__PURE__*/ gql`
    query GetPosts {
  posts {
    id
    title
    description
    authorId
    author {
      name
    }
    Label {
      name
    }
  }
}
    `;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation CreateUser($password: String!, $name: String!, $email: String!) {
  createUser(data: {password: $password, name: $name, email: $email}) {
    id
    email
    name
  }
}
    `;
export const LoginDocument = /*#__PURE__*/ gql`
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
export const SignUpDocument = /*#__PURE__*/ gql`
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
export const CreatePostDocument = /*#__PURE__*/ gql`
    mutation CreatePost($title: String!, $description: String!, $authorId: String!, $labelId: String!) {
  createPost(
    data: {title: $title, description: $description, author: {connect: {id: $authorId}}, Label: {connect: {id: $labelId}}}
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
export const GetUserDocument = /*#__PURE__*/ gql`
    query GetUser($userInput: UserWhereUniqueInput!) {
  user(where: $userInput) {
    name
  }
}
    `;
export const CreateLabelDocument = /*#__PURE__*/ gql`
    mutation CreateLabel($labelInput: LabelCreateInput!) {
  createLabel(data: $labelInput) {
    name
    id
  }
}
    `;
export const GetLabelsDocument = /*#__PURE__*/ gql`
    query GetLabels {
  labels {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUsers(variables?: GetUsersVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    GetPosts(variables?: GetPostsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPosts> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPosts>(GetPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPosts', 'query');
    },
    CreateUser(variables: CreateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUser>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    },
    Login(variables: LoginVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Login> {
      return withWrapper((wrappedRequestHeaders) => client.request<Login>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    SignUp(variables: SignUpVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignUp> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignUp>(SignUpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignUp', 'mutation');
    },
    CreatePost(variables: CreatePostVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePost> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePost>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePost', 'mutation');
    },
    GetUser(variables: GetUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query');
    },
    CreateLabel(variables: CreateLabelVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateLabel> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateLabel>(CreateLabelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateLabel', 'mutation');
    },
    GetLabels(variables?: GetLabelsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLabels> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLabels>(GetLabelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLabels', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;