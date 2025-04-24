import React, { useState } from 'react';
import {
  UserIcon,
  EnvelopeIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid';
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

  const onClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      primaryAddress: '',
      secondaryAddress: '',
    });
  };
  return (
    <div className="">
      <div className="shadow-md p-8">
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Sweepstakes Form</h2>

          <div className="form-container grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="input input-sm md:input-md">
              <UserIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
            <label className="input input-sm md:input-md">
              <UserIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
            <label className="input input-sm md:input-md">
              <EnvelopeIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
            <label className="input input-sm md:input-md">
              <DevicePhoneMobileIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
            <label className="input input-sm md:input-md">
              <HomeIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="primaryAddress"
                placeholder="Primary Address"
                value={formData.primaryAddress}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
            <label className="input input-sm md:input-md">
              <HomeIcon className="w-6 h-6 fill-slate-200" />
              <input
                type="text"
                name="secondaryAddress"
                placeholder="Secondary Address"
                value={formData.secondaryAddress}
                onChange={handleChange}
                className="text-xs "
              />
            </label>
          </div>
        </form>
        <div className="btn-container flex flex-col md:flex-row w-full gap-4 justify-center items-center p-4">
          <button
            className="btn btn-ghost border-1 border-red-600/40 hover:bg-red-500/60 transform hover:scale-105 hover:ease-in duration-200"
            onClick={onClear}
          >
            Clear Form
          </button>
          <button className="btn btn-ghost border-1 border-emerald-400/40 hover:bg-emerald-300/60 transform hover:scale-105 hover:ease-in duration-200">
            Submit Form
          </button>
        </div>
      </div>
      <div className="radio-container shadow-md">
        <h2>What’s your biggest priority right now?</h2>
        <ul>
          <li>
            <label htmlFor="" className="label ">
              <input
                type="radio"
                name="radio"
                id="radio-1"
                className="radio radio-outlined"
              />
              <span className="label-text text-xs ">
                Living well: Brunch, Beyoncé, and a little escape
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="" className="label">
              <input
                type="radio"
                name="radio"
                id="radio-1"
                className="radio radio-outlined"
              />
              <span className="label-text text-xs ">
                Feeling whole: Mind, body, and peace intact
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="" className="label ">
              <input
                type="radio"
                name="radio"
                id="radio-1"
                className="radio radio-outlined"
              />
              <span className="label-text text-xs ">
                My people in power: Not just going viral, but making moves
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="" className="label">
              <input
                type="radio"
                name="radio"
                id="radio-1"
                className="radio radio-outlined"
              />
              <span className="label-text text-xs ">
                Just making it: Rent paid, gas in the car, and one less thing to
                stress about
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SweepstakesForm;
