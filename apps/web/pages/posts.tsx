import React from 'react';
import { gql } from '../data-access/graphql-client';
import { useQuery } from '@tanstack/react-query';

const Users = () => {
  const {
    isLoading: isLoadingUsers,
    error: errorUsers,
    data: dataUsers,
  } = useQuery({
    queryKey: ['Users'],
    queryFn: () => gql.GetUsers(),
  });

  const {
    isLoading: isLoadingPosts,
    error: errorPosts,
    data: dataPosts,
  } = useQuery({
    queryKey: ['Posts}'],
    queryFn: () => gql.GetPosts(),
  });

  // console.log(dataPosts);
  // console.log(dataUsers);

  const users = dataUsers?.users.map((user) => (
    <div key={user.id}>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  ));

  const posts = dataPosts?.posts.map((post) => (
    <div key={post.id}>
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>{post.authorId}</div>
    </div>
  ));

  if (isLoadingUsers || isLoadingPosts) return <div>Loading</div>;

  if (errorUsers || errorPosts) return <div>Error</div>;

  return (
    <div>
      <div>{users}</div>
      <div>{posts}</div>
    </div>
  );
};
export default Users;
