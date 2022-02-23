import React from "react";

import exit from "../../assests/exit-logo.svg";
import styles from "../../styles/CourseModal.module.css";
import check from "../../assests/green-check.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";
import { useSelector } from "react-redux";

const ContentModal = (props) => {
  const { content, isLoading } = useSelector((state) => state.popUpContents);

  const closeModalHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {isLoading ? (
          <p style={{ textAlign: "center", marginTop: "20%" }}>Load Contents...</p>
        ) : (
          <>
            <div className={styles.header}>
              <h2>{content.title}</h2>
              <button onClick={closeModalHandler}>
                <img src={exit} alt="exit" />
              </button>
            </div>
            <div className={styles.content}>
              <ul className={styles.list}>
                {content.contents.map(item => {
                  return (
                    <li key={item.id}>
                      <span>
                        <img src={play} alt="play" />
                      </span>
                      {item.title}
                    </li>
                  );
                })}
                
                
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentModal;
