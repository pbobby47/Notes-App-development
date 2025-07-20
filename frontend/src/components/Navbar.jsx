import React from "react";
import { useState } from "react";
import { useAuth } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-blue-600">MyApp</div>

      {/* Middle: Search Bar */}
      <div className="flex-1 mx-4 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right: Auth Actions */}

      {/* // ! Conditional Rendering */}

      {!user ? (
        <>
          <div className="flex items-center gap-4">
            <NavLink
              to="/signin"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Signin
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Signup
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Hi, {user.name}</span>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
