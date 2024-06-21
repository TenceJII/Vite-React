import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Dashboard from "../pages/Dashboard";

export default function Header() {
    const Navigate = [
        { name: "HOME", to: "/" },
        { name: "DASHBOARD", to: "/dashboard" },
        { name: "NEW,S", to: "/" },
        { name: "FASHION", to: "/" },
        { name: "TENS’ IDNs", to: "/" },
        { name: "TENS’ Worlds", to: "/" },
    ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="fixed top-0 z-20 w-full">
            <div className="flex items-center justify-between w-full px-2 py-6 bg-white border-b border-black xl:px-16">
                <div className="flex items-center md:mx-auto gap-x-2">
                    <div className="block md:hidden ">
                        <Bars3Icon className="h-5" />
                    </div>
                    <Link
                        to="/"
                        className="text-lg font-semibold tracking-widest md:text-3xl font-kaisei hover:underline underline-offset-2 decoration-1 "
                    >
                        LOREM IPSUM
                    </Link>
                </div>

                <div className="hidden md:block">
                    <Link className="text-xl font-kaisei hover:underline underline-offset-2 decoration-1">
                        SIGN IN
                    </Link>
                </div>
            </div>

            <div className="hidden py-2 bg-white shadow-md lg:block">
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
        </header>
    );
}
