import * as actions from "../../types";

const initialState = {
  isLoading: false,
  assessment: [],
  assessmentAnswer:[],
  error: "",
};

const assessmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_ASSESSMET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_ASSESSMET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        assessment: payload,
      };
    case actions.GET_ASSESSMET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case actions.GET_ASSESSMET_ANSWER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_ASSESSMET_ANSWER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        assessmentAnswer: payload,
      };
    case actions.GET_ASSESSMET_ANSWER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default assessmentReducer;
