import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const [step, setStep] = useState(1);
  const [verificationData, setVerificationData] = useState({
    collegeEmail: '',
    verificationCode: '',
    regdNo: '',
    dob: ''
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    personalEmail: '',
    mobileNo: '',
    branch: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedStep = localStorage.getItem('registrationStep');
    const storedVerificationData = localStorage.getItem('verificationData');
    const storedIsVerified = localStorage.getItem('isVerified');

    if (storedStep) {
      setStep(parseInt(storedStep, 10));
    }

    if (storedVerificationData) {
      setVerificationData(JSON.parse(storedVerificationData));
    }

    if (storedIsVerified) {
      setIsVerified(JSON.parse(storedIsVerified));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('registrationStep', step);
    localStorage.setItem('verificationData', JSON.stringify(verificationData));
    localStorage.setItem('isVerified', JSON.stringify(isVerified));
  }, [step, verificationData, isVerified]);

  useEffect(() => {
    // Redirect back to step 1 if not verified
    if (step === 2 && !isVerified) {
      setStep(1);
    }
  }, [step, isVerified]);

  const handleVerificationChange = (e) => {
    const { name, value } = e.target;
    setVerificationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/send-verification-code', { collegeEmail: verificationData.collegeEmail });
      if (response.data.status) {
        toast.success('Verification code sent!');
        setIsVerificationSent(true);
      } else {
        toast.error(response.data.message || 'Failed to send verification code');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error sending verification code');
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/verify-student', verificationData);
      if (response.data.status) {
        toast.success('Verification successful!');
        setIsVerified(true);
        setStep(2);
        // Pre-fill the verified data in the second step
        setFormData(prevData => ({
          ...prevData,
          collegeEmail: verificationData.collegeEmail,
          regdNo: verificationData.regdNo,
          dob: verificationData.dob
        }));
      } else {
        toast.error(response.data.message || 'Verification failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error during verification');
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/auth/signup/student', {
        ...formData,
        collegeEmail: verificationData.collegeEmail,
        regdNo: verificationData.regdNo,
        dob: verificationData.dob
      });
      if (response.data.status) {
        toast.success('Registration successful!');
        // Clear local storage after successful registration
        localStorage.removeItem('registrationStep');
        localStorage.removeItem('verificationData');
        localStorage.removeItem('isVerified');
        localStorage.setItem("token", response.data.token);
        navigate("/student");
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error during registration');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Student Registration
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {step === 1 ? (
            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <div>
                <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700">College Email</label>
                <input type="email" id="collegeEmail" name="collegeEmail" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={verificationData.collegeEmail} onChange={handleVerificationChange} />
              </div>
              <div>
                <label htmlFor="regdNo" className="block text-sm font-medium text-gray-700">Registration Number</label>
                <input type="text" id="regdNo" name="regdNo" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={verificationData.regdNo} onChange={handleVerificationChange} />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" name="dob" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={verificationData.dob} onChange={handleVerificationChange} />
              </div>
              {!isVerificationSent ? (
                <div>
                  <button type="button" onClick={handleSendVerificationCode} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Verification Code
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">Verification Code</label>
                    <input type="text" id="verificationCode" name="verificationCode" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={verificationData.verificationCode} onChange={handleVerificationChange} />
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Verify
                    </button>
                  </div>
                </>
              )}
            </form>
          ): (
            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div>
                <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700">College Email</label>
                <input type="email" id="collegeEmail" name="collegeEmail" readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" value={verificationData.collegeEmail} />
              </div>
              <div>
                <label htmlFor="regdNo" className="block text-sm font-medium text-gray-700">Registration Number</label>
                <input type="text" id="regdNo" name="regdNo" readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" value={verificationData.regdNo} />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" name="dob" readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" value={verificationData.dob} />
              </div>
              {/* Add the rest of your form fields here */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.firstName} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.lastName} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="personalEmail" className="block text-sm font-medium text-gray-700">Personal Email</label>
                <input type="email" id="personalEmail" name="personalEmail" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.personalEmail} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" id="mobileNo" name="mobileNo" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.mobileNo} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                <input type="text" id="branch" name="branch" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.branch} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.password} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.confirmPassword} onChange={handleFormChange} />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select id="gender" name="gender" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={formData.gender} onChange={handleFormChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentForm;