import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactPlayer from "react-player";

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
        {/* Course Video And Play list start*/}
        <div className={styles["course-wrapper"]}>
          <section className={styles.content}>
            <ReactPlayer controls url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width="100%" height="450px" playing={true} />
            <div className={styles.description}>
              <h2>Description</h2>
              <p>
                Nascetur consequat quam tellus sed convallis amet, nunc. Venenatis, eget faucibus iaculis facilisi pellentesque eleifend mattis vel.
                Nunc euismod morbi lectus aliquam pretium, pharetra, tellus orci. Lobortis at nulla dictum risus amet. Nunc dolor sit vitae arcu
                facilisis eu. Tortor, turpis arcu in est. Ullamcorper fringilla ut tempus nulla dolor lorem proin porta neque. Neque eu lorem ultrices
                id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet. Vitae sodales
                rhoncus, et ut ut. Amet, porttitor adipiscing nullam mauris. Lobortis interdum imperdiet mauris pharetra risus proin etiam est.
              </p>
            </div>
          </section>
          <aside className={styles.aside}></aside>
        </div>
        {/* Course Video And Play list start*/}
      </div>
    </main>
  );
};

export default ContentVideoMain;
