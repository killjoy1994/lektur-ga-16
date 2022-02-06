import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactPlayer from "react-player";

import styles from "../../styles/ContentVideoMain.module.css";
import playBlue from "../../assests/play-blue.svg";
import playWhite from "../../assests/play-white.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";
import check from "../../assests/green-check.svg";

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
          <aside className={styles.aside}>
            <div className={styles["content-list"]}>
              <h2>Content</h2>
              <ul>
                <li className={styles.playing}>
                  <span>
                    <img src={playBlue} alt="on play" />
                  </span>
                  Lesson #1: What is React
                </li>
                <li>
                  <span>
                    <img src={play} alt="play" />
                  </span>
                  Lesson #2: Create React App
                </li>
                <li>
                  <span>
                    <img src={play} alt="play" />
                  </span>
                  Lesson #3: Css in Reset
                </li>
                <li className={styles.lock}>
                  <span>
                    <img src={lock} alt="lock" />
                  </span>
                  Lesson #4: Lorem Ipsum
                </li>
                <li className={styles.lock}>
                  <span>
                    <img src={lock} alt="lock" />
                  </span>
                  Lesson #5: Lorem Ipsum
                </li>
                <li className={styles.lock}>
                  <span>
                    <img src={lock} alt="lock" />
                  </span>
                  Lesson #6: Lorem Ipsum
                </li>
              </ul>
            </div>
            <div className={styles["read-materials"]}>
              <h2>What’s Next?</h2>
              <div class="check-box-form">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Read course material : <a href="#">React and Open Source.pdf</a>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Read course material : <a href="#">React and Open Source 2.pdf</a>
                  </label>
                </div>
              </div>
              <button className={styles["btn-aside"]}>
                <img src={playWhite} alt="next button" />
                Next Lesson: Create React App
              </button>
            </div>
          </aside>
        </div>
        {/* Course Video And Play list end*/}
      </div>
    </main>
  );
};

export default ContentVideoMain;
