import React from "react";

const Navbar = ({ isAdmin, isSalesExec, setIsAdmin, setIsSalesExec }) => {
  const handleLogout = () => {
    setIsAdmin(false);
    setIsSalesExec(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand ">My Medical Store</h2>
        <button
          className={`${
            isAdmin || isSalesExec ? "d-flex" : "d-none"
          } btn btn-warning`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
