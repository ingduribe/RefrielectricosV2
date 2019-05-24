import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav>
      <div>
        <Link to="/signin">Refrielectricos manage system</Link>
        <ul>
          <li>
            <NavLink exact to="/signup">
              Sign Up
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/signin">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavbarHome);
