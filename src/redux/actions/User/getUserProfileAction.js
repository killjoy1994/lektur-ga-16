import { API } from "../../../api";
import axios from "axios";
import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_PENDING, GET_USER_PROFILE_SUCCESS } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYmFndXNuQGdtYWlsLmNvbSIsImlhdCI6MTY0NTUzOTMyMSwiZXhwIjoxNjQ1NjI1NzIxfQ.guh0ffFOnAom4amJKp0WRiNMuvCjQlFz-s1tMB0g0qE";

export const getUserProfileAction = () => {
  return (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_PENDING });
    axios
      .get(API + "api/v1/user/profile", { headers: { Authorization: "Bearer " + temporaryToken } })
      .then((res) => {
        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: res.data.result });
      })
      .catch((error) => {
        console.log(error);
        dispatch({type: GET_USER_PROFILE_FAILED})
      });
  };
};
