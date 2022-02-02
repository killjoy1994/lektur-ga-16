import React from "react";

import styles from "../../styles/Card.module.css";

const Card = () => {
  return (
    <div className={`card ${styles.card}`}>
      <img
        src="https://images.unsplash.com/photo-1643662372195-49a2b4ab6278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className={styles["card-image"]}
        alt="..."
      />
      <div className={`card-body ${styles["card-body"]}`}>
        <h5 className={`card-title ${styles["card-title"]}`}>Create Cinematic Music Video</h5>
        <p className={styles.author}>By John Doe</p>
        <div className={styles.amount}>
          <p className={styles.videos}>15 Videos</p>
          <p className={styles.material}>3 Learning Material</p>
        </div>
        <p className={`"card-text" ${styles["card-text"]}`}>
          Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam
          orci facilisis...
        </p>
      </div>
      <div className={styles["card-category"]}>Art & Humanity</div>
    </div>
  );
};

export default Card;
