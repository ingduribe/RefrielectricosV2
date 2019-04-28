import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <div>
        <Link to="/">Refrielectricos manage system</Link>
        <ul>
          <li>
            <NavLink exact to="/">
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
