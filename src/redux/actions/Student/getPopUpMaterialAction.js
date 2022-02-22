import axios from "axios";
import { API } from "../../../api";
import { GET_POP_UP_MATERIAL_FAILED, GET_POP_UP_MATERIAL_REQUEST, GET_POP_UP_MATERIAL_SUCCESS } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYmFndXNuQGdtYWlsLmNvbSIsImlhdCI6MTY0NTUzOTMyMSwiZXhwIjoxNjQ1NjI1NzIxfQ.guh0ffFOnAom4amJKp0WRiNMuvCjQlFz-s1tMB0g0qE";

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
        console.log(res.data.result.contents);
        dispatch({ type: GET_POP_UP_MATERIAL_SUCCESS, payload: res.data.result.contents });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_POP_UP_MATERIAL_FAILED });
      });
  };
};
