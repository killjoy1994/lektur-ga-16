import { API } from "../../../api";
import axios from "axios";
import * as actions from "../../types";

//get user token
let token = localStorage.getItem("token");
let tokenGoogle = localStorage.getItem("loginGoogle");
let tokenFb = localStorage.getItem("loginFacebook");
let isToken = token || tokenGoogle || tokenFb;

export const getAssessment = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_ASSESSMET_REQUEST });
    //API CALL
    axios
      .get(`${API}api/v1/assessment/fetch?courseId=${id}`, {
        headers: {
          Authorization: "Bearer " + isToken,
        },
      })
      .then((res) => {
        // console.log(res.data.result);
        dispatch({ type: actions.GET_ASSESSMET_SUCCESS, payload: res.data.result});
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.GET_ASSESSMET_FAILED, payload: error });
      });
  };
};

export const getAssessmentAnswer = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_ASSESSMET_ANSWER_REQUEST });
    //API CALL
    axios
      .get(`${API}api/v1/assessment/fetch/key?courseId=${id}`, {
        headers: {
          Authorization: "Bearer " + isToken,
        },
      })
      .then((res) => {
        // console.log(res.data.result);
        dispatch({ type: actions.GET_ASSESSMET_ANSWER_SUCCESS, 
          payload: res.data.result
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.GET_ASSESSMET_ANSWER_FAILED, payload: error });
      });
  };
};
