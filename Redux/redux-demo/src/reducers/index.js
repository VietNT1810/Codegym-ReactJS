import loginReducer from "./login";
import userReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer
});

export default rootReducer;