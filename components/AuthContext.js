/* Some ideas stolen from https://github.com/satansdeer/react-firebase-auth */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Router from "next/router";

// import { auth, firebase } from "../helpers/firebase";

const AuthContext = React.createContext(null);
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  // useEffect(() => {
  //   /* Init auth - not necessary here */
  //   // // Listen for auth state changes and assign to state
  //   // const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
  //   //   if (!user) {
  //   //     auth.signInAnonymously();
  //   //   }
  //   //   setIsLoggedIn(!!user);
  //   // });

  //   // return () => unregisterAuthObserver();
  // }, []);

  // const user = auth.currentUser;

  Modal.setAppElement("#__next");

  const doLogin = () => setLoginModalIsOpen(true);
  const doLogout = () => {
    setLoginModalIsOpen(false);
    // firebase.auth().signOut();
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        // user,
        isLoggedIn,
        doLogin,
        doLogout,
      }}
    >
      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={() => setLoginModalIsOpen(false)}
        contentLabel="Log in"
      >
        <h1>Log in</h1>
        <p>Some login components here...</p>
      </Modal>
      {children}
    </AuthContext.Provider>
  );
};
