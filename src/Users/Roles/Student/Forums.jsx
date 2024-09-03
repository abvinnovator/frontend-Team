import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Forums() {
  const [open, setOpen] = useState(false);
  const [selectedForum, setSelectedForum] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = (forumType) => {
    setSelectedForum(forumType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDescription('');
  };

  const handleSubmit = () => {
    // Simulate sending request to backend
    console.log(`Request sent for ${selectedForum} with description: ${description}`);
    handleClose();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Discussion Forums
      </Typography>
      <Grid container spacing={3}>
        {/* Forum Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Career Advice</Typography>
              <Typography variant="body2">Ask questions and get advice from experienced alumni.</Typography>
              <Button variant="contained" color="primary" onClick={() => handleOpen('Career Advice')}>
                Join Forum
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Mentorship</Typography>
              <Typography variant="body2">Connect with mentors for personalized guidance.</Typography>
              <Button variant="contained" color="primary" onClick={() => handleOpen('Mentorship')}>
                Join Forum
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Technical Discussions</Typography>
              <Typography variant="body2">Engage in technical discussions with peers and experts.</Typography>
              <Button variant="contained" color="primary" onClick={() => handleOpen('Technical Discussions')}>
                Join Forum
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Access</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Forums;
