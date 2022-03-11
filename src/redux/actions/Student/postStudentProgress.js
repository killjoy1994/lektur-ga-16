import axios from "axios";
import { API } from "../../../api/index";
import * as actions from "../../types";

let token = localStorage.getItem("token");

const postStudentProgress = (courseId, contentId) => {
  return (dispatch) => {
    dispatch({ type: actions.POST_STUDENT_PROGRESS_REQUEST });
    axios
      .post(`${API}api/v1/student/content/unlocked/create?courseId=${courseId}&contentId=${contentId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        dispatch({ type: actions.POST_STUDENT_PROGRESS_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default postStudentProgress;
