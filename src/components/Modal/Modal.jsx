import React from 'react';
import styles from './modal.styles.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <br/>

        <h2 className={styles.modalHeading}>Pick Link</h2>
        <div className={styles.modalButton}>
          <span className={styles.modalButtonText}>Dexscreener</span>
        
        </div>
        <div className={styles.modalButton}>
          <span className={styles.modalButtonText}>Raydium</span>
        
        </div>
        <div className={styles.modalButton}>
          <span className={styles.modalButtonText}>Brideye</span>
          
        </div>
        <div>
        <div className={styles.iconContainer}>
          
          <img src="/image/image 1.png" alt="" />
          <img src="/image/image 2.png" alt="" />
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;
