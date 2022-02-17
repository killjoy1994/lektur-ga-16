import React, { useState } from "react";

import exit from "../../assests/exit-logo.svg";
import styles from "../../styles/CourseModal.module.css";
import check from "../../assests/green-check.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";

const MaterialModal = (props) => {
  const showHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>React Crash Course: Study Material</h2>
          <button onClick={showHandler}>
            <img src={exit} alt="exit" />
          </button>
        </div>
        <div className={styles["content-material"]}>
          <div className={styles["lesson-control"]}>
            <h2 className={styles.title}>Lesson #1: Lorem Ipsum</h2>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
          </div>
          <div className={styles["lesson-control"]}>
            <h2 className={styles.title}>Lesson #2: Lorem Ipsum</h2>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
          </div>
          <div className={styles["lesson-control"]}>
            <h2 className={styles.title}>Lesson #3: Lorem Ipsum</h2>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
            <div className={`form-check ${styles["form-check"]}`}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Read course material : <a href="#">React and Open Source.pdf</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialModal;
