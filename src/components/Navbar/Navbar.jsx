import React from "react";
import { NavLink } from "react-router";
// import img from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-22 p-2 shadow"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="">Apps</NavLink></li>
              <li><NavLink to=""></NavLink></li>
            </ul>
          </div>
          <NavLink to='/'><div className="flex items-center">
            <img className="h-10 w-10" src="/logo.png" alt="logo" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500  to-purple-500 bg-clip-text text-transparent">
              HERO.IO
            </span>
          </div></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 ">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/AppsData">Apps</NavLink></li>
            <li><NavLink to="/Installation">Installation</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <span className="btn bg-linear-to-l from-purple-500 to-indigo-700 text-white">
            Contribute
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
