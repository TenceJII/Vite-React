import React, { Fragment, useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Navigate, NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { userStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = (val) => {
    console.log(val);
    setIsOpen(val);
  };
  const closeNavbar = (val) => {
    console.log(val);
    setIsOpen(val);
  };
  const Navigate = [
    { name: "HOME", to: "/" },
    { name: "DASHBOARD", to: "/dashboard" },
    { name: "NEW,S", to: "/" },
    { name: "FASHION", to: "/" },
    { name: "TENS’ IDNs", to: "/" },
    { name: "TENS’ Worlds", to: "/" },
  ];

  const navbarRef = useRef(null);
  useEffect(() => {
    const handleclikout = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleclikout);
    return () => {
      document.removeEventListener("mousedown", handleclikout);
    };
  }, [navbarRef]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { currentUser } = userStateContext;

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div className="flex items-center justify-between w-full px-2 py-4 bg-white border-b border-black xl:px-16">
          <div className="flex items-center lg:flex-col md:mx-auto gap-x-2">
            <div className="block md:hidden ">
              <Bars3Icon
                onClick={() => handleNavbar(!isOpen)}
                className="h-5"
              />
            </div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-widest md:text-3xl font-kaisei "
            >
              LOREM IPSUM
            </Link>
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-4 ">
                <div className="w-20  h-[1px]  bg-black "></div>
                <p className="text-sm ">MAGAZINE</p>
                <div className="w-20  h-[1px]  bg-black "></div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Link className="text-xl font-kaisei hover:underline underline-offset-2 decoration-1">
              SIGN IN
            </Link>
          </div>
        </div>

        <div className="hidden py-2 bg-white shadow-md md:block">
          <div className="flex justify-center font-medium gap-x-9">
            {Navigate.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  classNames(isActive ? "text-black " : "")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`relative z-50 ${isOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-0 bg-slate-600 opacity-10"></div>
          <nav
            ref={navbarRef}
            className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r "
          >
            <div className="flex items-center mb-8">
              <Link className="flex items-center mr-auto text-3xl font-bold leading-none">
                <img
                  src=""
                  className="mr-3 rounded-full shadow-md h-9 sm:h-14"
                  alt=""
                ></img>
                <span className="object-center text-3xl font-bold tracking-wide text-transparent bg-center bg-repeat drop-shadow-xl hover:drop-shadow-sm bg-clip-text">
                  Tensei
                </span>
              </Link>
              <button className="" onClick={() => closeNavbar(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-4">
              {Navigate.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(isActive ? "text-black " : "")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Link className="block px-4 py-3 text-xs font-semibold leading-loose text-center bg-gray-50 hover:bg-gray-100 rounded-xl ">
                  LOGIN
                </Link>

                <Link className="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl ">
                  SIGN IN
                </Link>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span> © 2023 Tensei, Inc.</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
