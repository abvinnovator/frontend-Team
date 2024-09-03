import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Mentorship() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mentorship Program
      </Typography>
      <Grid container spacing={3}>
        {/* List of available mentors */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">Software Engineer at Google</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Request Mentorship
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat similar blocks for other mentors */}
      </Grid>
    </div>
  );
}

export default Mentorship;
