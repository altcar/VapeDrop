"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, analytics } from '@/../config/firebaseconfig';
import { logEvent } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { firestore } from "@/../config/firebaseconfig";
import { collection, query, where, getDoc, doc, setDoc } from "firebase/firestore";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  const [posiiit, setPosiiit] = useState({  lat:   53.38145,lng: -1.488558});
  const [loginState, setLoginState] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;


      checkexist(user)


      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setLoginState(result.user);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

 function checkexist(user){ 
  const docRef = doc(firestore, 'user', user.uid); 
  console.log("setting")
  setDoc(docRef,{
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    points: 0,
  }, { merge: true })
          
      
    }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoginState(null);
      if (analytics) {
        logEvent(analytics, 'logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginState(user);
      } else {
        setLoginState(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ loginState, handleLogin, handleLogout,posiiit, setPosiiit }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);