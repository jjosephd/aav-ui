import React from 'react';
import privacyData from './data';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const midpoint = Math.ceil(privacyData.length / 2); // Create midpoint to divide data
  const leftData = privacyData.slice(0, midpoint); // Left column data
  const rightData = privacyData.slice(midpoint); // Right column data
  return (
    <div>
      <div className="privacy-container  h-screen p-8">
        <header className="header-container overflow-scroll m-2 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center">
            All Americans Vote Privacy Policy
          </h1>

          <div className="menu dropdown-content mb-12">
            <p className="m-4 text-xs text-center max-w-[800px] mx-auto">
              This policy (“Privacy Policy”) governs the use of this website
              (“Site”) as well as social media accounts and other communication
              platforms operated by All Americans Vote (“AAV”). At AAV, we are
              putting forth every effort to ensure the privacy and security of
              information that you share with us online. In addition, we urge
              you to take steps to protect the privacy of your personal
              information, such as safeguarding your passwords and logging off
              of the website after submitting personal information.
              <br />
            </p>
            {/**
             * Navigation
             */}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="accordion-container join join-vertical w-full">
            {leftData.map((data, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-100 border border-base-300"
              >
                <input
                  type="radio"
                  name="accordion-left"
                  defaultChecked={false}
                />
                <div className="collapse-title font-semibold">{data.title}</div>
                <div className="collapse-content text-sm">
                  <div className="p-6">{data.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="accordion-container join join-vertical w-full">
            {rightData.map((data, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-100 border border-base-300"
              >
                <input
                  type="radio"
                  name="accordion-right"
                  defaultChecked={false}
                />
                <div className="collapse-title font-semibold">{data.title}</div>
                <div className="collapse-content text-sm">
                  <div className="p-6">{data.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
