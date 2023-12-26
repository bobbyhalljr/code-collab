// components/layout/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="text-white text-lg font-semibold md:inline">Code Collab</span>
        </div>

        {/* Menu Button (for Medium Screens and Below) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Navbar Menu (Hidden on Small Screens) */}
        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} items-center space-x-4`}>
          {/* Navbar Links */}
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
          <Link href="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/challenges" className="text-white hover:text-gray-300">
            Challenges
          </Link>
          <Link href="/live" className="text-white hover:text-gray-300">
            Live Session
          </Link>
          <Link href="/pricing" className="text-white hover:text-gray-300">
            Pricing
          </Link>
          {/* Dark Mode Toggle (Hidden on Small Screens) */}
          <div className="hidden md:block">
            {/* Add your dark mode toggle button here */}
            {/* Example: <DarkModeToggle /> */}
          </div>
        </div>

        {/* Dark Overlay and Close Menu Button (Visible on Small Screens when Menu is Open) */}
        {isMenuOpen && (
          <div className="fixed md:hidden top-0 z-20 left-0 h-screen w-screen bg-black opacity-90" onClick={toggleMenu}></div>
        )}
        {isMenuOpen && (
          <ul className='z-20 flex md:hidden flex-col fixed top-1/3 left-1/3 space-y-10 justify-center items-center text-3xl'>
            <h3 className='text-2xl font-bold tracking-wide text-gray-600'>Menu</h3>
            {/* Navbar Links */}
            <li> 
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-white hover:text-gray-400">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-white hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/challenges" className="text-white hover:text-gray-400">
                Challenges
              </Link>
            </li>
            <li>
              <Link href="/live" className="text-white hover:text-gray-400">
                Live Session
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white hover:text-gray-400">
                Pricing
              </Link>
            </li>

            {/* Dark Mode Toggle (Hidden on Small Screens) */}
            <div className="hidden md:block">
              {/* Add your dark mode toggle button here */}
              {/* Example: <DarkModeToggle /> */}
            </div>
          </ul>
        )}
        {isMenuOpen && (
          <button
            className="md:hidden absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
