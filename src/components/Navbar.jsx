import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/image.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast';


const Navbar = () => {
  const handleLogOut=(e)=>{
    e.preventDefault();
   logOut()
   .then(()=>{
    toast.success('Logged out successfully');
   })
   .catch((error=>{
    toast.success(error.message);
   }))
  }
  const {user, logOut} = use(AuthContext);
  return (
    <div className="flex justify-between items-center mt-5 p-2">
      <div className="text-2xl font-bold">{user? user.email : 'Edu Care' }</div>
      <div className="nav flex gap-5 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/success">Success</NavLink>
        
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full " title={user?.displayName || "User"}
   src={user?.photoURL ? user.photoURL : userIcon} alt="" /> 
        

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
            
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
        

      </div>
    </div>
  );
};

export default Navbar;

