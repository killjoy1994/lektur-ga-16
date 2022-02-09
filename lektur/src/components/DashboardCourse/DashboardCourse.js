import React from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";

import styles from "../../styles/DashboardCourse.module.css";
import playWhite from "../../assests/play-white.svg";

const DashboardCourse = () => {
  const [edit, setEdit] = useState(false);

  //   Handle submit on profile change
  const submitHandler = (e) => {
    e.preventDefault();

    setEdit(false);
  };

  /* Conditional render for User Profile start */
  let content;
  const userData = (
    <div className={styles["user-data"]}>
      <p className={styles.name}>John Doe</p>
      <p className={styles.email}>johndoe@gmail.com</p>
      <button
        onClick={() => {
          setEdit(true);
        }}
        className={styles["btn-edit"]}
      >
        Edit Profile
      </button>
    </div>
  );
  const userForm = (
    <form className={styles["user-form"]} onSubmit={submitHandler}>
      <label className={styles["form-control"]}>
        Name<span style={{ color: "red" }}>*</span>
        <input type="text" name="name" autoComplete="off" required />
      </label>
      <label className={styles["form-control"]}>
        Email<span style={{ color: "red" }}>*</span>
        <input type="email" name="email" autoComplete="off" required />
      </label>
      <button type="submit" className={styles["user-btn"]}>
        Save Changes
      </button>
    </form>
  );

  content = !edit ? userData : userForm;
  /* Conditional render for User Profile end */

  return (
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles["left-box"]}>
          <div className={styles["user-profile"]}>
            <div className={styles["img-wrapper"]}>
              <img src="https://cdn.kibrispdr.org/data/foto-seulgi-red-velvet-3.jpg" alt="kang seulgi" />
            </div>
            {content}
          </div>
        </div>
        <div className={styles["right-box"]}>
          <div className={styles["right-box-header"]}>
            <h3>Courses</h3>
            <h3>Assesment</h3>
          </div>
          <div className={styles["right-box-body"]}>
            <div className={styles["course-control"]}>
              <div className={styles["course-control-left"]}>
                <div className={styles["img-course-wrapper"]}>
                  <img src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2016/09/reactjs.png" alt="course" />
                </div>
                <div className={styles["course-detail"]}>
                  <h3>React Crash Course</h3>
                  <p>By Traversy Media</p>
                  <a href="#">See course materials</a>
                </div>
              </div>
              <div className={styles["course-control-right"]}>
                <ProgressBar now={20} className={styles.progress} />
                <p className={styles["completed-task"]}>2/15 Course Complete</p>
                <button className={styles["progress-btn"]}>
                  <img src={playWhite} alt="play button" /> Lesson #9: Lorem Ipsum
                </button>
              </div>
            </div>
            <div class={styles["course-control"]}>
              <div className={styles["course-control-left"]}>
                <div className={styles["img-course-wrapper"]}>
                  <img src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2016/09/reactjs.png" alt="course" />
                </div>
                <div className={styles["course-detail"]}>
                  <h3>React Crash Course</h3>
                  <p>By Traversy Media</p>
                </div>
              </div>
              <div className={styles["course-control-right"]}>
                <p className={styles.approval}>Waiting Approval</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardCourse;
