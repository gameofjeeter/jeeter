import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import styles from './about.style.module.css';

const About = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [activeMonster, setactiveMonster] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setShowLoading(false);
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
            <img src="/image/IMG_06181.png" alt="" className={styles.leftImage} />
          </div>
          {/* Right Content */}
          <div className={styles.rightContent}>
            {showLoading ? (
              <div className={styles.loadingAnimation}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            ) : (
              <>
                {/* Heading */}
                <h1 className={styles.heading}>
                  About Us !
                </h1>
                {/* Paragraph */}
                <div className={styles.paragraphContainer}>
                  <p className={styles.paragraph}>
                    Game of Jeeters is Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla 
                    Bla Bla Bla Bla Bla Bla Bla Bla BlaBla Bla Bla Bla Bla Bla Bla Bla 
                            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ...........
                  </p>
                </div>
                {/* Button */}
                <button className={styles.button} >
                  Share My Findings
                </button>
              </>
            )}
          </div>
        </div>
        {/* Background Image */}
        <div className={styles.backgroundImage} />
          {/* New Image */}
            <div className={activeMonster?styles.monsterContainer + ' ' + styles.activeMonster:styles.monsterContainer} onClick={()=>{setactiveMonster(!activeMonster)}}>
                <img src="/image/IMG_0628.png" alt="" className={styles.newImage} />
                <span>Nothing<br/>Happen<br/>Bitch!</span>
            </div>
      </div>
    </>
  );
};

export default About;
