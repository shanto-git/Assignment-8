import React from "react";
// import img from "../../../public/logo.png";

const Navbar = () => {
    const link =<>
    <li className="">Home</li>
    <li className="">Apps</li>
    <li className="">Installation</li>
    </>
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
              {link}
            </ul>
          </div>
            <img className="h-10 w-10" src="/public/logo.png" alt="logo" />
          <a className="text-xl font-bold bg-gradient-to-r from-indigo-500  to-purple-500 bg-clip-text text-transparent">HERO.IO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 ">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-linear-to-l from-purple-500 to-indigo-700 text-white">
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
