import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import { Link as RouterLink } from 'react-router-dom';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton  component={RouterLink} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
   
      <ListItemText primary="Dashboard" />
 
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CategoryIcon/>
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalShippingIcon/>
      </ListItemIcon>
      <ListItemText primary="Suppliers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       <AssignmentTurnedInIcon/>
      </ListItemIcon>
      <ListItemText primary="Purchase Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       <MonetizationOnIcon/>
      </ListItemIcon>
      <ListItemText primary="Sales Orders" />
    </ListItemButton>
   
    <ListItemButton>
      <ListItemIcon>
        <InventoryIcon/>
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ReportIcon/>
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       <HelpIcon/>
      </ListItemIcon>
      <ListItemText primary="Help/Support" />
    </ListItemButton>
   
  </React.Fragment>
);