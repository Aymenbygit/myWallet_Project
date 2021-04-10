import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  EDIT_SUCCESS,
  EDIT_FAIL,
} from "./types";
import axios from "axios";
import setToken from "../setToken";

export const registerUser = (infos) => (dispatch) => {
  axios
    .post("/register", infos)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const checkUser = () => (dispatch) => {
  setToken();
  axios.get("/login/check").then((res) =>
    dispatch({
      type: "CheckOk",
    })
  );
};

export const loadUser = () => (dispatch) => {
  setToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const editUser = (_id, info) => async (dispatch) => {
  // setToken();
  axios
    .put(`/update/${_id}`, info)
    .then((res) => {
      dispatch({
        type: EDIT_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({
        type: EDIT_FAIL,
        payload: err.response.data.errors,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
