import React, { createContext, useContext, useState } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user data

  const signIn = async ({ email, password }) => {
    // Simulate an API call to authenticate the user
    const userData = { email, username: email.split('@')[0] };
    setUser(userData);
  };
  const signOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);