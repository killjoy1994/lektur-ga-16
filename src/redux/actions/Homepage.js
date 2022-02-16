import axios from "axios";
import Feedback from "react-bootstrap/esm/Feedback";

import { API } from "../../api";
import { FETCH_COURSES_COMPLETE, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILED } from "../types";

export const getCourses = () => {
    return (dispatch) => {
        dispatch(FETCH_COURSES_REQUEST);
        axios.get(`${API}/api/v1/course/fetch`)
        .then((response) => dispatch({ type: FETCH_COURSES_REQUEST, payload: response.result }))
        .catch(error => dispatch({type: FETCH_COURSES_FAILED, payload: error}))
      }
};
