import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from '../QZone/Qzone';
import bg from '../../assets/bg.png' 
import { AuthContext } from '../../Provider/AuthProvider';

const RightNav = () => {
  const { user, handleGoogleLogin, handleFbLogin } = useContext(AuthContext);
  const handleGooglebtn = () => {
    handleGoogleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        alert('Login successfully with google')
        form.reset();
      })
      .catch((error) => {
                alert(error.message);

      });
  }
  const handleFacebookbtn = () => {
    handleFbLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // alert("Login successfully with facebook");
        // form.reset();
      })
      .catch((error) => {
        // alert(error.message);
        console.log(error);
      });
  }
  return (
    <div>
      <div className='mb-2'>
        <h4 className="text-2xl font-bold mb-2">Login With</h4>
        <div className="flex flex-col gap-2">
          <button onClick={handleGooglebtn} className="btn btn-outline btn-info">
            <FaGoogle />
            Login with Google
          </button>
          <button onClick={handleFacebookbtn} className="btn btn-outline btn-info">
            <FaFacebook />
            Login with Facebook
          </button>
          <button className="btn btn-outline btn-success">
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>

      <div className='mb-2'>
        <h4 className="text-2xl font-bold">Find Us On</h4>
        <ul className="menu bg-base-100 w-56">
          <li>
            <a>
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a>
              <FaTwitter /> Twitter
            </a>
          </li>
          <li>
            <a>
              <FaInstagram /> Instagram
            </a>
          </li>
        </ul>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;