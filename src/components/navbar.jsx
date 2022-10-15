import React from "react";

// Stateless functional component
// Dealing w simple component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill bg-secondary">
          {/* react will pass prop as an argument at runtime */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
