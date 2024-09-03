import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function StudentHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
const navigate = useNavigate()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
    useEffect(() => {
        const token = localStorage.getItem('token'); // Replace 'token' with your key for auth tokens
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }, []);
    
      const handleLogout = () => {
        
        localStorage.removeItem('token'); // Remove token on logout
        setIsLoggedIn(false); // Update the login status
        navigate("/")
      };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Alumni-Student Portal
        </Typography>
        <input
        type="text"
        placeholder="Search for connections..."

        className="w-48 p-2 mr-4 border border-gray-300 rounded"
      />
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>Home</Link>

        <Link to="" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>Connections</Link>

        <IconButton
          edge="end"
          color="inherit"
          onClick={handleMenu}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></MenuItem>
          {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              >
                Logout
              </button>
            ) : (
              <a href="/login" className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                Login
              </a>
            )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default StudentHeader;
