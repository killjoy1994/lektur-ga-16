import { combineReducers } from "redux";
import searchCourseReducer from "./Courses/searchCourseReducer";
import { getCoursesReducer } from "./Courses/getCoursesReducer";
import getCourseDetailReducer from "./Courses/getCourseDetailReducer";
import enrollCourseReducer from "./Courses/enrollCourseReducer";
import getUserProfileReducer from "./User/getUserProfileReducer";
import { updateUserProfileReducer } from "./User/updateUserProfile";
import getPopUpMaterialReducer from "./Student/getPopUpMaterialReducer";
import getPopUpContentReducer from "./Student/getPopUpContentReducer";
import { userAuthReducer } from "./User/userAuthReducer";
import getContentReducer from "./Content/getContentReducer";

const rootReducer = combineReducers({
  searchCourses: searchCourseReducer,
  courses: getCoursesReducer,
  courseDetail: getCourseDetailReducer,
  enrollCourse: enrollCourseReducer,
  userProfile: getUserProfileReducer,
  updateUserProfile: updateUserProfileReducer,
  popUpMaterials: getPopUpMaterialReducer,
  popUpContents: getPopUpContentReducer,
  userAuth: userAuthReducer,
  getContent: getContentReducer,
});

export default rootReducer;
