import React from "react";
import { useState } from "react";
// import { ProgressBar } from "react-bootstrap";

import styles from "../../styles/DashboardCourse.module.css";
import playWhite from "../../assests/play-white.svg";
import editIcon from "../../assests/edit-icon-orange.svg";
import ContentModal from "../CourseModal/ContentModal";
import MaterialModal from "../CourseModal/MaterialModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEnrolledCoursesAction } from "../../redux/actions/Courses/enrollCourseAction";

const DashboardCourse = () => {
  const { enrolledCourses } = useSelector((state) => state.enrollCourse);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrolledCoursesAction());
  }, [dispatch]);

  const [edit, setEdit] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("courses");
  //show modal State
  const [showContentModal, setShowContentModal] = useState(false);
  const [showMaterialModal, setShowMaterialModal] = useState(false);

  // Modal handler
  const contentModalHandler = () => {
    setShowContentModal(true);
  };
  const closeContentModalHandler = (val) => {
    setShowContentModal(val);
  };

  const materialModalHandler = () => {
    setShowMaterialModal(true);
  };
  const closeMaterialModalHandler = (val) => {
    setShowMaterialModal(val);
  };

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

  /* Pas di bagian courses start */
  let courses = (
    <>
      <div className={styles["course-control"]}>
        <div className={styles["course-control-left"]}>
          <div className={styles["img-course-wrapper"]}>
            <img src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2016/09/reactjs.png" alt="course" />
          </div>
          <div className={styles["course-detail"]}>
            <h3>React Crash Course</h3>
            <p>By Traversy Media</p>
            <button onClick={materialModalHandler}>See course materials</button>
          </div>
        </div>
        <div className={styles["course-control-right"]}>
          {/* <ProgressBar now={20} className={styles.progress} /> */}
          <div className={styles.progress}>
            <div className={styles["progress-bar"]}></div>
          </div>
          <button onClick={contentModalHandler} className={styles["completed-task"]}>
            2/15 Course Complete
          </button>
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
    </>
  );

  /* Pas di bagian courses end */

  /* Pas di bagian assesment start*/
  let assessment = (
    <div className={styles["assessment-wrapper"]}>
      {/* Taken test start*/}
      <div className={styles["assessment-control"]}>
        <div className={styles.detail}>
          <h3 className={styles.title}>React Crash Course</h3>
          <p className={styles.author}>Traversy Media</p>
          <p className={styles.date}>Completed at: 28 January 2021 08:00pm</p>
        </div>
        <div className={styles.completed}>
          <p className={styles.number}>73%</p>
          <p className={styles["correct-amount"]}>11/15 Question Correct</p>
        </div>
      </div>
      <div className={styles["assessment-control"]}>
        <div className={styles.detail}>
          <h3 className={styles.title}>React Crash Course</h3>
          <p className={styles.author}>Traversy Media</p>
          <p className={styles.date}>Completed at: 28 January 2021 08:00pm</p>
        </div>
        <div className={styles.completed}>
          <p className={styles.number}>73%</p>
          <p className={styles["correct-amount"]}>11/15 Question Correct</p>
        </div>
      </div>
      {/* Taken test end */}

      {/* Untaken test start */}
      <div className={styles["assessment-control"]}>
        <div className={styles.detail}>
          <h3 className={styles.title}>Create Cinematic Music Video</h3>
          <p className={styles.author}>John Doe</p>
          <p className={styles.date}>Completed at: -</p>
        </div>
        <div className={styles.completed}>
          <p className={styles["correct-amount"]}>No result yet</p>
          <a href="#" className={styles["btn-take-test"]}>
            Take test
          </a>
        </div>
      </div>
      <div className={styles["assessment-control"]}>
        <div className={styles.detail}>
          <h3 className={styles.title}>Create Cinematic Music Video</h3>
          <p className={styles.author}>John Doe</p>
          <p className={styles.date}>Completed at: -</p>
        </div>
        <div className={styles.completed}>
          <p className={styles["correct-amount"]}>No result yet</p>
          <a href="#" className={styles["btn-take-test"]}>
            Take test
          </a>
        </div>
      </div>
      {/* Untaken test end */}
    </div>
  );

  /* Pas di bagian assessment end*/

  return (
    <>
      {console.log(enrolledCourses)}
      {showContentModal && <ContentModal closeModal={closeContentModalHandler} />}
      {showMaterialModal && <MaterialModal closeModal={closeMaterialModalHandler} />}
      <main className={styles.dashboard}>
        <div className={styles.container}>
          <div className={styles["left-box"]}>
            <div className={styles["user-profile"]}>
              <div className={styles["img-wrapper"]}>
                <img src="https://cdn.kibrispdr.org/data/foto-seulgi-red-velvet-3.jpg" alt="kang seulgi" className={styles["user-avatar"]} />
                {edit && <img src={editIcon} alt="edit icon" className={styles["edit-icon"]} />}
              </div>
              {content}
            </div>
          </div>
          <div className={styles["right-box"]}>
            <div className={styles["right-box-header"]}>
              <h3
                style={{ fontWeight: selectedTitle === "courses" ? "700" : "400" }}
                onClick={() => {
                  setSelectedTitle("courses");
                }}
              >
                Courses
              </h3>
              <h3
                style={{ fontWeight: selectedTitle === "assessment" ? "700" : "400" }}
                onClick={() => {
                  setSelectedTitle("assessment");
                }}
              >
                Assesment
              </h3>
            </div>
            <div className={styles["right-box-body"]}>{selectedTitle === "courses" ? courses : assessment}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardCourse;
