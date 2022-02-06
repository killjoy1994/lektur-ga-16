import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import styles from "../../styles/ContentVideoMain.module.css";

const ContentVideoMain = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href="#" active>
            React Crash Cource
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Lesson #1 : What is React?</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className={styles.title}>Lesson #1 : What is React?</h1>
        <div className={styles["course-wrapper"]}>
          <section className={styles.content}></section>
          <aside className={styles.aside}></aside>
        </div>
      </div>
    </main>
  );
};

export default ContentVideoMain;
