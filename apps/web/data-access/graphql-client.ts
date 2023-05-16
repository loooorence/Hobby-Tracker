import { getGraphqlClient } from '../../../libs/web/data-access-graphql/src';

export const gql = getGraphqlClient('http://localhost:3000/graphql');
