import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

function Searchbar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the 'onSearch' callback function with the current input value
    const result = onSearch(inputValue);

    // Log whether the search was successful or not
    if (result) {
      console.log(`Search for "${inputValue}" was successful.`);
    } else {
      console.log(`Search for "${inputValue}" found no matches.`);
    }

    // Clear the input field after submitting
    setInputValue('');
  };

  return (
    <form className={styles.Searchbar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.Search_button} type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default Searchbar;