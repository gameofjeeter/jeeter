import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import styles from './keyStats.styles.module.css';

const KeyStats = () => {
  const [showContent, setShowContent] = useState(false);
 
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3000 milliseconds delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.backgroundContainer}>
        <Header />
        <div className={styles.contentContainer}>
          {/* Left Image */}
          <div className={styles.leftImageContainer}>
            <img src="/image/IMG_06261.png" alt="" className={styles.leftImage} />
          </div>
          {/* Right Content */}
          <div className={styles.rightContent}>
            {/* Loading animation */}
            {!showContent && (
              <div className={styles.loadingAnimation}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            )}
            {/* Heading */}
            {showContent && (
              <>
                <h1 className={styles.heading}>
                  Key Stats
                </h1>
                {/* Additional Content */}
                <div className={styles.additionalContent}>
                  <p className={styles.highlight}>Initial Supply:<br /> <span>1,000,000,000</span></p>
                  <p className={styles.highlight}>Total Burned: <span>N/A</span></p>
                  <p className={styles.highlight}>Total Supply: <span>1,000,000,000</span></p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Background Image */}
        <div className={styles.backgroundImage} />
        {/* New Image */}
        <img src="/image/IMG_06281.png" alt="" className={styles.newImage} />
      </div>
    </>
  );
};

export default KeyStats;
