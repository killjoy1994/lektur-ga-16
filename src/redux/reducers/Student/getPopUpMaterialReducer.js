import { CLOSE_POP_UP_MATERIAL, GET_POP_UP_MATERIAL_FAILED, GET_POP_UP_MATERIAL_REQUEST, GET_POP_UP_MATERIAL_SUCCESS } from "../../types";

const initalState = {
  materialList: [],
  isLoading: false,
};

const getPopUpMaterialReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_POP_UP_MATERIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POP_UP_MATERIAL_SUCCESS:
      //sort payload data
      action.payload.sort((a, b) => {
        return a.title[18] - b.title[18];
      });
      
      return {
        ...state,
        materialList: [...action.payload],
        isLoading: false,
      };
    case GET_POP_UP_MATERIAL_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getPopUpMaterialReducer;
