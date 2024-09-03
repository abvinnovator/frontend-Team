import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Events() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {/* List of events */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Alumni Panel Discussion</Typography>
              <Typography variant="body2">Join us for an insightful discussion on career trends.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Register
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat similar blocks for other events */}
      </Grid>
    </div>
  );
}

export default Events;
