import React from "react";

import styles from "../styles/Home.module.css";
import MainContent from "../components/MainContent/MainContent";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <Hero />
      <MainContent />
    </div>
  );
};

export default Home;
