import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { borderColor, fontSize } from '@mui/system';
import In1 from '../../assets/I1.jpeg';
const itemData = [
  {
    img:"https://images.pexels.com/photos/7314474/pexels-photo-7314474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: 'Store',
  },
  {
    img: 'https://images.pexels.com/photos/7019219/pexels-photo-7019219.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Stock of things',
  },
  {
    img: 'https://images.pexels.com/photos/11835350/pexels-photo-11835350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Things',
  },
  {
    img: 'https://images.pexels.com/photos/7947704/pexels-photo-7947704.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'sale',
  },
  {
    img: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'marketing',
  },
  {
    img: 'https://images.pexels.com/photos/7310095/pexels-photo-7310095.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'order',
  },
  {
    img: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'tracking',
  },
  {
    img: 'https://images.pexels.com/photos/3912977/pexels-photo-3912977.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Purchase',
  },
  {
    img: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Master Card',
  }
  
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={8}>
            <Item sx={{boxShadow:"none",border:"none",borderRadius:0,justifyContent:"left"}}>
              <Typography sx={{fontSize:"50px",color:"#565e8c"}}>
              Effortlessly track stock movement from shelf to cart with Rythm inventory management system.
              </Typography>
              <Divider orientation="horizontal" sx={{padding :"2px 2px 2px 2px",backgroundColor:"black"}}variant="middle" flexItem />
              <Typography sx={{fontSize:"16px",color:"#a1a5a6"}}>
              An Inventory Management App is a software solution designed to help businesses manage their stock and inventory more efficiently. It typically includes features for tracking inventory levels, orders, sales, and deliveries.
              </Typography>
             
                <Box sx={{ display: "flex", flexDirection: "row" }}>

                <Box sx={{ backgroundColor: "#81d2eb", color: "#41468a", width: "50%", padding: "10px" ,margin:"10px",borderRadius:"50%"}}>
                <Typography sx={{fontSize:"30px"}}>
                8000+
               </Typography>
                <Typography sx={{fontSize:"14px"}}>
                 Warehouses
               </Typography>
                </Box>
                <Box sx={{ backgroundColor: "#81d2eb", color: "#41468a", width: "50%", padding: "10px" ,margin:"10px",borderRadius:"50%"}}>
                <Typography sx={{fontSize:"30px"}}>
                 1900+
               </Typography>
                <Typography sx={{fontSize:"14px"}}>
                Stores Managed
               </Typography>
                </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ backgroundColor: "#81d2eb", color: "#41468a", width: "50%", padding: "10px" ,margin:"5px",borderRadius:"50%"}}>
                <Typography sx={{fontSize:"30px"}}>
                750Mn+
               </Typography>
                <Typography sx={{fontSize:"14px"}}>
                Annual transcation rate
               </Typography>
                </Box>
                <Box sx={{ backgroundColor: "#81d2eb", color: "#41468a", width: "50%", padding: "10px" ,margin:"10px",borderRadius:"50%"}}>
                <Typography sx={{fontSize:"30px"}}>
                3500+
               </Typography>
                <Typography sx={{fontSize:"14px"}}>
                Clients
               </Typography>
                </Box>
                </Box>
              
              
             
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{boxShadow:"none",border:"none",borderRadius:0}}>
              <ImageList sx={{ width: 440, height: 450 }} cols={3} rowHeight={150}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{boxShadow:"none",border:"none",borderRadius:0}}>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          sx={{ position: "fixed", bottom: 70, left: 0 }}
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
        <BottomNavigation
          sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, backgroundColor: '#90e0ef' }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="FaceBook"
            icon={<a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ color: "#050a0f" }} /></a>}
          />
          <BottomNavigationAction
            label="Twitter"
            icon={<a href="https://www.facebook.com/TwitterInc/" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ color: "#050a0f" }} /></a>}
          />
          <BottomNavigationAction
            label="Instagram"
            icon={<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ color: "#050a0f" }} /></a>}
          />
          <BottomNavigationAction
            label="LinkedIn"
            icon={<a href="https://www.linkedin.com/in/n-ilakkiya-ilakkiya-n-324495271/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ color: "#050a0f" }} /></a>}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Home;
