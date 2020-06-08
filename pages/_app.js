import React from "react";
import { AuthContextProvider } from "../components/AuthContext";

const App = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
};

export default App;
