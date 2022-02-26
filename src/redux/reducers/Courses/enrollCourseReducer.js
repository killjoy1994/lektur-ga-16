import { GET_STUDENT_COURSE } from "../../types";

const initialState = {
  enrolledCourses: [],
};

const enrollCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_COURSE:
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
        state,
        enrolledCourses: [...sortedData],
      };

    default:
      return state;
  }
};

export default enrollCourseReducer;
