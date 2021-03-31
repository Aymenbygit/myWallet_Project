import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/authAction";
import { Link } from "react-router-dom";

const Register = ({history}) => {
  const [infos, setinfos] = useState({
    first_name: "",
    last_name: "",
    birth_day: "",
    adress: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setinfos({ ...infos, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const AuthReducer = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    if(AuthReducer.isAuth){
      history.push("/")
    };
    if (AuthReducer.error) {
      setErrors(AuthReducer.error);
      setTimeout(() => {
        setErrors(null)
      }, 3000);
    }
  }, [AuthReducer.isAuth, AuthReducer.error])

  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(infos));
  };
  return (
    <div className="container registerC">
      <form className="container col-sm-5 log_card" onSubmit={registerNow} >
        <div className=" mb-3 col-12 ">
        <h3 className="card-header">Sign up</h3>
        <div className="mb-3">
          <label className="form-label">First name</label>
          <input
            pattern="[A-Za-z\s]+$"
            type="text"
            className="form-control"
            name="first_name"
            onChange={handleChange}
            required='required'
          />
        </div>
        <span> {AuthReducer.error && AuthReducer.error.msg} </span>
        {/* <span>{infos.first_name == ""&& "dd"}</span> */}
        <div className="mb-3">
          <label className="form-label">Last name</label>
          <input
            // pattern="[A-Za-z\s]+$"
            type="text"
            className="form-control"
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birth Day</label>
          <input
            // pattern="{8}"
            type="date"
            className="form-control"
            name="birth_day"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adress</label>
          <input
            type="text"
            className="form-control"
            name="adress"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">Phone</label>
        <div className="mb-3 input-group">
          <div className="input-group-text">+216</div>
          <input
            type="number"
            className="form-control"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        {errors && errors.map((el) => <h1>{el.msg}</h1> )}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn btn-primary col-sm-6"
          >
            Sign Up
          </button>
        </div>
        </div>
      </form>
      <br/>
      <div className="gr27e container col-sm-5 ">
        <div className=" col-12">
        <p className="izU2O">
          Have an account&nbsp;?{" "}
          <Link to="/login">login</Link>
        </p>          
        </div>
      </div>
    </div>
  );
};

export default Register;
