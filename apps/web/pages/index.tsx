import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import HomeInstance from '../components/HomeInstance';

export function Index() {
  return (
    <div>
      <SideBar />
      <SearchBar />
      <HomeInstance />
    </div>
  );
}

export default Index;
