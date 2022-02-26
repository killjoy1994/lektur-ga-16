import * as actions from "../../types";

const initialState = {
  contentList: [],
  isLoading: true,
  error: "",
};

const getContentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CONTENTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_CONTENTS_SUCCESS:
      return {
        ...state,
        contentList: [...action.payload],
        isLoading: false,
      };
    case actions.FETCH_CONTENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getContentsReducer;
