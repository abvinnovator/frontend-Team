import React from 'react';
import { useNavigate } from 'react-router-dom';

const AluminiForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/alumni'); // Replace '/alumni' with the correct path to your next page
  };

  return (
    <div className="flex flex-col font-semibold text-gray-900 p-10 md:p-20 max-w-lg mx-auto bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl mb-8 text-center text-blue-600 font-bold">Alumni Signup Form</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="dob" className="block mb-2 text-gray-700">Date of Birth</label>
            <input type="date" id="dob" name="dob" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="college" className="block mb-2 text-gray-700">College/University</label>
            <input type="text" id="college" name="college" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="graduationYear" className="block mb-2 text-gray-700">Year of Graduation</label>
            <input type="text" id="graduationYear" name="graduationYear" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="degree" className="block mb-2 text-gray-700">Degree Obtained</label>
            <input type="text" id="degree" name="degree" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="currentCompany" className="block mb-2 text-gray-700">Current Company</label>
            <input type="text" id="currentCompany" name="currentCompany" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="jobTitle" className="block mb-2 text-gray-700">Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        
        <button
          type="submit" onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AluminiForm;
