import axios from "axios";
import { API } from "../../../api";

import {
  GET_STUDENT_COURSE_FAILED,
  GET_STUDENT_COURSE_REQUEST,
  GET_STUDENT_COURSE_SUCCESS,
  POST_ENROLL_COURSE_FAILED,
  POST_ENROLL_COURSE_REQUEST,
  POST_ENROLL_COURSE_SUCCESS,
} from "../../types";

export const postEnrollCourseAction = (id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: POST_ENROLL_COURSE_REQUEST });
    axios
      .post(API + `api/v1/student/enroll?courseId=${id}`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch({
          type: POST_ENROLL_COURSE_SUCCESS,
          payload: res.data.result,
        });
      })
      .catch((error) => {
        dispatch({ type: POST_ENROLL_COURSE_FAILED, payload: error.message });
      });
  };
};

export const getEnrolledCoursesAction = (token) => {
  return (dispatch) => {
    dispatch({ type: GET_STUDENT_COURSE_REQUEST });
    axios
      .get(API + "api/v1/student/content/unlocked/fetch", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({ type: GET_STUDENT_COURSE_SUCCESS, payload: res.data.result });
      })
      .catch((error) => {
        // console.log(error);
        dispatch({ type: GET_STUDENT_COURSE_FAILED, payload: error });
      });
  };
};
