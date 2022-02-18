import * as actions from '../types'


const initialState ={
    searchCourses : '',
}

const coursesReducer = (state = initialState, action)=>{
    const {type, payload}= action
    switch (type) {
        case actions.SEARCH_COURSE:
            return{
                ...state,
                searchCourses: payload
            }
            
            
            default:
        return state;
}
}

export default coursesReducer;