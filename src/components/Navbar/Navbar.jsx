import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import Loading from "../loading/Loading";
import User from "./User";

function Navbar() {
  const { loginUser, googleSignOut } = useContext(AuthProvider);

  // if (loginUser === null) {
  //   return <Loading />;
  // }
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white shadow-sm navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler  border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <Link to={"/"} className="flex items-center">
              <img
                src="https://www.pngfind.com/pngs/m/669-6691661_new-travel-peeps-travel-agency-logo-png-transparent.png"
                className="h-10 mr-2 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                TravelMania
              </span>
            </Link>
            {/* Left links */}

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mx-auto">
              <li className="nav-item p-2">
                <div className="relative block mx-2 md:hidden">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar-md"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-300 focus:border-yellow-300 dark:bg-gray-700"
                    placeholder="Search Your Place. . . . ."
                  />
                </div>
              </li>
              <li className="nav-item p-2">
                <NavLink className="nav-link text-slate-800" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-slate-800 opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-slate-800 opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative ">
            <div className="relative hidden mx-2 md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar-md"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-300 focus:border-yellow-300 dark:bg-gray-700"
                placeholder="Search Your Place. . . . ."
              />
            </div>

            {loginUser ? (
              <div className="dropdown relative">
                <a
                  className="dropdown-toggle flex items-center hidden-arrow"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={loginUser?.photoURL}
                    className="rounded-full"
                    style={{ height: 40, width: 40 }}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      {loginUser?.displayName}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      {loginUser?.email}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={googleSignOut}
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login" className="">
                <button className=" mx-2 flex items-center hover:bg-slate-800 hover:text-white bg-yellow-300 px-3 py-2 transition duration-200 rounded-md text-slate-900">
                  Login
                </button>
              </NavLink>
            )}
          </div>
          {/* Right elements */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
