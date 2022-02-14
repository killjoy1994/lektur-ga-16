import React from "react";

import exit from "../../assests/exit-logo.svg";
import styles from "../../styles/CourseModal.module.css";
import check from "../../assests/green-check.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";

const ContentModal = (props) => {
  const closeModalHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>React Crash Course: Content</h2>
          <button onClick={closeModalHandler}>
            <img src={exit} alt="exit" />
          </button>
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <span>
                <img src={check} alt="check" />
              </span>
              Lesson #1: What is React
            </li>
            <li>
              <span>
                <img src={check} alt="check" />
              </span>
              Lesson #2: Create React App
            </li>
            <li>
              <span>
                <img src={play} alt="play" />
              </span>
              Lesson #3: Css in Reset
            </li>
            <li className={styles.lock}>
              <span>
                <img src={lock} alt="lock" />
              </span>
              Lesson #4: Lorem Ipsum
            </li>
            <li className={styles.lock}>
              <span>
                <img src={lock} alt="lock" />
              </span>
              Lesson #5: Lorem Ipsum
            </li>
            <li className={styles.lock}>
              <span>
                <img src={lock} alt="lock" />
              </span>
              Lesson #6: Lorem Ipsum
            </li>
            <li className={styles.lock}>
              <span>
                <img src={lock} alt="lock" />
              </span>
              Lesson #7: Lorem Ipsum
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
