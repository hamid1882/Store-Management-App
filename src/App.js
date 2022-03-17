import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import AdminHome from "./Components/Home/AdminHome";
import SalesExecHome from "./Components/Home/SalesExecHome";
import "./App.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSalesExec, setIsSalesExec] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState("");

  console.log(checkAdmin);

  return (
    <div className="bg-darkOrange ">
      <Navbar
        isAdmin={isAdmin}
        isSalesExec={isSalesExec}
        setIsAdmin={setIsAdmin}
        setIsSalesExec={setIsSalesExec}
        setCheckAdmin={setCheckAdmin}
      />
      {/* {isAdmin ||
        (isSalesExec === false && (
          <Login
            setCheckAdmin={setCheckAdmin}
            setIsAdmin={setIsAdmin}
            setIsSalesExec={setIsSalesExec}
          />
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
      )} */}
      {checkAdmin === "test-admin" ? (
        <div className="d-flex">
          <AdminHome />
        </div>
      ) : (
        <Login
          setCheckAdmin={setCheckAdmin}
          setIsAdmin={setIsAdmin}
          setIsSalesExec={setIsSalesExec}
        />
      )}
      {checkAdmin === "test-sales" ? (
        <div className="d-flex">
          <SalesExecHome isSalesExec={isSalesExec} />
        </div>
      ) : (
        <Login
          setCheckAdmin={setCheckAdmin}
          setIsAdmin={setIsAdmin}
          setIsSalesExec={setIsSalesExec}
        />
      )}
    </div>
  );
}

export default App;
