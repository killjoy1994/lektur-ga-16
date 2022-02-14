import React from "react";
import ReactPlayer from "react-player";

import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <div className={styles.left}>
          <h1>Bring Your Class At Home</h1>
          <a href="/" className={styles["hero-btn"]}>
            Enroll Now
          </a>
        </div>
        <div className={styles.right}>
          <ReactPlayer
            className={styles["react-player"]}
            controls
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
            playing={false}
          />
          <div className={styles["video-detail"]}>
            <div className={styles.description}>
              <div className={styles["description-left"]}>
                <p className={styles.amount}>156 Enrolled</p>
                <h3>Sales and Marketing Master Class</h3>
                <p className={styles.author}>Susan Sarah</p>
              </div>
              <div className={styles["description-right"]}>
                <p>4 Study Material</p>
                <p>14 Learning Videos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
