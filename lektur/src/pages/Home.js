import React from "react";

import styles from "../styles/Home.module.css";
import MainContent from "../components/MainContent/MainContent";
import Hero from "../components/Hero/Hero";
import BannerBottom from "../components/BannerBottom/BannerBottom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <Navbar/>
      <Hero />
      <MainContent />
      <BannerBottom />
      <div className={styles.footer}></div>
      <Footer/>
    </div>
  );
};

export default Home;
