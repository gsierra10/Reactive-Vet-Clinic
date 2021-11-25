import {LOG_IN} from "../actions/actionTypes"

const inititalState = {
    login: false
}

export const loginReducer = (state = inititalState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                ...state,
                login: action.payload
            } 
        default:
            return state
    }
}