import * as actions from "../../types";

const initialState = {
  loading: false,
  detail: {},
  error: "",
};

const getCourseDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: payload,
      };
    case actions.GET_COURSE_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };


    default:
      return state;
  }
};

export default getCourseDetailReducer;
