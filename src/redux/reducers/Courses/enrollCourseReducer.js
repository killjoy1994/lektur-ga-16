import { GET_STUDENT_COURSE_FAILED, GET_STUDENT_COURSE_REQUEST, GET_STUDENT_COURSE_SUCCESS } from "../../types";

const initialState = {
  isPostLoading: false,
  isGetLoading: false,
  enrolledCourses: [],
};

const enrollCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        isGetLoading: true,
      };
    case GET_STUDENT_COURSE_SUCCESS:
      // Sort contents data
      const sortedData = action.payload.map((data) => {
        data.contents.sort((a, b) => {
          let curr = a.id,
            next = b.id;
          return curr - next;
        });
        return data;
      });

      return {
        ...state,
        enrolledCourses: [...sortedData],
        isGetLoading: true,
      };

      case GET_STUDENT_COURSE_FAILED:
        return {
          ...state,
          
        }

    default:
      return state;
  }
};

export default enrollCourseReducer;
