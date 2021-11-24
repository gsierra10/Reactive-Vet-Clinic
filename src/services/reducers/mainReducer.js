import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { shoesReducer } from "./shoesReducer";

export const mainReducer = combineReducers({login: loginReducer, shoeCart: shoesReducer})
