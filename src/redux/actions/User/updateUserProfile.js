import axios from "axios";
import { API } from "../../../api";
import { UPDATE_USER, UPLOAD_PROFILE_IMAGE_FAILED, UPLOAD_PROFILE_IMAGE_PENDING, UPLOAD_PROFILE_IMAGE_SUCCESS } from "../../types";

let token = localStorage.getItem("token");

export const uploadImageAction = (data) => {
  const formData = new FormData();
  formData.append("image", data);

  return (dispatch) => {
    dispatch({ type: UPLOAD_PROFILE_IMAGE_PENDING });
    axios
      .put(API + "api/v1/user/upload", formData, { headers: { Authorization: "Bearer " + token, "Content-Type": "multipart/form-data" } })
      .then((res) => {
        console.log(res);
        dispatch({ type: UPLOAD_PROFILE_IMAGE_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: UPLOAD_PROFILE_IMAGE_FAILED, payload: error });
        console.log(error);
      });
  };
};

export const updateProfileAction = (name, email) => {
  return (dispatch) => {
    axios
      .put(
        API + "api/v1/user/edit",
        { fullName: name, email: email },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch({ type: UPDATE_USER });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
