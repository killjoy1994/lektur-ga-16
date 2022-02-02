import React from "react";

import styles from "../styles/Home.module.css";
import MainContent from "../components/MainContent/MainContent";
import Hero from "../components/Hero/Hero";
import BannerBottom from "../components/BannerBottom/BannerBottom";

const Home = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <Hero />
      <MainContent />
      <BannerBottom />
    </div>
  );
};

export default Home;
