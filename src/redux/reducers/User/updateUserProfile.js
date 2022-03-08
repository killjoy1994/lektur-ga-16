import { UPDATE_USER, UPLOAD_PROFILE_IMAGE_FAILED, UPLOAD_PROFILE_IMAGE_PENDING, UPLOAD_PROFILE_IMAGE_SUCCESS } from "../../types";

const initialState = {
  isLoading: false,
  status: "",
  error: "",
};

export const updateUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE_IMAGE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
      };
    case UPLOAD_PROFILE_IMAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
