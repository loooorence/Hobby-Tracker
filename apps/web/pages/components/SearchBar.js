import React, { useState } from 'react';
import './SearchBar.css';
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-majesticons/search-line';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className= {styles.search-button} type="submit">
          <Icon className= {styles.search-icon} icon={searchLine} color="#879198" width="25"/>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;