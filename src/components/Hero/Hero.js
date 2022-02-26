import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "../../styles/Hero.module.css";
import Loader from "../Loader/Loader";

const Hero = () => {
  const { courseList } = useSelector((state) => state.courses);

  //get random course
  let course = courseList[6];

  let counted = 0;
  course?.contents.forEach((content) => {
    return (counted += content.materials.length);
  });


  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <div className={styles.left}>
          <h1>Bring Your Class At Home</h1>
          <Link to={course ? "/detail/" + course.id : ""} className={styles["hero-btn"]}>
            Course Detail
          </Link>
        </div>
        <div className={styles.right}>
          {course ? (
            <>
              <ReactPlayer className={styles["react-player"]} controls url={course.contents[0].video} width="100%" height="100%" playing={false} />
              <div className={styles["video-detail"]}>
                <div className={styles.description}>
                  <div className={styles["description-left"]}>
                    <p className={styles.amount}>4 Enrolled</p>
                    <h3>{course.title}</h3>
                    <p className={styles.author}>{course.by.fullName}</p>
                  </div>
                  <div className={styles["description-right"]}>
                    <p>{counted} Study Material</p>
                    <p>{course.contents.length} Learning Videos</p>
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
