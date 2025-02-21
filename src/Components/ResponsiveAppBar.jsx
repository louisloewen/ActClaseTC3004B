import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar({ isAuthenticated, logout }) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    if (e === "Logout") {
      logout();
    } else {
      navigate("/" + e.toLowerCase());
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/home')}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        {['Home', 'Lista de Items', 'Agregar Item'].map((page) => (
          <Button key={page} color="inherit" onClick={() => handleCloseNavMenu(page)}>
            {page}
          </Button>
        ))}
        <Button color="inherit" onClick={() => handleCloseNavMenu(isAuthenticated ? "Logout" : "Login")}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
