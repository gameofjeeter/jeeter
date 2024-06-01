import React,{useState} from 'react';
import styles from './style.module.css';
import { Link } from "react-router-dom";
import Modal from '../../components/Modal/Modal.jsx'
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <img src="/image/IMG_06221.png" alt="Background" />
      </div>
      <div id="logo" className={styles.logo}>
        <Link to="">
        <img src="/image/IMG_06161.png" alt="Logo" />
        </Link>
        
        <div className={styles.imageContainer}>
          <Link to="/about_us" className={styles.imageWrapper}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}>About</div>
          </Link>
          <Link to="/key-stats" className={styles.imageWrapper}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}>Key Stats</div>
          </Link>
          <Link  className={styles.imageWrapper} onClick={handleOpenModal}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}><button  >Link</button>
          </div>
          </Link>
        </div>
      </div>
       <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default HomePage;
