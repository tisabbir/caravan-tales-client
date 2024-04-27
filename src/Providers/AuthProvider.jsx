import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(auth);
const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //google
  const logInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  //github
  const logInWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };

  //auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("from onAuthStateChanged", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const allInfo = {
    user,
    setUser,
    createUserWithEmail,
    logInUser,
    logInWithGoogle,
    logInWithGithub,
    loading,
    setLoading,
    logOut,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
