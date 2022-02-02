import React from "react";

import styles from "../styles/Home.module.css";
import Cards from "../components/CourseCards/Cards";
import MainContent from "../components/MainContent/MainContent";

const Home = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <div class={styles.hero}></div>
      <MainContent />
    </div>
  );
};

export default Home;
