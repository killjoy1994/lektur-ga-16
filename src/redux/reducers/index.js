import { combineReducers } from "redux";
import searchCourseReducer from "./Courses/searchCourseReducer";
import { coursesReducer } from "./Courses/getCoursesReducer";
import getCourseDetailReducer from "./Courses/getCourseDetailReducer";

const rootReducer = combineReducers({
  searchCourses: searchCourseReducer,
  courses: coursesReducer,
  courseDetail: getCourseDetailReducer,
});

export default rootReducer;
