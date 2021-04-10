import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT,
    SAVED_OP,
    FINISH_SAVED_OP
  } from "../actions/types";

const SavedOperation = (state = {saved:null,isEdited:false}, action) => {
    switch (action.type) {
        case SAVED_OP:
            return {
              saved:action.payload,
            };
        case FINISH_SAVED_OP:
            return {
              ...state,
              isEdited: !state.isEdited
            };
        default:
          return state;
      }
};

export default SavedOperation;
