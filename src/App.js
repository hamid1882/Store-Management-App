import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import AdminHome from "./Components/Home/AdminHome";
import SalesExecHome from "./Components/Home/SalesExecHome";
import "./App.css";

function App() {
  const savedAdmin = localStorage.getItem("admin");
  const savedLogIn = localStorage.getItem("loggedIn");

  const [checkAdmin, setCheckAdmin] = useState(savedAdmin);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (checkAdmin === "test-admin" || checkAdmin === "test-sales") {
      localStorage.setItem("admin", checkAdmin);
      localStorage.setItem("loggedIn", isLogin);
      setIsLogin(true);
    } else {
      setIsLogin(false);
      setCheckAdmin("");
      setIsLogin("");
    }
  };

  useEffect(() => {
    handleLogin();
    // eslint-disable-next-line
  }, [isLogin, checkAdmin, savedLogIn, savedAdmin]);

  return (
    <div className="bg-darkOrange ">
      <Navbar
        setIsLogin={setIsLogin}
        setCheckAdmin={setCheckAdmin}
        savedLogin={savedLogIn}
      />
      {savedLogIn === null && <Login setCheckAdmin={setCheckAdmin} />}

      {savedAdmin === "test-admin" && (
        <div className="d-flex">
          <AdminHome />
        </div>
      )}
      {savedAdmin === "test-sales" && (
        <div className="d-flex">
          <SalesExecHome checkAdmin={checkAdmin} />
        </div>
      )}
    </div>
  );
}

export default App;
