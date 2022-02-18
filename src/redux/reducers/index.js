import { combineReducers } from "redux";

import { coursesReducer } from "./Courses/getCoursesReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export default rootReducer;
