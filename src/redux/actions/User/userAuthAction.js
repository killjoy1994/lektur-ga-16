import { USER_SIGNUP, USER_SIGNIN, USER_LOGOUT } from "../../types"

export const userSignupAction = (data) => {
    return {
        type : USER_SIGNUP,
        payload : data
    }
}

export const userSigninAction = (data) => {
    return {
        type : USER_SIGNIN,
        payload : data
    }
}

export const userLogOut = () => {
  
    return {
      type: USER_LOGOUT,
    };
  };