import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import AdminHome from "./Components/Home/AdminHome";
import "./App.css";
import SalesExecHome from "./Components/Home/SalesExecHome";

function App() {
  const saveAdmin = localStorage.getItem("isAdminSaved");

  const [isAdmin, setIsAdmin] = useState(saveAdmin);
  const [isSalesExec, setIsSalesExec] = useState(false);

  localStorage.setItem("isAdminSaved", isAdmin);

  return (
    <>
      <Navbar
        isAdmin={isAdmin}
        isSalesExec={isSalesExec}
        setIsAdmin={setIsAdmin}
        setIsSalesExec={setIsSalesExec}
      />
      {isAdmin ||
        (isSalesExec === false && (
          <Login setIsAdmin={setIsAdmin} setIsSalesExec={setIsSalesExec} />
        ))}
      {isAdmin && (
        <div className="d-flex">
          <AdminHome />
        </div>
      )}
      {isSalesExec && (
        <div className="d-flex">
          <SalesExecHome isSalesExec={isSalesExec} />
        </div>
      )}
    </>
  );
}

export default App;
