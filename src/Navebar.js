import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navebar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Home </li>
        </NavLink>

        <NavLink to="/employee">
          <li>Employee</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navebar;
