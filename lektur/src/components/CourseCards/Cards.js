import React from "react";
import Card from "./Card";

import styles from "../../styles/Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
