import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand ">My Medical Store</h2>
        <button className="btn btn-warning">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
