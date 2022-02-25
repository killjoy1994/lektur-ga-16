import React from "react";

import MainContent from "../components/MainContent/MainContent";
import Hero from "../components/Hero/Hero";
import BannerBottom from "../components/BannerBottom/BannerBottom";
import NavbarComponent from "../components/Header/NavbarComponent";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {

  return (
    <>
      <NavbarComponent />
      <main className={styles.main}>
        <Hero />
        <MainContent />
        <BannerBottom />
      </main>
      <Footer />
    </>
  );
};

export default Home;
