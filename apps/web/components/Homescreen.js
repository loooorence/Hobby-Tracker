import React, { useState } from 'react';
import styles from './homescreen.module.css';
import Modal from 'react-modal';
import Image from 'next/image';

import image1 from '../public/images/diversity.jpg';
import image2 from '../public/images/HappyFamily.jpg';
import image3 from '../public/images/gumball.jpg';

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
    <div className={styles.Grid_container}>
      {images.map((img, index) => (
        <div
          key={index}
          className={styles.Grid_item}
          onClick={() => openImage(img)}
        >
          <Image src={img.src} width={500} height={500} alt={img.title} />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Image
          src={selectedImg?.src}
          width={500}
          height={500}
          alt={selectedImg?.title}
        />
        <button onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}

export default HomeScreen;
