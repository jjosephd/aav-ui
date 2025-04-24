import React, { useState } from 'react';

const SweepstakesForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    primaryAddress: '',
    secondaryAddress: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-container grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.phoneNumber}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            name="primaryAddress"
            placeholder="Address 1"
            value={formData.primaryAddress}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            name="secondaryAddress"
            placeholder="Address 2"
            value={formData.secondaryAddress}
            className="border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SweepstakesForm;
