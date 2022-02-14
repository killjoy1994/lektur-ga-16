import React from "react";

import styles from "../../styles/Card.module.css";

const Card = (props) => {
  const { src, title, author, videos, materials, description, category } = props;

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
        <p className={`"card-text" ${styles["card-text"]}`}>{description}</p>
      </div>
      <div className={styles["card-category"]}>{category}</div>
    </div>
  );
};

export default Card;
