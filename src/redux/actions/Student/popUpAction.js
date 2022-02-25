import axios from "axios";
import { API } from "../../../api";
import {
  GET_POP_UP_MATERIAL_FAILED,
  GET_POP_UP_MATERIAL_REQUEST,
  GET_POP_UP_MATERIAL_SUCCESS,
  GET_POP_UP_CONTENT_REQUEST,
  GET_POP_UP_CONTENT_SUCCESS,
  GET_POP_UP_CONTENT_FAILED,
} from "../../types";

const token = localStorage.getItem("token");

export const getPopUpMaterialAction = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_POP_UP_MATERIAL_REQUEST });
    axios
      .get(API + "api/v1/student/popup/material?courseId=" + data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({ type: GET_POP_UP_MATERIAL_SUCCESS, payload: res.data.result.contents });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_POP_UP_MATERIAL_FAILED });
      });
  };
};

export const getPopUpContentAction = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_POP_UP_CONTENT_REQUEST });
    axios
      .get(API + "api/v1/student/popup/content?courseId=" + data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res)
        dispatch({ type: GET_POP_UP_CONTENT_SUCCESS, payload: res.data.result });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_POP_UP_CONTENT_FAILED });
      });
  };
};
