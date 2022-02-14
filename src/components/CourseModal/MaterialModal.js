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
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default MaterialModal;
