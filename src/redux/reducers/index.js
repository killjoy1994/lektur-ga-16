import { combineReducers } from "redux";
import coursesReducer from "./CoursesReducer";

const rootReducer = combineReducers({
    course: coursesReducer,
});

export default rootReducer;
