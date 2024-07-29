import * as React from 'react';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
  return (
    <Box>
    <Typography
    sx={{ position:"fixed",bottom:70,left:0}}
   variant="body2"
   color="textSecondary"
   align="center"
 >
   {"Copyright © "}
   <Link color="inherit" href="https://material-ui.com/">
    Rythm Inventory
   </Link>{" "}
   {new Date().getFullYear()}
   {"."}
 </Typography>
    <BottomNavigation sx={{ width:"100%",position:"fixed",bottom:0,left:0, backgroundColor: '#90e0ef'}} value={value} onChange={handleChange}>
      
    <BottomNavigationAction
      label="FaceBook"
      icon={<a href="https://www.facebook.com/login/" target="_blank"><FacebookIcon sx={{color:"#050a0f"}}/></a>}
    />
    <BottomNavigationAction
      label="Twitter"
      icon={<a href="https://www.facebook.com/TwitterInc/" target="_blank" ><TwitterIcon sx={{ color: "#050a0f" }} /></a>}
    />
    <BottomNavigationAction
      label="Instagram"
      icon={<a href="https://www.instagram.com/" target="_blank"><InstagramIcon sx={{ color: "#050a0f" }} /></a>}
    />
    <BottomNavigationAction label="LinkedIn" 
     icon={<a href="https://www.linkedin.com/in/n-ilakkiya-ilakkiya-n-324495271/" target="_blank" ><LinkedInIcon sx={{ color: "#050a0f" }} /></a>}/>
 
   
 </BottomNavigation>
 </Box>
  )
}

export default Footer