import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  EDIT_SUCCESS,
} from "../actions/types";
let initialState = {
  token: localStorage.getItem("token"),
  user: null,
  // isAuth: false,
  isAuth: localStorage.getItem("isAuth"),
  error: null,
  isEdited: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SUCCESS:
      return {
        ...state,
        errors : null, 
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth:true,
        error: null,
      };
    // case "CheckOk":
    //   return {
    //     ...state,
    //     isAuth: true,
    //   };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuth", 'true');
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        error: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      return {
        isAuth: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
