import { GET_STUDENT_COURSE } from "../../types";

const initialState = {
  enrolledCourses: [],
};

const enrollCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_COURSE:
      return {
        state,
        enrolledCourses: [...action.payload],
      };

    default:
      return state;
  }
};

export default enrollCourseReducer;
