import { combineReducers } from "redux";

import { homepageReducer } from "./Homepage";

const rootReducer = combineReducers({
    homepage: homepageReducer
});

export default rootReducer;
