import React from "react";

const Navbar = ({ setCheckAdmin, setIsLogin }) => {
  const savedLogIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    setCheckAdmin("");
    setIsLogin(false);
    localStorage.removeItem("admin");
    localStorage.removeItem("loggedIn");

    if (savedLogIn === null) {
      setIsLogin(false);
    }
  };

  return (
    <nav className="navbar navbar-light bg-darkOrange text-light shadow">
      <div className="container-fluid">
        <h2 className="navbar-brand t">
          <i className="fa fa-plus-circle text-warning fs-1 shadow rounded-circle"></i>
        </h2>
        <button
          className={`${
            savedLogIn !== null ? "d-flex" : "d-none"
          } btn btn-warning shadow-none`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
