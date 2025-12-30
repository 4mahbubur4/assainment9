import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/image.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5 p-2">
      <div className="text-2xl font-bold">Edu Care</div>
      <div className="nav flex gap-5 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/success">Success</NavLink>
        
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={ userIcon} alt="" /> 
        {/*user?.photoURL ? user.photoURL :*/}

        {/* {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          
        )} */}
        <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>

      </div>
    </div>
  );
};

export default Navbar;
