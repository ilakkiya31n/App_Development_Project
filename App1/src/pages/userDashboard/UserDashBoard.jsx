import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../dashboard/listItems';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

const defaultTheme = createTheme();

function UserDashBoard() {
  const [open, setOpen] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [productFormOpen, setProductFormOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [rows, setRows] = React.useState([
    { No: 1, ProductName: 'Mixed Vegetables', count: 1, Amount: 'Rs.540.00' },
    { No: 2, ProductName: 'GoldWinner', count: 2, Amount: 'Rs.90.00' },
    { No: 3, ProductName: 'Apple', count: '1 kg', Amount: 'Rs.250.00' },
    // ... other products
  ]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setRows(rows.filter(row => row.No !== selectedProduct.No));
    setModalOpen(false);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setProductFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setProductFormOpen(true);
  };

  const handleFormClose = () => {
    setProductFormOpen(false);
    setSelectedProduct(null);
  };

  const handleFormSubmit = (product) => {
    if (selectedProduct) {
      setRows(rows.map(row => (row.No === product.No ? product : row)));
    } else {
      setRows([...rows, { ...product, No: rows.length + 1 }]);
    }
    handleFormClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" sx={{ backgroundColor: '#03045e' }} open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Product Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 4 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add Product
            </Button>
          </Box>
          <ProductTable rows={rows} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
      </Box>

      <ProductForm
        open={productFormOpen}
        product={selectedProduct}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />

      <DeleteConfirmationModal
        open={modalOpen}
        product={selectedProduct}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </ThemeProvider>
  );
}

export default UserDashBoard;
