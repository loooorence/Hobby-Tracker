import React, { useState } from 'react';
import styles from './homescreen.module.css';
import Modal from 'react-modal';

import image1 from './images/diversity.jpg';
import image2 from './images/HappyFamily.jpg';
import image3 from './images/gumball.jpg';

const images = [
  { src: image1, title: 'diversity' },
  { src: image2, title: 'HappyFamily' },
  { src: image3, title: 'gumball' },
];

function HomeScreen() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (img) => {
    setSelectedImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.gridContainer}>
      {images.map((img, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={img.src} alt={img.title} onClick={() => openImage(img)} />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={selectedImg?.src} alt={selectedImg?.title} />
        <button onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}

export default HomeScreen;
