import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import logo from '../assets/Rythm.png';
function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setOpen(false); // Close the drawer after navigation
  };

  const iconMapping = {
    Dashboard: <DashboardIcon />,
    Products: <ShoppingCartIcon />,
    Categories: <CategoryIcon />,
    Suppliers: <LocalShippingIcon />,
    'Purchase Orders': <AssignmentTurnedInIcon />,
    'Sales Orders': <MonetizationOnIcon />,
    Inventory: <InventoryIcon />,
    Report: <ReportIcon />,
    'Help/Support': <HelpIcon />
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Dashboard', 'Products', 'Categories', 'Suppliers', 'Purchase Orders', 'Sales Orders', 'Inventory'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleNavigation(`/${text.toLowerCase().replace(' ', '-')}`)}>
              <ListItemIcon>
                {iconMapping[text]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Report', 'Help/Support'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {iconMapping[text]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#03045e' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Rythm Inventory
          </Typography>
          <Button color="inherit">
            <span
              style={{ color: 'white', fontSize: '15px' }}
              onClick={() => {
                navigate('/user');
              }}
            >
              Login
            </span>
          </Button>
          <Button color="inherit">
            <span
              style={{ color: 'white', fontSize: '15px' }}
              onClick={() => {
                navigate('/register');
              }}
            >
              Sign-Up
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
