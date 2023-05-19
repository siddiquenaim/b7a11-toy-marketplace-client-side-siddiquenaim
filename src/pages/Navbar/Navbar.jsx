import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-[#CF102D] text-white py-5">
      <div className="navbar-start">
        <div className="normal-case text-xl font-bold px-3 flex gap-4 items-center">
          <Link to="/">
            <img style={{ height: "45px" }} src={logo} alt="" />
          </Link>
          <span>
            <Link to="/">Bricktopia</Link>
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-9 menu-horizontal px-1 font-semibold">
          <NavLink to="/" className="hover:bg-[#A70B22] py-2 px-3 rounded-lg">
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/my-toys"
              className="hover:bg-[#A70B22] py-2 px-3 rounded-lg"
            >
              My toys
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/add-a-toy"
              className="hover:bg-[#A70B22] py-2 px-3 rounded-lg"
            >
              Add a toy
            </NavLink>
          )}
          <NavLink
            to="/blogs"
            className="hover:bg-[#A70B22] py-2 px-3 rounded-lg"
          >
            Blogs
          </NavLink>

          {user ? (
            <NavLink
              onClick={handleLogOut}
              className="hover:bg-[#A70B22] py-2 px-3 rounded-lg"
            >
              Logout
            </NavLink>
          ) : (
            <div className="py-2 px-3">
              <NavLink
                to="/login"
                className="hover:bg-[#A70B22] hover:text-white mr-9 py-2 px-3 rounded-lg"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
              >
                Register
              </NavLink>
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div
          className={`w-10 rounded-full ${user && "tooltip tooltip-left"}`}
          data-tip={user && user.displayName}
        >
          {user ? (
            <img className="rounded-full" src={user?.photoURL} alt="" />
          ) : (
            <p></p>
          )}
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
              <NavLink
                to="/"
                className="hover:bg-[#A70B22] hover:text-white py-2 px-3 rounded-lg"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-toys"
                className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
              >
                My toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-a-toy"
                className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
              >
                Add a toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
              >
                Blogs
              </NavLink>
            </li>

            {user ? (
              <li>
                <NavLink
                  onClick={handleLogOut}
                  className="hover:bg-[#A70B22] py-2 px-3 rounded-lg"
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <div>
                <li>
                  <NavLink
                    to="/login"
                    className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="hover:bg-[#A70B22] hover:text-white  py-2 px-3 rounded-lg"
                  >
                    Register
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
