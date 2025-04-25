import React from 'react';

const SideNav = () => {
  return (
    <div>
      <nav className="hidden md:flex bg-purple-900 text-white text-xs rounded-lg shadow-lg pr-6 w-5/5 ">
        <ul className="flex flex-col ">
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="eligibility" className="text-white">
              Eligibility
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#disclaimer" className="text-white">
              Disclaimer
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#sweepstakes-period" className="text-white">
              Sweepstakes Period
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#prize" className="text-white">
              Prize
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#odds-taxes" className="text-white">
              Odds; Taxes; Etc
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#entrant-identity" className="text-white">
              Identity of Entrant
            </a>
          </li>

          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#enter-instructions" className="text-white">
              How to Enter
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#sweepstakes-rules" className="text-white">
              Sweepstakes Rules
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#general-release" className="text-white">
              GENERAL RELEASE
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#winner-agreement" className="text-white">
              Use of Winner Name, Likeness, and Information
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#affadavit-release" className="text-white">
              Affidavit & Release
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#winner-list" className="text-white">
              Winner List; Rules Request
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#intellectual-property" className="text-white">
              Intellectual Property Notice
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#disputes" className="text-white">
              Disputes and Jurisdiction
            </a>
          </li>
          <li className="py-2 px-4 rounded-lg hover:underline">
            <a href="#miscellaneous" className="text-white">
              Miscellaneous
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
