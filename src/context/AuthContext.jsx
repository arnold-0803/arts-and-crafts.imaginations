import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const API_URL = "http://localhost:5000/api/auth";

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      try{
        const response = await fetch(`${API_URL}/me`, {credentials: "include"});
        if(!response.ok) throw new Error("Not Authenticated");
        const data = await response.json();
        setUser(data.user);
      }catch(err){
        setUser(null);
      }finally{
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Login Function
  const login = async (email, password) => {
    setError(null);

    try{
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if(!response.ok) throw new Error("Invalid email or password");
      const data = await response.json();
      setUser(data.user);
    }catch(err){
      setError(err.message);
    }
  };

  // Signup Function
  const register = async (name, email, password) => {
    setError(null);

    try{
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if(!response.ok) throw new Error("User already exists");
      const data = await response.json();
      setUser(data.user);
    }catch(err){
      setError(err.message);
    }
  };

  // Logout Function
  const logout = async () => {
    try{
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include"
      });
      setUser(null);
    }catch(err){
      console.error("Logout failed", err);
    }
  };


  const values = {
    user,
    error,
    loading,
    login,
    register,
    logout
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
