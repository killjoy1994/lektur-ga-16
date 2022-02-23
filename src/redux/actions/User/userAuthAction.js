import { USER_SIGNUP } from "../../types"

export const userSignupAction = (data) => {
    return {
        type : USER_SIGNUP,
        payload : data
    }
}