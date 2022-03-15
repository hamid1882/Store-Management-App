import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="vh-100 container mx-auto d-flex justify-content-center align-items-center ">
      <div className="d-grid gap-4 w-100">
        <input
          className="inputActive p-2 py-4 rounded outline-none border-0 shadow  w-75 mx-auto "
          placeholder="UserName"
          type="text"
        />
        <input
          className="inputActive p-2 py-4 rounded outline-none border-0 shadow  w-75 mx-auto "
          placeholder="Password"
          type="text"
        />
        <button className="btn btn-success p-2 shadow-none shadow w-50 mx-auto">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
