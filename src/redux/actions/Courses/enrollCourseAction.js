import axios from "axios";
import { API } from "../../../api";

import { POST_ENROLL_COURSE } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoicGFwYW9ib2JvMkBnbWFpbC5jb20iLCJpYXQiOjE2NDU0NzA4NzAsImV4cCI6MTY0NTU1NzI3MH0.gDr26LYFTSklDbRbxLQUJcY5hy55kAtMhspSF4Lyh00";

export const enrollCourseAction = (id) => {
  return (dispatch) => {
    axios
      .post(API + `api/v1/student/enroll?courseId=${id}`, null, {
        headers: { Authorization: "Bearer " + temporaryToken },
      })
      .then((res) => {
        dispatch({
          type: POST_ENROLL_COURSE, payload: res.data.result
        })
      }).catch(error => {
        console.log(error)
      })
  };
};
