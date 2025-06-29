import React, { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Header = () => {
  const { user, loading, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Sign-out successful."))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
      </li>
      <li>
        <Link to="/courses" className="hover:text-blue-500 transition">
          Courses
        </Link>
      </li>
      <li>
        <Link to="/add-courses" className="hover:text-blue-500 transition">
          Add Courses
        </Link>
      </li>
    </>
  );

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Course Management System</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700">{links}</ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {loading ? (
            <span className="loading loading-dots loading-xl"></span>
          ) : user ? (
            <div className="relative">
              <img
                className="h-12 w-12 rounded-full cursor-pointer border"
                src={user?.photoURL}
                alt="User"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <button
                onClick={handleLogout}
                className={`absolute right-0 mt-2 px-4 py-2 bg-red-500 text-white rounded shadow-md z-10 
                ${
                  isDropdownOpen ? "block" : "hidden"
                } hover:bg-red-600 transition`}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
