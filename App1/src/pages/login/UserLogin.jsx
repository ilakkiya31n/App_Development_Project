import React from "react";
import { useRef, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import glossary from '../../assets/Picture1.jpg';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';
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
    padding: '10px 20px',
    width: '100%',
    transition: '0.5s',
    cursor: 'pointer',
    margin: '5px 0',
});


function Login() {
    let name = useRef(null);
    let password = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState({ name: false, password: false });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.current.value && password.current.value) {
            console.log(name.current.value);
            console.log(password.current.value);
        } else {
            if (!name.current.value && !password.current.value) {
                setError((prev) => {
                    return { ...prev, name: true, password: true };
                });
            } else if (!name.current.value) {
                setError((prev) => {
                    return { ...prev, name: true };
                });
            } else if (!password.current.value) {
                setError((prev) => {
                    return { ...prev, password: true };
                });
            }
        }
    };

    return (
        <ModelContainer>
            <FormContainer>
                <LockPersonTwoToneIcon />
                <Typography color={"#03045e"} padding={3} fontSize={"30px"}>
                    Login to Your Account
                </Typography>
                <Box padding={2}>
                    <TextField
                        inputRef={name}
                        type="text"
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        fullWidth
                    />
                    {error.name && (
                        <Typography style={{ color: "red", fontSize: "10px" }}>
                            Fill the name
                        </Typography>
                    )}
                </Box>
                <Box padding={2}>
                    <TextField
                        inputRef={password}
                        type="password"
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        fullWidth
                    />
                    {error.password && (
                        <Typography style={{ color: "red", fontSize: "10px" }}>
                            Fill the password
                        </Typography>
                    )}
                </Box>
                <StyledButton type="submit" onClick={handleSubmit}>
                <span
                        style={{ color: "blue", fontSize: "15px", cursor: "pointer" }}
                        onClick={() => {
                            navigate("/userdashboard");
                        }}
                    >
                    Submit
                    </span>
                </StyledButton>
                <Typography style={{ color: "black", fontSize: "15px", padding: "20px" }}>
                    Not Registered yet?{" "}
                    <span
                        style={{ color: "blue", fontSize: "15px", cursor: "pointer" }}
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Create an Account.
                    </span>
                </Typography>
            </FormContainer>
          
        </ModelContainer>
    );
}

export default Login;
