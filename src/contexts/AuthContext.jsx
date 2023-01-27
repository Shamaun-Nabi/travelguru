import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

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
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        // setLoginUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLoginUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
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
  //   console.log(loginUser);

  const authInfo = { signInWithGoogle, loginUser, googleSignOut };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
}

export default AuthContext;
