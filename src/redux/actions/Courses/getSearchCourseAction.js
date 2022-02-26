import { API } from "../../../api";
import * as actions from "../../types";
import axios from "axios";

export const getSearchCourse = (input) => {
  console.log(input);
  return (dispatch) => {
    dispatch({ type: actions.SEARCH_COURSE_REQUEST });
    //API CALL
    axios
      .get(`${API}api/v1/course/fetch?keyword=${input}`)
      .then((response) => {
        dispatch({
          type: actions.SEARCH_COURSE_SUCCESS,
          payload: response.data.result,
          input: input,
        });
      })
      .catch((err) => {
        dispatch({
          type: actions.SEARCH_COURSE_FAILED,
          payload: err,
          input: input,
        });
      });
  };
};


