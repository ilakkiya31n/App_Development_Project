import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
function preventDefault(event) {
  event.preventDefault();
}
function Client() {
    event.preventDefault();
  return (
    <React.Fragment>
      <Title>Recent Clients</Title>
      <Typography component="p" sx={{padding:"20px",fontSize:40}}variant="h4">
        1500+
       </Typography>
      <Typography  sx={{ flex: 1}}>
        on Last Month
      </Typography>
      <div>
        <Link color="secondary" href="#" onClick={preventDefault}>
         learn more.
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Client