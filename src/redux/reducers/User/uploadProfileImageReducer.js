import { UPLOAD_PROFILE_IMAGE_FAILED, UPLOAD_PROFILE_IMAGE_PENDING, UPLOAD_PROFILE_IMAGE_SUCCESS } from "../../types";

const initialState = {
  isLoading: false,
};

const uploadImageProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE_IMAGE_PENDING:
      return {
        state,
        isLoading: true,
      };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        state,
        isLoading: false,
      };
    case UPLOAD_PROFILE_IMAGE_FAILED:
      return {
        state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default uploadImageProfileReducer;
