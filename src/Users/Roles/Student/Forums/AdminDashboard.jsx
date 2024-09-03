import React, { useState, useEffect } from 'react';
import { Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching requests
    setRequests([
      { id: 1, forumType: 'Career Advice', description: 'Looking for career guidance' },
      { id: 2, forumType: 'Mentorship', description: 'Seeking mentorship for tech career' },
    ]);
  }, []);

  const handleAction = (requestId, action) => {
    // Simulate accepting/rejecting request
    console.log(`Request ID: ${requestId} has been ${action}`);
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <List>
        {requests.map((request) => (
          <div key={request.id}>
            <ListItem>
              <ListItemText
                primary={request.forumType}
                secondary={request.description}
              />
              <Button variant="contained" color="success" onClick={() => handleAction(request.id, 'accepted')}>
                Accept
              </Button>
              <Button variant="contained" color="error" onClick={() => handleAction(request.id, 'rejected')}>
                Reject
              </Button>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default AdminDashboard;
