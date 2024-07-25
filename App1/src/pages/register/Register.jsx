import React from "react";
import { useRef ,useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function Register()
{
    let name=useRef(null)
    let password=useRef(null)
    let confirmpassword=useRef(null)
    let email=useRef(null)
    let phonenumber=useRef(null)
   const navigate=useNavigate();
    const [error,setError]=useState({name:false,password:false,confirmpassword:false,email:false,phonenumber:false})
    function handlePhoneNumber(event) {
        let new_Number = event.target.value;
        let new_Number_length = new_Number.length;
        
    
        if (new_Number_length > 10 || new_Number_length < 10) {
          setError(true);
        } else if (new_Number_length == 10) {
          setError(false);
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    if(name.current.value && password.current.value && confirmpassword.current.value && email.current.value && phonenumber.current.value){
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)){
            setError((prev)=>{
                return{...prev,email:true}
            })
        }
        if(!/^[0-9]{10}$/.test(phonenumber.current.value)){
            setError((prev)=>{
                return{...prev,phonenumber:true}
            })
        }
        

            console.log(name.current.value)
            console.log(password.current.value)
            console.log(confirmpassword.current.value)
            console.log(email.current.value)
            console.log(phonenumber.current.value)
    }
    else{
      if(!name.current.value && !password.current.value && !confirmpassword.current.value && !email.current.value && !phonenumber.current.value){
        setError((prev)=>{
            return{...prev,name:true,password:true,confirmpassword:true,email:true,phonenumber:true};
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
      else if(!confirmpassword.current.value){
        setError((prev)=>{
            return{...prev,confirmpassword:true};
        })
      }
      else if(!email.current.value){
        setError((prev)=>{
            return{...prev,email:true};
        })
      }
      else if(!phonenumber.current.value){
        setError((prev)=>{
            return{...prev,phonenumber:true};
        })
      }
    }
 }


    return(
   <Box
   component="form"
   sx={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  width:'100%',
  height:'100vh'
   }}>
 <Typography color={"red"} fontSize={"18px"}>
  Create an Account
</Typography>
<Box>
<TextField inputRef={name} type="text" id="standard-basic" label="Name" variant="standard" />
 {error.name&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the name
</Typography>)}
</Box>
<Box>
<TextField inputRef={password} type="password" id="standard-basic" label="Password" variant="standard" />
{error.password&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the password
</Typography>)}
</Box>
<Box>
<TextField inputRef={confirmpassword} type="password" id="standard-basic" label="Confirm Password" variant="standard" />
{error.confirmpassword&&(<Typography color={"red"} fontSize={"8px"}>
  Confirm the password
</Typography>)}
</Box>
<Box>
<TextField inputRef={email} type="email" id="standard-basic" label="Email Address" variant="standard" />
{error.email&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the Email
</Typography>)}
</Box>
<Box>
<TextField inputRef={phonenumber} onChange={handlePhoneNumber}id="standard-basic" label="Phone Number" variant="standard" />
{error.phonenumber&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the Phone Number
</Typography>)}
</Box>
<Button varient="contained" color="success"onClick={handleSubmit}>Submit</Button>
<Typography>
  Already registered?{" "}
  <span
  style={{color:"blue"}}
  onClick={()=>{
    navigate("/login");
  }}
  >
 Login
  </span >
</Typography>
   </Box> 
    )
}
export default Register