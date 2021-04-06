import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editUser, loadUser } from "../../actions/authAction";

const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [info, setInfo] = useState(AuthReducer.user);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const update = (e) => {
    setToggleEdit(!toggleEdit);
  };
  const updateNow = (e) => {
    e.preventDefault();
    dispatch(editUser(AuthReducer.user._id, info));
    update();
  };
  return (
    <div className="container">
      <h1>Edit account</h1>
      <form onSubmit={updateNow}>
        <div className="row mb-3">
          {!toggleEdit ? (
            <>
              <label className="col-sm-2 col-form-label"> First name : </label>
              <div className="col-sm-6">{AuthReducer.user.first_name}</div>
            </>
          ) : (
            <>
              <label className="col-sm-2 col-form-label"> First name : </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  name="first_name"
                  value={info.first_name}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        <div className="row mb-3">
          {!toggleEdit ? (
            <>
              <label className="col-sm-2 col-form-label"> Last name : </label>
              <div className="col-sm-6">{AuthReducer.user.last_name}</div>
            </>
          ) : (
            <>
              <label className="col-sm-2 col-form-label"> Last name : </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  value={info.last_name}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        <div className="row mb-3">
          {!toggleEdit ? (
            <>
              <label className="col-sm-2 col-form-label"> Birth Day : </label>
              <div className="col-sm-6">{AuthReducer.user.birth_day}</div>
            </>
          ) : (
            <>
              <label className="col-sm-2 col-form-label"> Birth Day : </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="date"
                  name="birth_day"
                  value={info.birth_day}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        <div className="row mb-3">
          {!toggleEdit ? (
            <>
              <label className="col-sm-2 col-form-label"> Adresse : </label>
              <div className="col-sm-6">{AuthReducer.user.adress}</div>
            </>
          ) : (
            <>
              <label className="col-sm-2 col-form-label"> Adresse : </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  name="adress"
                  value={info.adress}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        <div className="row mb-3">
          {!toggleEdit ? (
            <>
              <label className="col-sm-2 col-form-label"> Phone : </label>
              <div className="col-sm-6">{AuthReducer.user.phone}</div>
            </>
          ) : (
            <>
              <label className="col-sm-2 col-form-label"> Phone : </label>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={info.phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        {!toggleEdit ? (
          <div className="col-sm-5" style={{ textAlign: "center" }}>
          <button
            className="col-6 btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              update();
            }}
          >
            {" "}
            Edit{" "}
          </button>
          </div>
        ) : (
          <div className="col-sm-5">
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="col-6 btn btn-success">
              Save
            </button>
          </div></div>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
