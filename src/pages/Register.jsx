import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createUser, setUser,updateUser} = use(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter and minimum 6 characters"
      );
      return; 
    }

    setPasswordError('');
    // console.log({ email, password, photo, name });
    createUser(email, password)
    .then(result =>{
        const user = result.user;

        updateUser({displayName: name, photoURL:photo})
        .then(()=>{
          setUser({...user,displayName: name, photoURL:photo })
        })
        .catch(error =>{
          console.log(error);
          setUser(user);
        })
        navigate('/');
    })
    .catch(error =>{
        console.log(error.message);
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />
            <p className="text-red-400 text-xs"></p>
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photoURL"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <div>
              {passwordError && <p className="text-xs text-red-400">{passwordError}</p>}
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              All ready Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                LogIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
