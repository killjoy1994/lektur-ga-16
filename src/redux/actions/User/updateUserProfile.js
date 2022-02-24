import axios from "axios";
import { API } from "../../../api";
import { UPDATE_USER, UPLOAD_PROFILE_IMAGE } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhZ3VzMTIzQGdtYWlsLmNvbSIsImlkIjoyMywiaWF0IjoxNjQ1NjY0MDc1LCJleHAiOjE2NDU3NTA0NzV9.4KoUBVWEW2H_AFLlUmbOcXCVhcO20-45eYTdMUvISFw";

export const uploadImageAction = (data) => {
  console.log("Upload Action data: ", data)
  const formData = new FormData();
  formData.append("image", data);
  
  return (dispatch) => {
    axios
      .put(
        API + "api/v1/user/upload",
        formData,
        { headers: { Authorization: "Bearer " + temporaryToken, "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: UPLOAD_PROFILE_IMAGE });
      })
      .catch((error) => {
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
            Authorization: "Bearer " + temporaryToken,
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
