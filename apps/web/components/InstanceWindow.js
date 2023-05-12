import React, { useState } from 'react';
import InstancePicture from './InstancePicture';
import styles from './instanceWindow.module.css';

function InstanceWindow() {
  //    const [picture, setPicture] = useState(InstanceButton);
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const word = 'Post an Instance';
  const clickHandler = () => {
    console.log('hai');
    //        setPicture(InstancePicture);
  };
  return (
    <div className={styles.instance}>
      <div className={styles.instance__pai}>{word}</div>
      {!isEditing && <button type="button" onClick={startEditingHandler} className={styles.instance__button}>
        Choose a picture
      </button>}
      {isEditing && <InstancePicture onCancel = {stopEditingHandler}/>}
    </div>
  );
}

export default InstanceWindow;
