import axios from 'axios'
import { API } from "../../../api";
import * as actions from "../../types";

export const getCourseDetail = (id) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_COURSE_DETAIL_REQUEST });
      //API  CALL
      axios
        .get(`${API}api/v1/course/fetch/detail?courseId=${id}`)
        .then((response) => {
          console.log(response.data.result);
          dispatch({ 
            type: actions.GET_COURSE_DETAIL_SUCCESS, 
            payload: response.data.result });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: actions.GET_COURSE_DETAIL_FAILED, payload: error })
        });
    };
  };