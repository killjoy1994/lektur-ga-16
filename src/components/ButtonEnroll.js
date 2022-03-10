import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCoursesAction, postEnrollCourseAction } from "../redux/actions/Courses/enrollCourseAction";
import Swal from "sweetalert2";

import styles from "../styles/ButtonEnroll.module.css";
import { useNavigate } from "react-router-dom";

function ButtonEnroll({ setPopUpDetail }) {
  const { detail } = useSelector((state) => state.courseDetail);
  const { enrolledCourses } = useSelector((state) => state.enrollCourse);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get user token
  let token = localStorage.getItem("token");
  let tokenGoogle = localStorage.getItem("loginGoogle");
  let tokenFb = localStorage.getItem("loginFacebook");
  let isToken = token || tokenGoogle || tokenFb;
  useEffect(() => {
    if (isToken !== null) {
      dispatch(getEnrolledCoursesAction(isToken));
    }
  }, [dispatch]);

  //cek all course enroll
  let info = enrolledCourses.map((course) => course);
  let infoContent = info.filter((content) => content.id === detail.id);
  //cek approve from teacher
  const approveTeacher = infoContent[0]?.status.status;

  if (isToken === null || infoContent.length === 0) {
    return (
      <button
        className={styles.btn_detail}
        onClick={() => {
          if (isToken !== null) {
            setPopUpDetail(true);
            dispatch(postEnrollCourseAction(detail?.id));
          } else {
            Swal.fire({
              icon: "info",
              title: "Opsss...",
              text: "Log In and Start Learning!",
            }).then(({ isConfirmed }) => {
              if (isConfirmed) {
                navigate("/login");
              }
            });
          }
        }}
      >
        ENROLL NOW
      </button>
    );
  } else if (approveTeacher === 0 && isToken !== null) {
    return (
      <button className={styles.btn_detail_waiting} disabled>
        waiting approve. . .
      </button>
    );
  } else if (approveTeacher !== 0 && isToken !== null) {
    return <button className={styles.btn_detail_enroll}>ENROLL NOW</button>;
  }
}

export default ButtonEnroll;
