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

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhZ3VzMTIzQGdtYWlsLmNvbSIsImlkIjoyMywiaWF0IjoxNjQ1NjY0MDc1LCJleHAiOjE2NDU3NTA0NzV9.4KoUBVWEW2H_AFLlUmbOcXCVhcO20-45eYTdMUvISFw";

export const getPopUpMaterialAction = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_POP_UP_MATERIAL_REQUEST });
    axios
      .get(API + "api/v1/student/popup/material?courseId=" + data, {
        headers: {
          Authorization: "Bearer " + temporaryToken,
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
          Authorization: "Bearer " + temporaryToken,
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
