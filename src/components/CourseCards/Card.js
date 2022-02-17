import React, { useState } from "react";

import styles from "../../styles/Card.module.css";

const Card = (props) => {
  const [showModal, setShowModal] = useState(true);

  const { src, title, author, videos, materials, description, category } = props;

  const mouseOverHandler = () => {
    setShowModal(true);
    console.log(showModal);
  };

  const mouseOutHandler = () => {
    setShowModal(true);
  };

  // Show more toggle
  // const showMore = (
  //   <button className={styles["show-toggler"]} onClick={console.log("clicked")}>
  //     Show more..
  //   </button>
  // );

  //Modal on mouseover
  const descriptionModal = (
    <div className={styles["description-modal"]}>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={`card ${styles.card}`}>
      <img src={src} className={styles["card-image"]} alt="..." />
      <div className={`card-body ${styles["card-body"]}`}>
        <h5 className={`card-title ${styles["card-title"]}`}>{title}</h5>
        <p className={styles.author}>By {author}</p>
        <div className={styles.amount}>
          <p className={styles.videos}>{videos} Videos</p>
          <p className={styles.material}>{materials} Learning Material</p>
        </div>
        <p className={`"card-text" ${styles["card-text"]}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
          {description.slice(0, 100)}...
        </p>
        {showModal && descriptionModal}
      </div>
      <div className={styles["card-category"]}>{category}</div>
    </div>
  );
};

export default Card;
