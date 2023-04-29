import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavigationBar = () => {
  const { user, signout } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    signout();
    toast("Sign out done !");
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">About</a>
            </li>
            <li>
              <a>Career</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <a>About</a>
          </li>
          <li>
            <a>Career</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p className="font-bold text-error mx-4">{user && user.displayName}</p>
        <div className="avatar">
          <div className="w-16 mr-4 rounded-full">
            {
              // user && <FaUserCircle className="text-6xl" />
              user ? (
                <>
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <FaUserCircle className="text-6xl" />
                  )}
                </>
              ) : null
            }
          </div>
        </div>
        {user ? (
          <p onClick={handleSignOut} className="btn rounded-none px-4">
            Log out
          </p>
        ) : (
          <Link to="/login" className="btn rounded-none px-4">
            Log in
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default NavigationBar;