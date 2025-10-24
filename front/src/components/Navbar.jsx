import React, { useState, useEffect } from "react";
import Login from "./Login";
function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  // Theme handling
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Sticky navbar (shadow on scroll)
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarLinks = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 
        bg-base-100 dark:bg-slate-800 dark:text-white 
        transition-all duration-300 
        ${sticky ? "shadow-[0_2px_6px_rgba(0,0,0,0.15)]" : "shadow-none"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-20 py-3 max-w-screen-2xl">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-slate-700 rounded-box w-52 z-[1]"
              >
                {navbarLinks}
              </ul>
            </div>

            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>

          {/* Center (Desktop Menu) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:flex items-center border rounded-md px-3 py-1">
              <input
                type="text"
                className="bg-transparent outline-none px-1 dark:text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" />

              {/* Sun */}
              <svg
                className="swap-off fill-current w-6 h-6"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM17.66,7.34A1,1,0,0,0,17,5.93l-.71-.71a1,1,0,1,0-1.41,1.41l.71.71A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z" />
              </svg>

              {/* Moon */}
              <svg
                className="swap-on fill-current w-6 h-6"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8,8,0,1,1-9.71-9.71A1,1,0,0,0,11,2.36,10,10,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>

            {/* Login Button */}
            <a className="px-3 py-2 text-white bg-black rounded-md hover:bg-slate-700 transition"
            onClick={()=>document.getElementById("my_modal_3").showModal()}>
              Login
            </a>
            <Login />
          </div>
        </div>
      </div>

      {/* To push page content below fixed navbar */}
      <div className="pt-[75px]"></div>
    </>
  );
}

export default Navbar;
