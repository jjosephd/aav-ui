import React from 'react';
import privacyData from './data';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="text-3xl">All Americans Vote Privacy</h1>

      <p>
        This policy (“Privacy Policy”) governs the use of this website (“Site”)
        as well as social media accounts and other communication platforms
        operated by All Americans Vote (“AAV”). At AAV, we are putting forth
        every effort to ensure the privacy and security of information that you
        share with us online. In addition, we urge you to take steps to protect
        the privacy of your personal information, such as safeguarding your
        passwords and logging off of the website after submitting personal
        information.
      </p>

      <div className="privacy-container max-w-[500px]">
        {privacyData.map((data, i) => (
          <div
            key={i}
            className="collapse collapse-plus bg-base-100 border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion-1"
              defaultChecked={i === -1}
            />
            <div className="collapse-title font-semibold bg-slate-200">
              {data.title}
            </div>
            <div className="collapse-content text-sm">
              <div className="p-6">{data.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
