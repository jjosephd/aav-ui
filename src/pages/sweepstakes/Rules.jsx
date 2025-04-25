import React from 'react';
import SideNav from './SideNav';

const Rules = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        {' '}
        <div className="col-span-1 side-nav-container pb-24">
          <SideNav />
        </div>
        <div className="content-container flex flex-col">
          <header>
            <h2>
              AAV (All Americans Vote) Cowboy Carter Suite Access Sweepstakes
            </h2>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Rules;
