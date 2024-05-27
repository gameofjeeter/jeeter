// Header.js
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import Modal from '../Modal/Modal.jsx';
import styles from './header.style.module.css';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/image/IMG_06161.png" alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about_us">About</Link>
          </li>
          <li>
            <Link to="/key-stats">Key Stat</Link>
          </li>
          <li>
            <button style={{ color: 'white' }} onClick={handleOpenModal}>Link</button>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
}

export default Header;
