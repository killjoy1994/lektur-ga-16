import React, { useState } from "react";

import exit from "../../assests/exit-logo.svg";
import styles from "../../styles/CourseModal.module.css";
// import check from "../../assests/green-check.svg";
// import play from "../../assests/on-play.svg";
// import lock from "../../assests/lock.svg";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";


const MaterialModal = (props) => {
  const { materialList, isLoading } = useSelector((state) => state.popUpMaterials);

  const showHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {isLoading ? (
          <div style={{ textAlign: "center", marginTop: "30%" }}>
            <Loader />
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2>React Crash Course: Study Material</h2>
              <button onClick={showHandler}>
                <img src={exit} alt="exit" />
              </button>
            </div>
            <div className={styles["content-material"]}>
              {materialList.map((material, idx) => {
                return (
                  <div className={styles["lesson-control"]} key={material.title + idx}>
                    <h2 className={styles.title}>{material.title}</h2>
                    {material.materials.map((item, idx) => {
                      return (
                        <div key={idx + item.name} className={`form-check ${styles["form-check"]}`}>
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label className="form-check-label" htmlFor="flexCheckChecked">
                            Read course material : <a href="#">{item.name}.pdf</a>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MaterialModal;
