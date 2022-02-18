import { combineReducers } from "redux";
import SearchCourseReducer from "./Courses/SearchCourseReducer";
import { coursesReducer } from "./Courses/getCoursesReducer";

const rootReducer = combineReducers({
  searchCourses: SearchCourseReducer,
  courses: coursesReducer,
});

export default rootReducer;
