import axios from "axios";
import { API } from "../../../api";
import { UPLOAD_PROFILE_IMAGE_FAILED, UPLOAD_PROFILE_IMAGE_PENDING, UPLOAD_PROFILE_IMAGE_SUCCESS } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcGFvYm9ibzJAZ21haWwuY29tIiwiaWQiOjE1LCJpYXQiOjE2NDU0Nzc4OTAsImV4cCI6MTY0NTU2NDI5MH0.jGiD9nWat-j2V-drbj7LFITUD6M-Tfy6dAM7Cf1QlQU";

export const uploadImageAction = (data) => {
  return (dispatch) => {
    dispatch({ type: UPLOAD_PROFILE_IMAGE_PENDING });
    axios
      .put(API + "api/v1/user/upload", { image: data }, { headers: { Authorization: "Bearer " + temporaryToken } })
      .then((res) => {
        console.log(res);
        dispatch({ type: UPLOAD_PROFILE_IMAGE_SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: UPLOAD_PROFILE_IMAGE_FAILED });
      });
  };
};
