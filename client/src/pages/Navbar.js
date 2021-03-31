import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authAction";
import Icon from "../icon.png"

const Navbar = () => {
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <ul className="nav nav-tabs ">
        {AuthReducer.isAuth ? (
          <>
          <img src={Icon} style={{width:"65px"}} />
            <li className="nav-item ">
              <Link to="/" className="nav-link navTab">
                Home
              </Link>
            </li>
            <li>
              <Link to="/operations" className="nav-link navTab">
                Operations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link navTab">
                Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link navTab"
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link navTab" >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link navTab">
                Register
              </Link>
            </li>
          </>
        )}
        {/* <li class="chip">
        <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcRXGsMfsvaT4Be0w7ANONGykaX-N83xsDXoyvaPgAzlEsHgReo0Xs9a1dr9jMSE" alt="Person" className="me_img"/>
        Auth name
      </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
