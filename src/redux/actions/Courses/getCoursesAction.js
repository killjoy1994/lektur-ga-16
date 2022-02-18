import axios from "axios";

import { API } from "../../../api";
import { FETCH_COURSES_COMPLETE, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILED } from "../../types";

export const getCoursesAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });
    axios
      .get("https://lektur-apps.herokuapp.com/api/v1/course/fetch")
      .then((response) => {
        // console.log(response);
        dispatch({ type: FETCH_COURSES_COMPLETE, payload: response.data.result });
      })
      .catch((error) => dispatch({ type: FETCH_COURSES_FAILED, payload: error }));
  };
};
