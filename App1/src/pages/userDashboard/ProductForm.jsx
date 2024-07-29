import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProductForm({ open, product, onClose, onSubmit }) {
  const [formState, setFormState] = React.useState({
    ProductName: '',
    count: '',
    Amount: ''
  });

  React.useEffect(() => {
    if (product) {
      setFormState({
        ProductName: product.ProductName,
        count: product.count,
        Amount: product.Amount
      });
    } else {
      setFormState({
        ProductName: '',
        count: '',
        Amount: ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    onSubmit({
      ...formState,
      No: product ? product.No : undefined
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {product ? 'Edit Product' : 'Add Product'}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Product Name"
            name="ProductName"
            value={formState.ProductName}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Count(No/Kg/Litre)"
            name="count"
            value={formState.count}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Amount"
            name="Amount"
            value={formState.Amount}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {product ? 'Update' : 'Add'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProductForm;
