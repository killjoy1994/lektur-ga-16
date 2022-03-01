import * as actions from '../../types'


const initialState ={
    searchCourses : [],
    input: '',
    isloading: false,
    error: '',
}

const searchCourseReducer = (state = initialState, action)=>{
    const {type, payload, input}= action
    switch (type) {
        case actions.SEARCH_COURSE_REQUEST:
            return{
                ...state,
                isloading: true
            }
        case actions.SEARCH_COURSE_SUCCESS:
            return{
                ...state,
                isloading: false,
                searchCourses: payload,
                input: input,
                error: null
            }
        case actions.SEARCH_COURSE_FAILED:
            return{
                ...state,
                isloading: false,
                error: payload,
                input: input,
                searchCourses: null
            }
            
            default:
        return state;
}
}

export default searchCourseReducer;
