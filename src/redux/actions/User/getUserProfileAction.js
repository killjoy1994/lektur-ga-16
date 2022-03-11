import { API } from "../../../api";
import axios from "axios";
import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_PENDING, GET_USER_PROFILE_SUCCESS } from "../../types";

export const getUserProfileAction = (token) => {
  return (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_PENDING });
    axios
      .get(API + "api/v1/user/profile", { headers: { Authorization: "Bearer " + token } })
      .then((res) => {
        // console.log(res.data.result);
        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: res.data.result });
        
      })
      .catch((error) => {
        // console.log(error);
        dispatch({ type: GET_USER_PROFILE_FAILED });
      });
  };
};
