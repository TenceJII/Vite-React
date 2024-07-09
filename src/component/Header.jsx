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
  return <></>;
}
