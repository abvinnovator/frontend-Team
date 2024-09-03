import React from 'react';

const AlumniForm = () => {
  return (
    <div className="flex flex-col font-semibold text-gray-900 p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-6 text-center">Alumni Signup Form</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-2">First Name</label>
          <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-2">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="dob" className="block mb-2">Date of Birth</label>
          <input type="date" id="dob" name="dob" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="college" className="block mb-2">College/University</label>
          <input type="text" id="college" name="college" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="graduationYear" className="block mb-2">Year of Graduation</label>
          <input type="text" id="graduationYear" name="graduationYear" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="degree" className="block mb-2">Degree Obtained</label>
          <input type="text" id="degree" name="degree" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="currentCompany" className="block mb-2">Current Company</label>
          <input type="text" id="currentCompany" name="currentCompany" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block mb-2">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AlumniForm;
