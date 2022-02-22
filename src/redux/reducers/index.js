import { combineReducers } from "redux";
import searchCourseReducer from "./Courses/searchCourseReducer";
import { getCoursesReducer } from "./Courses/getCoursesReducer";
import getCourseDetailReducer from "./Courses/getCourseDetailReducer";
import  enrollCourseReducer  from "./Courses/enrollCourseReducer";
import getUserProfileReducer from "./User/getUserProfileReducer";
import uploadImageProfileReducer from "./User/uploadProfileImageReducer";

const rootReducer = combineReducers({
  searchCourses: searchCourseReducer,
  courses: getCoursesReducer,
  courseDetail: getCourseDetailReducer,
  enrollCourse: enrollCourseReducer,
  userProfile: getUserProfileReducer,
  uploadImageProfile: uploadImageProfileReducer,
});

export default rootReducer;
