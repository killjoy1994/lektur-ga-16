import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_PENDING, GET_USER_PROFILE_SUCCESS } from "../../types";

const initialState = {
  user: "",
  isLoading: false,
};

const getUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_PENDING:
      return {
        state,
        isLoading: true,
      };

    case GET_USER_PROFILE_SUCCESS:
      return {
        state,
        user: action.payload,
        isLoading: false,
      };
    case GET_USER_PROFILE_FAILED:
      return {
        state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getUserProfileReducer;
