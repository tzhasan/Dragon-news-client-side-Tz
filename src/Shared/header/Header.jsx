import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from "moment";
import Marquee from "react-fast-marquee";

import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="mx-auto mb-3" src={logo} alt="" />
        <p className="mb-2 text-slate-500">Journalism Without Fear or Favour</p>
        <p className="mb-3 ">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="flex gap-2 bg-slate-200 p-2 mb-3">
        <button className="btn btn-error rounded-none">Latest</button>
        <Marquee speed={50} className="">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      {/* <div className="navbar bg-base-100">
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
          <p className="font-bold text-error mx-4">{user.displayName}</p>
          <div className="avatar">
            <div className="w-16 mr-4 rounded-full">
              {
                user&&<FaUserCircle className='text-6xl'/>
                // user? <img src="" />:<FaUserCircle className='text-6xl'/>
              }
            </div>
          </div>
          {user ? (
            <Link to="/login" className="btn rounded-none px-4">
              Log Out
            </Link>
          ) : (
            <Link to="/logout" className="btn rounded-none px-4">
              Login
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Header;