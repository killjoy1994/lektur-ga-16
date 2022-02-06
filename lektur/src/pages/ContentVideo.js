import React from "react";

import Navbar from "../components/Header/Navbar";
import ContentVideoMain from "../components/ContentVideoMain/ContentVideoMain";
import Footer from "../components/Footer";
import styles from "../styles/ContentVideo.module.css";

const ContentVideo = () => {
  return (
    <div className={styles["content-video"]}>
      <Navbar />
      <ContentVideoMain />
      <Footer />
    </div>
  );
};

export default ContentVideo;
