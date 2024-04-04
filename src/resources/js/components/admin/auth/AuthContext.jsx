import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const setUser = (user) => {
    setCurrentUser(user);
  };

  const logout = async () => {
    await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    setUser,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
