import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function AlumniSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" noWrap sx={{ mb: 2 }}>
          Alumni Portal
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Your Logo Here
        </Typography>
      </Box>
      <List>
        <ListItem button component={Link} to="/alumni-dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/alumni-mentorship">
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Mentorship" />
        </ListItem>
        <ListItem button component={Link} to="/alumni-forums">
          <ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Forums" />
        </ListItem>
        <ListItem button component={Link} to="/alumni-events">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AlumniSidebar;
