import React from 'react';

const TopNav = () => {
  return (
    <nav className="w-full p-12">
      <ul className="text-xs md:text-sm flex flex-row justify-center items-center gap-18 ">
        <li>
          <a href="#" className="hover:underline">
            Beyonce
          </a>
        </li>
        <li>
          <a href="#">Kendrick</a>
        </li>
        <li>
          <a href="#" className=" w-24 hover:underline">
            Chris Brown
          </a>
        </li>
        <li>
          <a href="#">Sir</a>
        </li>
        <li>
          <a href="#" className=" w-24">
            The Weekend
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
