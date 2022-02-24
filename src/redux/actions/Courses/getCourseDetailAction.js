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
          dispatch({ 
            type: actions.GET_COURSE_DETAIL_SUCCESS, 
            payload: response.data.result });
        })
        .catch((error) => {
            dispatch({ type: actions.GET_COURSE_DETAIL_FAILED, payload: error })
        });
    };
  };

  export const getRelatedCourse = () => {
    return (dispatch) => {
      dispatch({ type: actions.RELATED_COURSE_REQUEST });
      //API CALL
      axios
        .get(`${API}api/v1/course/fetch?limit=4`)
        .then((response) => {
          dispatch({
            type: actions.RELATED_COURSE_SUCCESS,
            payload: response.data.result
          })
        })
        .catch((error) => {
          dispatch({
            type: actions.RELATED_COURSE_FAILED,
            payload: error
          })
        });
    };
  };