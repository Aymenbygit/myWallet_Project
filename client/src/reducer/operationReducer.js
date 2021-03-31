import { ADD_OP_SUCCESS, ADD_OP_FAIL ,GET_OP_FAIL,GET_OP_SUCCESS, DELETE_SUCCESS, EDIT_OP_SUCCESS} from "../actions/types";
let initState = {
  owner:null,
};

const OperationReducer = (state = [], action) => {
  switch (action.type) {
    case GET_OP_SUCCESS:
      return action.payload;
    case GET_OP_FAIL:
      return action.payload;
    case ADD_OP_SUCCESS:
      return state.concat(action.payload);
      case ADD_OP_FAIL:
        return action.payload;
      case EDIT_OP_SUCCESS:
        return state.map(el => el._id === action.payload._id ? action.payload : el )
      case DELETE_SUCCESS:
        return state;
    default:
      return state;
  }
};

export default OperationReducer;
