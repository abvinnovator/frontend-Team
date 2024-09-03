import React, { useState } from 'react';
import { Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function UserDashboard() {
  const [open, setOpen] = useState(false);
  const [forumType, setForumType] = useState('');
  const [description, setDescription] = useState('');

  const handleClickOpen = (type) => {
    setForumType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Simulate sending request
    console.log('Request sent:', { forumType, description });
    handleClose();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Discussion Forums
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen('Career Advice')}>
        Join Career Advice Forum
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen('Mentorship')}>
        Join Mentorship Forum
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen('Technical')}>
        Join Technical Forum
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Access</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserDashboard;
