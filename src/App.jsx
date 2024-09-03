import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
import AlumniNavbar from './Users/Roles/Alumini/AlumniNavbar'; // Import AlumniNavbar
import AlumniSidebar from './Users/Roles/Alumini/AlumniSidebar'; // Import AlumniSidebar
import AlumniDashboard from './Users/Roles/Alumini/AlumniDashboard'; // Import additional pages for alumni
import AlumniMentorship from './Users/Roles/Alumini/AlumniMentorship'; // Import additional pages for alumni
import AlumniForums from './Users/Roles/Alumini/AlumniForums'; // Import additional pages for alumni
import AlumniEvents from './Users/Roles/Alumini/AlumniEvents'; // Import additional pages for alumni

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studentform" element={<Studentform />} />
          <Route path="/alumniform" element={<AlumniForm />} />
          <Route path="/studentdashboard" element={<StudentDashBoard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/profile" element={<InitialDetails />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route 
            path="/alumni" 
            element={
              <div style={{ display: 'flex', flex: 1 }}>
                <AlumniNavbar /> {/* Alumni-specific Navbar */}
                <div style={{ display: 'flex', flex: 1 }}>
                  <AlumniSidebar /> {/* Alumni Sidebar */}
                </div>
              </div>
            } 
          />
          <Route 
            path="/alumni-dashboard" 
            element={
              <div style={{ display: 'flex', flex: 1 }}>
                <AlumniNavbar /> {/* Alumni-specific Navbar */}
                <div style={{ display: 'flex', flex: 1 }}>
                  <AlumniSidebar /> {/* Alumni Sidebar */}
                  <main style={{ flex: 1, padding: '20px' }}>
                    <AlumniDashboard /> {/* Dashboard for alumni */}
                  </main>
                </div>
              </div>
            } 
          />
          <Route 
            path="/alumni-mentorship" 
            element={
              <div style={{ display: 'flex', flex: 1 }}>
                <AlumniNavbar /> {/* Alumni-specific Navbar */}
                <div style={{ display: 'flex', flex: 1 }}>
                  <AlumniSidebar /> {/* Alumni Sidebar */}
                  <main style={{ flex: 1, padding: '20px' }}>
                    <AlumniMentorship /> {/* Mentorship for alumni */}
                  </main>
                </div>
              </div>
            } 
          />
          <Route 
            path="/alumni-forums" 
            element={
              <div style={{ display: 'flex', flex: 1 }}>
                <AlumniNavbar /> {/* Alumni-specific Navbar */}
                <div style={{ display: 'flex', flex: 1 }}>
                  <AlumniSidebar /> {/* Alumni Sidebar */}
                  <main style={{ flex: 1, padding: '20px' }}>
                    <AlumniForums /> {/* Forums for alumni */}
                  </main>
                </div>
              </div>
            } 
          />
          <Route 
            path="/alumni-events" 
            element={
              <div style={{ display: 'flex', flex: 1 }}>
                <AlumniNavbar /> {/* Alumni-specific Navbar */}
                <div style={{ display: 'flex', flex: 1 }}>
                  <AlumniSidebar /> {/* Alumni Sidebar */}
                  <main style={{ flex: 1, padding: '20px' }}>
                    <AlumniEvents /> {/* Events for alumni */}
                  </main>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
