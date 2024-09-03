import React from 'react';

import InitialDetails from './Resume/Initialdetails';
import StudentHeader from './StudentHeader';
import StudentDashBoard from './StudentDashBoard';
import StudentSidebar from './StudentSidebar';

const Student = () => {
  return (
    <div className="flex flex-col h-screen">
      <StudentHeader />
      <div className="flex flex-1">
        <StudentSidebar />
        <StudentDashBoard />
      </div>
    </div>
  );
};

export default Student;
