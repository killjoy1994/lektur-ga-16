import { USER_SIGNUP, USER_SIGNIN } from "../../types"

export const userSignupAction = (data) => {
    return {
        type : USER_SIGNUP,
        payload : data
    }
}

export const userSigninAction = (data) => {
    // console.log(data);
    return {
        type : USER_SIGNIN,
        payload : data
    }
}