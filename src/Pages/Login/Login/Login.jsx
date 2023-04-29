import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const [success, setSuccess] = useState('')
  const [error,setError] = useState('')
  const { user, handleLoginBtn, handleResetBtn } =
    useContext(AuthContext);

  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(from);

  const handleLogin = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleLoginBtn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from,{replace:true})
        // console.log(loggedUser);
        toast("Logged in");
        form.reset();
        // <Navigate to="/catagory/0"></Navigate>;
      })
      .catch((error) => {
        setError(error.message);
      });
    
  }
  const handleReset = (e) => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setError("Please provide email");
    }
    handleResetBtn(email)
      .then(result => {
        toast("Check your Mail");
    })
    // !!!!!!! I cant use .then here!!!!!!!!!!!
    
  };
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                name="email"
                required
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p
                  onClick={handleReset}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </p>
              </label>
              <p className="label-text-alt text-error">{success}</p>
              <p className="label-text-alt text-error">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <p className="label-text-alt link link-hover">
                Don't have an account ?
                <Link to="/register" className="text-error">
                  {" "}
                  Register
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;