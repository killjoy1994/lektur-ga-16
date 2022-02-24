import * as actions from "../../types";

const initialState = {
  isLoading: false,
  detail: [],
  error: "",
  relatedCourse: [],
};

const getCourseDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: payload,
      };
    case actions.GET_COURSE_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case actions.RELATED_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        
      };
    case actions.RELATED_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        relatedCourse: payload
      };
    case actions.RELATED_COURSE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getCourseDetailReducer;
