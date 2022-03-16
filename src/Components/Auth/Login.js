import React, { useState } from "react";
import "./Login.css";

const Login = ({ setIsAdmin, setIsSalesExec }) => {
  const myUserName = localStorage.getItem("userName");
  const myPassword = localStorage.getItem("password");

  const [userName, setUserName] = useState(myUserName);
  const [userPassword, setUserPassword] = useState(myPassword);

  localStorage.setItem("userName", userName);
  localStorage.setItem("password", userPassword);

  const handleLogin = () => {
    if (userName && userPassword === "test-admin") {
      setIsSalesExec(false);
      setIsAdmin(true);
    }
    if (userName && userPassword === "test-sales") {
      setIsAdmin(false);
      setIsSalesExec(true);
    }
  };

  return (
    <div className="vh-100 container mx-auto d-flex justify-content-center align-items-center ">
      <div className="d-grid gap-4 w-100">
        <input
          className="activeInputs p-2 py-4 rounded outline-none border-0 shadow  w-75 mx-auto "
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
          type="text"
          value={userName}
        />
        <input
          className="activeInputs p-2 py-4 rounded outline-none border-0 shadow  w-75 mx-auto "
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={userPassword}
        />
        <button
          onClick={handleLogin}
          className="btn btn-success p-2 shadow-none shadow w-50 mx-auto"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
