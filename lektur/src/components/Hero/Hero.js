import React from "react";

import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <div className={styles.title}>
          <h1>Bring your class at home</h1>
          <a href="" className={styles["hero-btn"]}>
            Enroll Now
          </a>
        </div>
        <div className={styles["video-section"]}></div>
      </div>
    </div>
  );
};

export default Hero;
