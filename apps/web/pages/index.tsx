import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import HomeInstance from '../components/HomeInstance';

export function Index() {
  const handleSearch = (searchValue: string) => {
    console.log('Searching for:', searchValue);
  };

  return (
    <div>
      <SideBar />
      <SearchBar onSearch={handleSearch} />
      <HomeInstance />
    </div>
  );
}

export default Index;
