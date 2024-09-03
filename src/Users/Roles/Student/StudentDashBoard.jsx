import React from 'react';
import { Paper, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import StudentSidebar from './StudentSidebar';

function StudentDashBoard() {
  return (
    <div>
      
      <Typography variant="h4" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Mentorship Program</Typography>
              <Typography variant="body2">Join or request mentorship from alumni in your field.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Mentorship
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Alumni Connections</Typography>
              <Typography variant="body2">Connect with alumni based on your career interests.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Connections
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Discussion Forums</Typography>
              <Typography variant="body2">Participate in discussions and seek advice from alumni.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Forums
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: '20px', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Upcoming Events
            </Typography>
            <Typography variant="body2">Don't miss out on our upcoming webinars, panel discussions, and alumni meetups!</Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              View Events
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentDashBoard;
