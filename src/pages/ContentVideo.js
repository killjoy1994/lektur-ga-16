import React from "react";

import NavbarComponent from "../components/Header/NavbarComponent";
import ContentVideoMain from "../components/ContentVideoMain/ContentVideoMain";
import Footer from "../components/Footer";
import styles from "../styles/ContentVideo.module.css";

const ContentVideo = () => {
  return (
    <div className={styles["content-video"]}>
      <NavbarComponent />
      <ContentVideoMain />
      <Footer />
    </div>
  );
};

export default ContentVideo;
