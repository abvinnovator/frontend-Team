import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';

function AlumniNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenu = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alumni Portal
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Link to="/alumni-dashboard" style={linkStyle}>Home</Link>
            <Link to="/alumni-connections" style={linkStyle}>Connections</Link>
            <Link to="/alumni-events" style={linkStyle}>Events</Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, textAlign: 'center' }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #6ab04c 30%, #badc58 90%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #55efc4 30%, #00b894 90%)',
                },
                padding: '8px 16px',
              }}
              onClick={() => navigate('/hire-expert')}
            >
              Hire an Expert
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleNotificationMenu}
            >
              <IoNotificationsOutline className='w-6 h-6 text-white' />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile" style={menuItemStyle}>Profile</Link>
            </MenuItem>
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout} style={menuItemStyle}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={() => navigate('/login')} style={menuItemStyle}>Login</MenuItem>
            )}
          </Menu>
          {/* Notification menu - you can customize this with actual notifications */}
          <Menu
            anchorEl={notificationAnchorEl}
            keepMounted
            open={Boolean(notificationAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notification 1</MenuItem>
            <MenuItem onClick={handleClose}>Notification 2</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <main style={{ flex: 1, padding: '20px', marginTop: '64px' }}>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

// Styles for links and menu items
const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '4px',
};

const menuItemStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '10px 20px',
  borderRadius: '4px',
};

export default AlumniNavbar;
