import axios from "axios";
import { API } from "../../../api";

import { GET_STUDENT_COURSE, POST_ENROLL_COURSE } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYmFndXNuQGdtYWlsLmNvbSIsImlhdCI6MTY0NTUzOTMyMSwiZXhwIjoxNjQ1NjI1NzIxfQ.guh0ffFOnAom4amJKp0WRiNMuvCjQlFz-s1tMB0g0qE";

export const postEnrollCourseAction = (id) => {
  return (dispatch) => {
    axios
      .post(API + `api/v1/student/enroll?courseId=${id}`, null, {
        headers: { Authorization: "Bearer " + temporaryToken },
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

export const getEnrolledCoursesAction = () => {
  return (dispatch) => {
    axios.get(API + "api/v1/student/content/unlocked/fetch", {
      headers: {
        Authorization: "Bearer " + temporaryToken,
      },
    })
    .then(res => {
      dispatch({type: GET_STUDENT_COURSE, payload: res.data.result})
    })
    .catch(error => {
      console.log(error)
    })
  };
};
