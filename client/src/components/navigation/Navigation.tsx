import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
