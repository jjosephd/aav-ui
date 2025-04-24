import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/20/solid';

const NavBar = () => {
  return (
    <>
      <nav className="nav-container min-w-screen bg-black p-8">
        <ul className="flex justify-between">
          <li className="text-white">Logo</li>
          <li className="privacy-link hidden md:block">
            <Link to="/privacy-policy" className=" text-white">
              Privacy Policy
            </Link>
          </li>
          <li className="privacy-link hidden md:block">
            <Link to="/privacy-policy" className=" text-white">
              Sweepstakes Rules
            </Link>
          </li>
          <li className="md:hidden">
            <Bars3Icon className="h-6 w-6 text-white" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
