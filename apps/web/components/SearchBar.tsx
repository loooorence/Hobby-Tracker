import React, { FormEvent, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import { TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';

function Searchbar() {
  const [inputValue, setInputValue] = useState('');

  const createLabel = useMutation({
    mutationKey: ['Login'],
    mutationFn: async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await gql.CreateLabel({
        labelInput: { name: inputValue },
      });
      setInputValue('');
    },
  });

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  // Render the search bar with an input field and a search button
  return (
    // <div className={styles.Searchbar}></div>

    <form className={styles.Searchbar} onSubmit={createLabel.mutate}>
      <TextField
        id="outlined-basic"
        label="Create a Label"
        variant="outlined"
        size="small"
        onChange={handleChange}
        value={inputValue}
      />
      <button className={styles.Search_button} type="submit">
        <FaPlus /> {/* the search icon */}
      </button>
    </form>
  );
}

export default Searchbar;
