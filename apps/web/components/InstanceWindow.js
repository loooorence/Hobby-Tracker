import React, { useState } from 'react';
import styles from './InstanceWindow.module.css';

function InstanceWindow() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showHideButton, setShowHideButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const startEditingHandler = () => {
    setShowDescription(true);
    setShowHideButton(true);
  };

  const stopEditingHandler = () => {
    setShowDescription(false);
    setShowHideButton(false);
    setDescription('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const postHandler = () => {
    if (!title.trim() && !selectedFile) {
      setErrorMessage('Please Enter a Title and Select an Image');
    } else if (!selectedFile) {
      setErrorMessage('Please Select an Image.');
    } else if (!title) {
      setErrorMessage('Please Enter a Title');
    } else {
      setErrorMessage('');
      console.log(title);
      console.log(description);
    }
  };

  return (
    <div className={styles.Instance_backdrop}>
      <h1 className={styles.Logo}>Hobby Tracker</h1>
      <div className={styles.Instance}>
        <input
          type="text"
          value={title}
          onChange={titleChangeHandler}
          className={styles.Instance_title}
          placeholder="Enter Instance Title"
        />

        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className={styles.Instance_selected_image}
          />
        )}

        <label htmlFor="fileInput" className={styles.Instance_file_label}>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            className={styles.Instance_file_input}
          />
        </label>

        {showHideButton && (
          <button
            type="button"
            onClick={stopEditingHandler}
            className={styles.Instance_hide_desc}
          >
            X
          </button>
        )}

        <div className={styles.Instance_descriptionContainer}>
          {showDescription && (
            <textarea
              placeholder="Enter a description"
              value={description}
              onChange={descriptionChangeHandler}
              className={styles.Instance_description}
            />
          )}

          <div className={styles.Instance_buttonsContainer}>
            <button
              type="button"
              onClick={startEditingHandler}
              className={styles.Instance_add_desc}
            >
              Add Description
            </button>

            <button
              type="button"
              onClick={postHandler}
              className={styles.Instance_button_post}
            >
              Post
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className={styles.Instance_error}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default InstanceWindow;