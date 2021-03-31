import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import OperationReducer from "./operationReducer"
import SavedOperation from "./savedOperation";

export default combineReducers({ AuthReducer,OperationReducer, SavedOperation });
