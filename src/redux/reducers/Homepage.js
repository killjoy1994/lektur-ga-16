import { FETCH_COURSES_REQUEST, FETCH_COURSES_COMPLETE, FETCH_COURSES_FAILED } from "../types";

const initialState = {
  homepageCourses: [],
  isLoading: false,
  error: "",
};

export const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COURSES_COMPLETE:
      console.log(action.payload);
      return {
        ...state,
        homepageCourses: action.payload,
        isLoading: false,
      };
    case FETCH_COURSES_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
