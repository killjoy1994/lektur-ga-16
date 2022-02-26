import axios from "axios";
import { API } from "../../../api";
import * as actions from "../../types";

let token = localStorage.getItem("token");

export const getContentAction = (data) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_CONTENT_PENDING });
    axios
      .get(`${API}api/v1/content/fetch/detail?contentId=${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({ type: actions.GET_CONTENT_SUCCESS, payload: response.data.result });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_CONTENT_FAILED, payload: error });
      });
  };
};
