import { UPDATE_USER, UPLOAD_PROFILE_IMAGE } from "../../types";

const initialState = {
  isLoading: false,
  status: "",
};

export const updateUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE_IMAGE:
      return {
        ...state,
        status: "success",
      };
    case UPDATE_USER:
      return {
        ...state,
        status: "success",
      };
    default:
      return state;
  }
};
