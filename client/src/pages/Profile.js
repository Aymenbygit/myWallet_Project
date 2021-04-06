import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editUser, loadUser } from "../actions/authAction";
import Pic from "../Pic/2897f0487328c42b43a0913fd1cebaa932bc.png";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  return (
    <div className="container ">
      {/* <img src={Pic} style={{opacity:0.6,backgroundRepeat:'no-repeat',backgroundSize:"cover"}} /> */}
      <h1>Your account</h1>
      <div className="row">
        <div className="col-sm-5">
          <table className="table table-dark table-borderless">
            <tbody>
              <tr>
                <td style={{ textAlign: "left" }}>First name :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.first_name}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Last name :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.last_name}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Birth Day :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.birth_day}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Address :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.adress}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Phone :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.phone}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Email :</td>
                <td style={{ textAlign: "left" }}>
                  {AuthReducer.user && AuthReducer.user.email}
                </td>
              </tr>
            </tbody>
          </table>
          {/* {AuthReducer.user && AuthReducer.user.first_name} */}
          {/* {AuthReducer.user && <h2>Last name: {AuthReducer.user.last_name}</h2>}
      {AuthReducer.user && <h2>Birth Day: {AuthReducer.user.birth_day}</h2>}
      {AuthReducer.user && <h2>Address: {AuthReducer.user.adress}</h2>}
      {AuthReducer.user && <h2>Phone: {AuthReducer.user.phone}</h2>}
      {AuthReducer.user && <h2>Email: {AuthReducer.user.email}</h2>} */}

          <Link to="/profile/edit_profile" style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <button className="col-sm-10 btn btn-secondary">
                Edit profile
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
