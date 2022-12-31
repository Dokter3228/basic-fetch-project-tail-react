import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-screen h-16 flex space-x-8 justify-center items-center bg-gray-400 shadow-md rounded-sm">
      <NavLink to="/" className="text-xl">
        Home
      </NavLink>
      <NavLink to="about" className="text-xl">
        About
      </NavLink>
    </header>
  );
}
