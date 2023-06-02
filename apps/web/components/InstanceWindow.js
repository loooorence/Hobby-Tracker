import React, { useState } from 'react';
import styles from './InstanceWindow.module.css';

function InstanceWindow() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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
    <div className={styles.InstanceBackdrop}>
      {/* <h1 className={styles.logo}>Hobby Tracker</h1> */}
      <div className={styles.instance}>
        <input
          type="text"
          value={title}
          onChange={titleChangeHandler}
          className={styles.instance__title}
          placeholder="Title"
        />

        {/* {selectedFile && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className={styles.instance__selectedImage}
          />
        )} */}


        <div className={styles.instance__descriptionContainer}>
          {/* <textarea
            placeholder="Enter a description"
            value={description}
            onChange={descriptionChangeHandler}
            className={styles.instance__description}
          /> */}
          <label htmlFor="fileInput" className={styles.instance__fileLabel}>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            className={styles.instance__fileInput}
          />
          Upload
        </label>

          <div className={styles.instance__buttonsContainer}>
            <button
              type="button"
              onClick={postHandler}
              className={styles.instance__buttonpost}
            >
              Post
            </button>
          </div>

        </div>

        {/* {errorMessage && (
          <div className={styles.instance__Error}>{errorMessage}</div>
        )} */}

        {selectedFile && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className={styles.instance__selectedImage}
          />
        )}  
        <textarea
            placeholder="Enter a description"
            value={description}
            onChange={descriptionChangeHandler}
            className={styles.instance__description}
        />
        {errorMessage && (
          <div className={styles.instance__Error}>{errorMessage}</div>
        )}
      </div>

    </div>
  );
}
export default InstanceWindow;
