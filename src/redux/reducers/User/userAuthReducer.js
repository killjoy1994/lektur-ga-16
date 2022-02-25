import { USER_SIGNIN, USER_SIGNUP, USER_LOGOUT } from "../../types"

let token = localStorage.getItem("token")
// console.log(token);
const initialState = {
    isAuth : token ? true : false,
    users : {},
}

export const userAuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SIGNUP :
            return {
                ...state,
                users : action.payload
            }
        case USER_SIGNIN :
            return {
                ...state,
                users : action.payload,
                // isAuth: true
                
            }
        case USER_LOGOUT :
            return {
                ...state,
                isAuth: localStorage.removeItem("token")
            }
        default:
            return state
    }
}