import React, { useState, useEffect, useMemo } from "react";
import { AuthContext } from "context/AuthContext";
import { API, BEARER } from "constant";
import { getToken } from "helper";
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      console.error("Error While Getting Logged In User Details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);
  const value = useMemo(() => {
    //useMemo prevent unnecessary re-renders -depend on AuthContext
    return { user: userData, setUser: handleUser, isLoading };
  }, [userData, isLoading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
