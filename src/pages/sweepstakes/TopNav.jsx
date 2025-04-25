import React from 'react';

const TopNav = () => {
  return (
    <nav className="w-full p-12">
      <ul className="flex flex-row justify-center items-center gap-24">
        <li>
          <a href="#">Beyonce</a>
        </li>
        <li>
          <a href="#">Kendrick</a>
        </li>
        <li>
          <a href="#">Chris Brown</a>
        </li>
        <li>
          <a href="#">Sir</a>
        </li>
        <li>
          <a href="#">The Weekend</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
