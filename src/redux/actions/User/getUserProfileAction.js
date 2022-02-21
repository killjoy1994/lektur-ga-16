import { API } from "../../../api";
import axios from "axios";
import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_PENDING, GET_USER_PROFILE_SUCCESS } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcGFvYm9ibzJAZ21haWwuY29tIiwiaWQiOjE1LCJpYXQiOjE2NDU0Nzc4OTAsImV4cCI6MTY0NTU2NDI5MH0.jGiD9nWat-j2V-drbj7LFITUD6M-Tfy6dAM7Cf1QlQU";

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
