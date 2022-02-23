import { API } from "../../../api";
import axios from "axios";
import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_PENDING, GET_USER_PROFILE_SUCCESS } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5dTExMUBnbWFpbC5jb20iLCJpZCI6MjMsImlhdCI6MTY0NTYzODU0NywiZXhwIjoxNjQ1NzI0OTQ3fQ.XsvXzx_FHUo-ubpONyspbn8kThLknfQiu-SlLXB6pOY";

export const getUserProfileAction = () => {
  return (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_PENDING });
    axios
      .get(API + "api/v1/user/profile", { headers: { Authorization: "Bearer " + temporaryToken } })
      .then((res) => {
        console.log(res)
        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: res.data.result });
      })
      .catch((error) => {
        console.log(error);
        dispatch({type: GET_USER_PROFILE_FAILED})
      });
  };
};
