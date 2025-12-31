import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const [error, setError] = useState("");
    const {logIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then((result)=>{
             const user = result.user;
            toast.success('You have Logged in successfully');
            // console.log(user);
            navigate(`${location.state? location.state : '/'}`)
        })
        .catch(error=>{
            toast.success(error.message);
            setError(error.code);
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin}  className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" required/>
            <label className="label">Password</label>
            {/* password  */}
            <input type="password" className="input" name="password" placeholder="Password" required/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            { error && <p className='text-xs text-red-400'>{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Login;