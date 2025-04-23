import React from 'react';
import privacyData from './data';

const PrivacyPolicy = () => {
  return (
    <div>
      {privacyData.map((data, i) => (
        <div
          key={i}
          className="collapse collapse-plus bg-base-100 border border-base-300"
        >
          <input type="radio" name="my-accordion-1" defaultChecked={i === 0} />
          <div className="collapse-title font-semibold">{data.title}</div>
          <div className="collapse-content text-sm">{data.content}</div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
