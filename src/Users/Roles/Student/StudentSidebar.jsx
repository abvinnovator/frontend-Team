import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function StudentSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button component={Link} to="/studentdashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/mentorship">
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Mentorship" />
        </ListItem>
        <ListItem button component={Link} to="/forums">
          <ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Forums" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default StudentSidebar;
