import { USER_SIGNUP } from "../../types"

let token = localStorage.getItem("token") 

const initialState = {
    isAuth : token ? true : false,
    user : null
}

export const userAuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_SIGNUP :
            return {
                ...state,
                user : action.payload
            }
        default:
            return state
    }
}