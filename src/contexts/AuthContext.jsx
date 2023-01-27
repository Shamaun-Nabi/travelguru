import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthProvider = createContext();

function AuthContext({ children }) {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");

        // setLoginUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // Manage a user to hold session

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  console.log(loginUser);

  const authInfo = { signInWithGoogle, loginUser };
  return (
    <AuthProvider.Provider value={{ authInfo }}>
      {children}
    </AuthProvider.Provider>
  );
}

export default AuthContext;
