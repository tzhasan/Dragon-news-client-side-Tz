import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  console.log(user);

  const handleRegisterBtn = (email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
  };
  const handleLoginBtn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
 
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  }

  const handleFbLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,facebookProvider)
  }

  const handleResetBtn = (email) => {
   return sendPasswordResetEmail(auth,email)
  }
  const signout = () => {
    signOut(auth)
  }

  useEffect(() => {
    // console.log(user);
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
    
  },[])



  const authInfo = {
    user,
    handleRegisterBtn,
    handleLoginBtn,
    handleGoogleLogin,
    handleFbLogin,
    signout,
    handleResetBtn,
    loading,
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;