import axios from "axios";
import { API } from "../../../api";

import { GET_STUDENT_COURSE, POST_ENROLL_COURSE } from "../../types";

const token = localStorage.getItem("token");

export const postEnrollCourseAction = (id) => {
  return (dispatch) => {
    axios
      .post(API + `api/v1/student/enroll?courseId=${id}`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch({
          type: POST_ENROLL_COURSE,
          payload: res.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getEnrolledCoursesAction = (token) => {
  return (dispatch) => {
    axios
      .get(API + "api/v1/student/content/unlocked/fetch", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({ type: GET_STUDENT_COURSE, payload: res.data.result });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
