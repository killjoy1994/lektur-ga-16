import { GET_POP_UP_CONTENT_SUCCESS, GET_POP_UP_CONTENT_REQUEST, GET_POP_UP_CONTENT_FAILED } from "../../types";

const initialState = {
  content: {},
  loading: false,
};

const getPopUpContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POP_UP_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POP_UP_CONTENT_SUCCESS:
      //sort payload data
      action.payload.contents.sort((a, b) => {
        return a.id - b.id;
      });

      return {
        ...state,
        content: { ...action.payload },
        isLoading: false,
      };
    case GET_POP_UP_CONTENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getPopUpContentReducer;
