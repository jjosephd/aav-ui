import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/20/solid';
import default_logo from '../assets/logo/default_logo.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      } bg-purple-900 p-4 md:p-6 lg:p-8`}
    >
      <ul className="flex justify-between items-center">
        <li className="privacy-link hidden md:block">
          <Link to="/privacy-policy" className="text-white">
            <span className="text-white inline-block transform transition-transform duration-300 hover:scale-105">
              Privacy Policy
            </span>
          </Link>
        </li>
        <li className="text-white">
          <Link to="/">
            <img src={default_logo} alt="Logo" className="h-6" />
          </Link>
        </li>
        <li className="privacy-link hidden md:block">
          <Link to="/privacy-policy">
            <span className="text-white inline-block transform transition-transform duration-300 hover:scale-105">
              Sweepstakes Rules
            </span>
          </Link>
        </li>
        <li className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-white" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
