import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Buttoncla(backgroundColor,text,event) {
  return (
    <Stack spacing={2} direction="row">
   
    <Button sx={{
        backgroundColor:backgroundColor?backgroundColor:"transparent"
    }}
        onClick={event?event:()=>{}}variant="contained">{text}</Button>
  
  </Stack>
  )
}

export default Buttoncla