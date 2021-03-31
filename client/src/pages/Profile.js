import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { editUser, loadUser } from '../actions/authAction';

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    const AuthReducer = useSelector((state) => state.AuthReducer);
      return (
        <div className="container">
            <h1>Your account</h1>
            {AuthReducer.user && <h2>First name: {AuthReducer.user.first_name}</h2>  }
            {AuthReducer.user && <h2>Last name: {AuthReducer.user.last_name}</h2>  }
            {AuthReducer.user && <h2>Birth Day: {AuthReducer.user.birth_day}</h2>  }
            {AuthReducer.user && <h2>Address: {AuthReducer.user.adress}</h2>  }
            {AuthReducer.user && <h2>Phone: {AuthReducer.user.phone}</h2>  }
            {AuthReducer.user && <h2>Email: {AuthReducer.user.email}</h2>  }
            <Link to="/profile/edit_profile">Edit profile</Link>
        </div>
    )
}

export default Profile
