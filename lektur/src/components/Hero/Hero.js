import React from "react";
import ReactPlayer from "react-player";

import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <div className={styles.left}>
          <h1>Bring your class at home</h1>
          <a href="" className={styles["hero-btn"]}>
            Enroll Now
          </a>
        </div>
        <div className={styles.right}>
          <ReactPlayer className={styles["react-player"]} url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width="100%" height="70%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
