import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [personalEmail, setPersonalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/auth/login", {
        personalEmail,
        password,
      });

      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        navigate("/student");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="personalEmail" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="personalEmail"
            autoComplete="off"
            placeholder="Personal Email"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        <div className="flex justify-between items-center mt-4">
          <Link to="/forgotPassword" className="text-blue-500">Forgot Password?</Link>
          <p>Don't Have Account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
