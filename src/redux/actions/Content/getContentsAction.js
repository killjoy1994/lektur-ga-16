import axios from "axios";
import { API } from "../../../api";

import * as actions from "../../types";

const getContentsAction = () => {
  return (dispatch) => {
    dispatch({ type: actions.FETCH_CONTENTS_PENDING });
    axios
      .get(`${API}api/v1/content/fetch`)
      .then((res) => {
        console.log(res);
        dispatch({ type: actions.FETCH_CONTENTS_SUCCESS, payload: res.data.result });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.FETCH_CONTENTS_FAILED, payload: err });
      });
  };
};


export default getContentsAction;