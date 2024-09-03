import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleJoinClick = () => {
    if (selectedRole === 'Student') {
      navigate('/studentform', { state: { transition: true } });
    } else if (selectedRole === 'Alumni') {
      navigate('/alumniform',{state:{transition:true}});
    }
  };

  return (
    <div className="flex justify-center items-center h-screen from-slate-800 to-gray-500">
      <div className="text-black-900 flex flex-col items-center">
        <div className="pb-4 mx-4 text-gray-900">
          <h1 className="text-center text-2xl font-bold">Join as Alumni or Student</h1>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <div
            className={`relative p-6 sm:p-8 w-56 h-56 sm:w-64 sm:h-64 border rounded-lg shadow-md cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'Student' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleSelect('Student')}
          >
            <div
              className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full ${selectedRole === 'Student' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
            ></div>
            <h2 className="text-lg sm:text-xl font-semibold">Student</h2>
            <p className="text-sm sm:text-base text-center mt-2">Sign up as a student.</p>
          </div>

          <div
            className={`relative p-6 sm:p-8 w-56 h-56 sm:w-64 sm:h-64 border rounded-lg shadow-md cursor-pointer flex flex-col items-center justify-center ${selectedRole === 'Alumni' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleSelect('Alumni')}
          >
            <div
              className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full ${selectedRole === 'Alumni' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
            ></div>
            <h2 className="text-lg sm:text-xl font-semibold">Alumni</h2>
            <p className="text-sm sm:text-base text-center mt-2">Sign up as an alumni.</p>
          </div>
        </div>

        <button
          onClick={handleJoinClick}
          className={`mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${selectedRole ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!selectedRole}
        >
          {selectedRole ? `Join as ${selectedRole}` : 'Select a role'}
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <a href="/Login" className="text-blue-500 hover:text-blue-700 hover:underline pl-1">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
