import React, { useState, useEffect } from 'react';
import { gql } from '../data-access/graphql-client';
import { useQuery } from '@tanstack/react-query';
import SearchBar from '../components/SearchBar';

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const {
    isLoading: isLoadingPosts,
    error: errorPosts,
    data: dataPosts,
  } = useQuery({
    queryKey: ['Posts'],
    queryFn: () => gql.GetPosts(),
  });

  const handleSearch = (term) => {
    // Perform the search here
    const results = dataPosts.posts.filter(post =>
      post.description.toLowerCase().includes(term.toLowerCase())
    );

    setSearchTerm(term);

    if (results.length > 0) {
      setSearchStatus(`Search for "${term}" was successful.`);
      return true;
    } else {
      setSearchStatus(`Search for "${term}" found no matches.`);
      return false;
    }
  };

  useEffect(() => {
    console.log(searchStatus);
  }, [searchStatus]);

  if (isLoadingPosts) return <div>Loading</div>;
  if (errorPosts) return <div>Error</div>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {dataPosts.posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.authorId}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;