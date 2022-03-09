import { API } from "../../../api";
import axios from "axios";
import * as actions from "../../types";

export const getAssessment = (id) => {
    //get user token
  let token = localStorage.getItem("token");
  let tokenGoogle = localStorage.getItem("loginGoogle");
  let tokenFb = localStorage.getItem("loginFacebook");
  let isToken = token || tokenGoogle || tokenFb;
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
