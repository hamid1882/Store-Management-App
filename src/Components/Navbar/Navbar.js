import React from "react";

const Navbar = ({
  setCheckAdmin,
  isAdmin,
  isSalesExec,
  setIsAdmin,
  setIsSalesExec,
}) => {
  const handleLogout = () => {
    setCheckAdmin("");
    setIsAdmin(false);
    setIsSalesExec(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
  };
  return (
    <nav className="navbar navbar-light bg-darkOrange text-light shadow">
      <div className="container-fluid">
        <h2 className="navbar-brand t">
          <i className="fa fa-plus-circle text-warning fs-1 shadow rounded-circle"></i>
        </h2>
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
