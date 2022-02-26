import * as actions from "../../types/index";

const initialState = {
  content: null,
  isLoading: true,
};

const getContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.payload,
        isLoading: false,
      };
    case actions.GET_CONTENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getContentReducer;
