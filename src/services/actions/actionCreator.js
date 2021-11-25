import { LOG_IN } from "./actionTypes";

export const login = (result) =>{
    return{
        type: LOG_IN,
        payload: result.data
    }
}