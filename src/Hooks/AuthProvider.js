import React, { createContext } from "react";
import useHooks from "./useHooks";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allContext = useHooks();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
