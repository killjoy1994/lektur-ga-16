import { USER_SIGNIN, USER_SIGNUP } from "../../types";

let token = localStorage.getItem("token");
let user = localStorage.getItem("user");
console.log(token);
const initialState = {
  isAuth: token ? true : false,
  user: user ? JSON.parse(user) : null,
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGNIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
