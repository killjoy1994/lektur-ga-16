import * as actions from '../../types'


const initialState ={
    searchCourses : [],
    input: ''
}

const searchCourseReducer = (state = initialState, action)=>{
    const {type, payload, input}= action
    switch (type) {
        case actions.SEARCH_COURSE:
            return{
                ...state,
                searchCourses: payload,
                input: input
            }
            
            
            default:
        return state;
}
}

export default searchCourseReducer;