import React from "react";
import { useRef ,useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import {useNavigate} from 'react-router-dom';
import toys from '../../assets/img1.jpeg';
import  "./Login.css";
function Login()
{
    let name=useRef(null)
    let password=useRef(null)
    const navigate=useNavigate();
    const [error,setError]=useState({name:false,password:false})
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    if(name.current.value && password.current.value){
        console.log(name.current.value)
        console.log(password.current.value)
    }
    else{
      if(!name.current.value && !password.current.value){
        setError((prev)=>{
            return{...prev,name:true,password:true};
        })
      }
      else if(!name.current.value ){
        setError((prev)=>{
            return{...prev,name:true};
        })
      }
      else if(!password.current.value){
        setError((prev)=>{
            return{...prev,password:true};
        })
      }
    }
 }


    return(
      <div class="model-container">
    <div class="container">
   
    
 <Typography color={"red"} padding={3} fontSize={"30px"}>
  Login an Account
</Typography>
<Box padding={2}>
<TextField 

inputRef={name}  type="text" id="standard-basic" label="Name" variant="standard" />
 {error.name&&(<Typography style={{color:"red" ,fontSize:"10px"}}>
  Fill the name
</Typography>)}
</Box>
<Box padding={2}>
<TextField 
style={{color:"black" ,fontSize:"30px"}}
inputRef={password} type="password" id="standard-basic" label="Password" variant="standard" />
{error.password&&(<Typography style={{color:"red" ,fontSize:"10px"}}>
  Fill the password
</Typography>)}
</Box>
<Button type="submit" class="btn"onClick={handleSubmit}>Submit</Button>
<Typography
 style={{color:"black",fontSize:"15px",padding:"20px"}}>
  Not Registe yet?{" "}
  <span
  style={{color:"blue",fontSize:"15px"}}
  onClick={()=>{
    navigate("/register");
  }}
  >
 Create an Account.
  </span>
</Typography>

   
   </div> 
   <div>
   <img src={toys}
            alt="Login image" className="img1-c" width="800" height="580"style={{objectPosition: 'left'}} />
   </div>
   </div>
    )
}
export default Login