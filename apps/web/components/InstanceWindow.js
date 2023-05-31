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
    <div className={styles.Instance_Backdrop}>
      <h1 className={styles.Logo}>Hobby Tracker</h1>
      <div className={styles.Instance}>
        <input
          type="text"
          value={title}
          onChange={titleChangeHandler}
          className={styles.Instance__title}
          placeholder="Enter Instance Title"
        />

        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className={styles.Instance__selectedImage}
          />
        )}

        <label htmlFor="fileInput" className={styles.Instance__fileLabel}>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            className={styles.Instance__fileInput}
          />
        </label>

        {showHideButton && (
          <button
            type="button"
            onClick={stopEditingHandler}
            className={styles.Instance__hideDesc}
          >
            X
          </button>
        )}

        <div className={styles.Instance__descriptionContainer}>
          {showDescription && (
            <textarea
              placeholder="Enter a description"
              value={description}
              onChange={descriptionChangeHandler}
              className={styles.Instance__description}
            />
          )}

          <div className={styles.Instance__buttonsContainer}>
            <button
              type="button"
              onClick={startEditingHandler}
              className={styles.Instance_addDesc}
            >
              Add Description
            </button>

            <button
              type="button"
              onClick={postHandler}
              className={styles.Instance__buttonpost}
            >
              Post
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className={styles.Instance__Error}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default InstanceWindow;
