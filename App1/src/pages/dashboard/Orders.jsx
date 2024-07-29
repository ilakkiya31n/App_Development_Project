import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
function createData(id, date, name, product, paymentMethod, amount) {
    return { id, date, name, product, paymentMethod, amount };
  }
  
  const rows = [
    createData(
      0,
      '27 July, 2024',
      'Ishwaryaa',
      '30',
      'Online payment',
       '50,200.44',
    ),
    createData(
      2,
      '28 July, 2024',
      'Kanitha',
      '29',
      'Cash on Delivery',
      '48,412.44',
    ),
    createData(
      3,
      '25 July, 2024',
      ' Inpanesan',
      '24',
      'Cash on Delivery',
      '40,452.44',
    ),
    createData(
      4,
      '22 July, 2024',
      ' Vinoth',
      '20',
      'Online Payment',
      '38,455.44',
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }
  
function Orders() {
  return (
    <React.Fragment>
    <Title>Recent High Amount Orders</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Number of Products</TableCell>
          <TableCell>Payment Method</TableCell>
          <TableCell align="right">Sale Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{`Rs.${row.amount}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </React.Fragment>
  )
}

export default Orders