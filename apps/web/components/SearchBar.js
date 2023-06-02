import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

function Searchbar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  /* 
  Function to handle search input
  */
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    onSearch(inputValue); // Call the 'onSearch' callback function with the current input value
    setInputValue(''); // Clear the input field after submitting
  };

  // Render the search bar with an input field and a search button
  return (
    <form className={styles.Searchbar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update the input value state when the input changes
      />
      <button className={styles.Search_button} type="submit">
        <FaSearch /> {/* the search icon */}
      </button>
    </form>
  );
}

export default Searchbar;
