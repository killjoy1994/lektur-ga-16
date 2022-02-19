import { API } from "../../../api";
import * as actions from "../../types";
import axios from "axios";

export const getSearchCourse = (input) => {
    console.log(input);
  return (dispatch) => {
    axios
      .get(`${API}api/v1/course/fetch?keyword=${input}`)
      .then((response) => {
        console.log(response.data.result);
        dispatch({
          type: actions.SEARCH_COURSE,
          payload: response.data.result,
          input: input
        });
      })
      .catch((err) => {
        console.log('error:',err.response.data.message);
      });
  };
};
