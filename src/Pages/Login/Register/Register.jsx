import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [accepted,setAccepted] = useState(false)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { user, handleRegisterBtn } = useContext(AuthContext);
  const handleRegister = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value
    // console.log(email);
    handleRegisterBtn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // const user = userCredential.user;
        updateProfile(loggedUser, { displayName :name})
          .then(() => {
            // Profile update successful
          })
          .catch((error) => {
            // Error updating profile
            console.error(error);
          });
        sendEmailVerification(loggedUser)
       toast("Varify link sended to your mail  !");
        setSuccess("Account Created");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleAccept = (e) => {
    setAccepted(e.target.checked)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                required
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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

              <p className="label-text-alt text-error">{success}</p>
              <p className="label-text-alt text-error">{error}</p>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input onClick={handleAccept} type="checkbox" className="checkbox" />
                <span className="label-text">
                  Accept <Link to={'/terms'} className='link-success'>terms and conditions</Link>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button disabled={!accepted} className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <p className="label-text-alt link link-hover">
                Already have an account?{" "}
                <Link to="/login" className="text-error">
                  {" "}
                  Login
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

export default Register;