import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#CF102D] text-white py-5">
      <div className="navbar-start">
        <div className="normal-case text-xl font-bold px-3 flex gap-4 items-center">
          <img style={{ height: "45px" }} src={logo} alt="" />
          <span>Bricktopia</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-9 menu-horizontal px-1 font-semibold">
          <NavLink className="hover:bg-[#A70B22] py-2 px-3 rounded-lg">
            Home
          </NavLink>
          <NavLink className="hover:bg-[#A70B22] py-2 px-3 rounded-lg">
            My toy
          </NavLink>
          <NavLink className="hover:bg-[#A70B22] py-2 px-3 rounded-lg">
            Add a toy
          </NavLink>
          <NavLink className="hover:bg-[#A70B22] py-2 px-3 rounded-lg">
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full">
          <img src="https://cdn.pixabay.com/photo/2020/06/21/05/59/lady-5323329_960_720.png" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 text-black text-center font-semibold"
          >
            <li>
              <NavLink className="hover:bg-[#A70B22] hover:text-white py-2 px-3 rounded-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg">
                My toy
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg">
                Add a toy
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
