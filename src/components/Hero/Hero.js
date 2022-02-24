import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "../../styles/Hero.module.css";
import Loader from "../Loader/Loader";

const Hero = () => {
  const { courseList } = useSelector((state) => state.courses);

  //get random course
  let randomed = courseList[Math.floor(Math.random() * courseList.length)];
  // console.log(randomed);

  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <div className={styles.left}>
          <h1>Bring Your Class At Home</h1>
          <Link to={randomed ? "/detail/" + randomed.id : ""} className={styles["hero-btn"]}>
            Course Detail
          </Link>
        </div>
        <div className={styles.right}>
          {randomed ? (
            <>
              <ReactPlayer className={styles["react-player"]} controls url={randomed.contents[0].video} width="100%" height="100%" playing={false} />
              <div className={styles["video-detail"]}>
                <div className={styles.description}>
                  <div className={styles["description-left"]}>
                    <p className={styles.amount}>10 Enrolled</p>
                    <h3>{randomed.title}</h3>
                    <p className={styles.author}>{randomed.by.fullName}</p>
                  </div>
                  <div className={styles["description-right"]}>
                    <p>4 Study Material</p>
                    <p>{randomed.contents.length} Learning Videos</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles["loader-wrapper"]}>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
