import React from "react";
import { useRef, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import glossary from '../../assets/Picture1.jpg';
import { styled } from '@mui/system';
const ModelContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '2px',
    backgroundColor: '#03045e',
    height: '100%',
    width: '100%',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const FormContainer = styled('div')({
    margin: '40px 0px 40px 40px',
    height: '500px',
    width: '400px',
    borderTopLeftRadius: '2%',
    borderBottomLeftRadius: '2%',
    borderTopRightRadius: '2%',
    borderBottomRightRadius: '2%',
    padding: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
    backgroundImage: `url(${glossary})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 600px)': {
        margin: '20px',
        width: '80%',
        height: 'auto',
        borderRadius: '10%',
        opacity:0.1,
        
    },
});
const StyledButton = styled(Button)({
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: '#0077b6',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '20px',
    padding: '20px 20px',
    width: '200px',
    transition: 'all 0.5s',
    cursor: 'pointer',
    margin: '20px 20px 20px 20px',
});

const StyledImage = styled('img')({
    paddingTop: '40px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    borderTopRightRadius: '10%',
    borderBottomRightRadius: '10%',
    opacity: 0.7,
    objectPosition: 'left',
});

function Register() {
    let name = useRef(null);
    let password = useRef(null);
    let confirmpassword = useRef(null);
    let email = useRef(null);
    let phonenumber = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState({ name: false, password: false, confirmpassword: false, email: false, phonenumber: false });

    function handlePhoneNumber(event) {
        let new_Number = event.target.value;
        let new_Number_length = new_Number.length;

        if (new_Number_length > 10 || new_Number_length < 10) {
            setError(prev => ({ ...prev, phonenumber: true }));
        } else if (new_Number_length === 10) {
            setError(prev => ({ ...prev, phonenumber: false }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.current.value && password.current.value && confirmpassword.current.value && email.current.value && phonenumber.current.value) {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)) {
                setError(prev => ({ ...prev, email: true }));
            }
            if (!/^[0-9]{10}$/.test(phonenumber.current.value)) {
                setError(prev => ({ ...prev, phonenumber: true }));
            }

            console.log(name.current.value);
            console.log(password.current.value);
            console.log(confirmpassword.current.value);
            console.log(email.current.value);
            console.log(phonenumber.current.value);
        } else {
            if (!name.current.value && !password.current.value && !confirmpassword.current.value && !email.current.value && !phonenumber.current.value) {
                setError({ name: true, password: true, confirmpassword: true, email: true, phonenumber: true });
            } else {
                if (!name.current.value) setError(prev => ({ ...prev, name: true }));
                if (!password.current.value) setError(prev => ({ ...prev, password: true }));
                if (!confirmpassword.current.value) setError(prev => ({ ...prev, confirmpassword: true }));
                if (!email.current.value) setError(prev => ({ ...prev, email: true }));
                if (!phonenumber.current.value) setError(prev => ({ ...prev, phonenumber: true }));
            }
        }
    };

    return (
        <ModelContainer>
            <FormContainer>
                <Typography color={"#03045e"} fontSize={"30px"}>
                    Create an Account
                </Typography>
                <Box>
                    <TextField inputRef={name} type="text" id="standard-basic" label="Name" variant="standard" />
                    {error.name && (<Typography color={"red"} fontSize={"10px"}>Fill the name</Typography>)}
                </Box>
                <Box>
                    <TextField inputRef={password} type="password" id="standard-basic" label="Password" variant="standard" />
                    {error.password && (<Typography color={"red"} fontSize={"10px"}>Fill the password</Typography>)}
                </Box>
                <Box>
                    <TextField inputRef={confirmpassword} type="password" id="standard-basic" label="Confirm Password" variant="standard" />
                    {error.confirmpassword && (<Typography color={"red"} fontSize={"10px"}>Confirm the password</Typography>)}
                </Box>
                <Box>
                    <TextField inputRef={email} type="email" id="standard-basic" label="Email Address" variant="standard" />
                    {error.email && (<Typography color={"red"} fontSize={"10px"}>Fill the Email</Typography>)}
                </Box>
                <Box>
                    <TextField inputRef={phonenumber} onChange={handlePhoneNumber} id="standard-basic" label="Phone Number" variant="standard" />
                    {error.phonenumber && (<Typography color={"red"} fontSize={"10px"}>Fill the Phone Number</Typography>)}
                </Box>
                <StyledButton type="submit" onClick={handleSubmit}>
                <span
                        style={{ color: "blue", fontSize: "15px", cursor: "pointer" }}
                        onClick={() => {
                            navigate("/userlogin");
                        }}
                    >
                    Submit
                    </span>
                    </StyledButton>
                <Typography style={{ color: "black", fontSize: "15px", padding: "20px" }}>
                    Already registered?{" "}
                    <span style={{ color: "blue", fontSize: "15px", cursor: "pointer" }} onClick={() => navigate("/login")}>
                        Login
                    </span>
                </Typography>
            </FormContainer>
          
        </ModelContainer>
    );
}

export default Register;
