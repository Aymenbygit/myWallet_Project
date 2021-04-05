import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editUser, loadUser } from "../../actions/authAction";

const EditProfile = () => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [toggleEdit, setToggleEdit] = useState(false);
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
        <div>
          {!toggleEdit ? (
            <p> First name : {AuthReducer.user.first_name}</p>
          ) : (
            <>
              <p> First name : </p>
              <input
                type="text"
                name="first_name"
                value={info.first_name}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div>
          {!toggleEdit ? (
            <p> Last name : {AuthReducer.user.last_name}</p>
          ) : (
            <>
              <p> Last name : </p>
              <input
                type="text"
                name="last_name"
                value={info.last_name}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div>
          {!toggleEdit ? (
            <p> Birth Day : {AuthReducer.user.birth_day}</p>
          ) : (
            <>
              <p> Birth Day : </p>
              <input
                type="date"
                name="birth_day"
                value={info.birth_day}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div>
          {!toggleEdit ? (
            <p> adresse : {AuthReducer.user.adress}</p>
          ) : (
            <>
              <p> last_name : </p>
              <input
                type="text"
                name="adress"
                value={info.adress}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div>
          {!toggleEdit ? (
            <p> phone : {AuthReducer.user.phone}</p>
          ) : (
            <>
              <p> phone : </p>
              <input
                type="text"
                name="phone"
                value={info.phone}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        {!toggleEdit ? (
          <button className='btn btn-dark'
            onClick={(e) => {
              e.preventDefault();
              update();
            }}
          >
            {" "}
            Edit{" "}
          </button>
        ) : (
          <button type="submit" className='btn btn-dark'>Save</button>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
