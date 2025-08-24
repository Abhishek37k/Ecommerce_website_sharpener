import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

const EXP_MS = 5 * 60 * 1000;

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const navigate = useNavigate();
  const userIsLoggedIn = !!token;

  const timerRef = useRef(null);
  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const logoutHandler = () => {
    clearTimer();
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("tokenExpiry");
    navigate("/", { replace: true }); // ✅ v6 navigation
  };

  const loginHandler = (newToken, email) => {
    const expiryAt = Date.now() + EXP_MS;
    localStorage.setItem("token", newToken);
    localStorage.setItem("tokenExpiry", String(expiryAt));
      if (email) localStorage.setItem("email", email);   
    setToken(newToken);
    clearTimer();
    timerRef.current = setTimeout(() => logoutHandler(), EXP_MS);
  };

  useEffect(() => {
    const expiry = Number(localStorage.getItem("tokenExpiry") || 0);
    if (!initialToken || !expiry || Date.now() >= expiry) {
      logoutHandler();
      return;
    }
    const remaining = Math.max(0, expiry - Date.now());
    timerRef.current = setTimeout(() => logoutHandler(), remaining);
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
