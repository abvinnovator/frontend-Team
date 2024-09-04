// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 


import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Studentform from './Users/Roles/Studentform';
import AlumniForm from './Users/Roles/AlumniForm';
import Student from './Users/Roles/Student/Student';

import InitialDetails from './Users/Roles/Student/Resume/Initialdetails';
import StudentDashBoard from './Users/Roles/Student/StudentDashBoard';
import Forums from './Users/Roles/Student/Forums';
import UserDashboard from './Users/Roles/Student/Forums/UserRequest';
import AdminDashboard from './Users/Roles/Student/Forums/AdminDashboard';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/studentform' element={<Studentform />} />
          <Route path='/alumniform' element={<AlumniForm />} />
          <Route path='/studentdashboard' element={<StudentDashBoard />} />
        <Route path='/student' element={<Student /> } />
        <Route path='/profile' element={<InitialDetails />} />
        <Route path='/forums' element={<Forums /> } />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
