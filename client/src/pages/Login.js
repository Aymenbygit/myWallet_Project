import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authAction";
import Logo from "../logo.png"

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [infos, setinfos] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setinfos({ ...infos, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(infos));
  };
  const AuthReducer = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    if (AuthReducer.isAuth) {
      history.push("/");
    }
    if (AuthReducer.error) {
      setErrors(AuthReducer.error);
      setTimeout(() => {
        setErrors(null)
      }, 3000);
    }
  }, [AuthReducer.isAuth, AuthReducer.error]);
  return (
    <div className="loginC container">
      <div className="row">
        <div className="col-sm-5 login_home">
          <div>
            <img src={Logo} className="col-12" />
          </div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
        <div className="col-sm-5 login_home">
          <form className="container log_card " onSubmit={login}>
            <div className="col-sm-12">
              {/* <div className="mb-3">
                        <label className="form-label">Login</label>
                    </div> */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="type your email..."
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="type your password..."
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div>
              {errors && errors.map((el) => <h1>{el.msg}</h1> )}
              <button type="submit" className="btn btn-primary col-12" style={{backgroundColor:'#4ABDF3'}}  >
                Login
              </button>{" "}
              <hr />
              <Link to="/register">
                <div  style={{textAlign:'center'}}>
                <button type="submit" className="btn btn_create col-8">
                  Create New Account
                </button>                  
                </div>

              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
