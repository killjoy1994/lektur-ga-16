import { combineReducers } from "redux";
import searchCourseReducer from "./Courses/searchCourseReducer";
import { getCoursesReducer } from "./Courses/getCoursesReducer";
import getCourseDetailReducer from "./Courses/getCourseDetailReducer";
import enrollCourseReducer from "./Courses/enrollCourseReducer";
import getUserProfileReducer from "./User/getUserProfileReducer";
import { updateUserProfileReducer } from "./User/updateUserProfile";
import getPopUpMaterialReducer from "./Student/getPopUpMaterialReducer";

const rootReducer = combineReducers({
  searchCourses: searchCourseReducer,
  courses: getCoursesReducer,
  courseDetail: getCourseDetailReducer,
  enrollCourse: enrollCourseReducer,
  userProfile: getUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  popUpMaterial: getPopUpMaterialReducer,
});

export default rootReducer;
