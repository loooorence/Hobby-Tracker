import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type GetPostsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, description: string, authorId: string }> };


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
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;