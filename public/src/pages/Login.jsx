import React from 'react';
import { Container, Grid, Typography,TextField,Button } from '@mui/material';
import Lottie from 'lottie-react';
import RegisterAnimation from '../assets/Register.json'
import { useNavigate, Link } from "react-router-dom";
import { useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";


const Login = ({setUser}) => {

  const emailRef=useRef("")
  const passwordRef=useRef("")
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const validateForm = () => {
    
    if (emailRef.currentValue === "" || passwordRef.currentValue=="") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const email=emailRef.currentValue
      const pasword=passwordRef.currentValue
      const { data } = await axios.post(loginRoute, {
        email,
        pasword,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        setUser(data.user)

        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (

    <div style={{height:'100vh',display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }}>

  <Container
  sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        backdropFilter: 'blur(10px)', // Apply blur effect
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        width: '70%',
        borderRadius:'10px'
  }}
>
        <Grid item xs={10} md={5} sx={{padding:'10px'}}>
          <Lottie animationData={RegisterAnimation} loop={true} autoplay={true} speed={1} style={{width:'400px',height:'400px'}}/>

        </Grid>
        <Grid item xs={10} md={5} sx={{marginLeft:'50px',width:'400px'}}>
        <Typography variant="h4" sx={{ color: '#7752FE',fontWeight: 'bold' }}>Welcome Back</Typography>
      <form>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          inputRef={emailRef} 
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          inputRef={passwordRef} 
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{width:'400px',backgroundColor:'#7752FE',marginTop:'10px',padding:'5px',fontSize:'18px'}}
          onClick={(e)=>handleSubmit(e)}
        >
          Submit
        </Button>
        <Typography variant="h4" sx={{fontWeight: 'bold',fontSize:'15px',marginTop:'10px' }}>Don't Have Account ? <Link to='/register' style={{
          color: '#7752FE',
          textDecoration: 'none',
          borderBottom: '2px solid transparent', // Initially hide the underline
          transition: 'border-color 0.1s ease', // Smooth transition for the underline
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#7752FE'; // Change border color on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'transparent'; // Reset border color on mouse leave
        }}>Register</Link></Typography>

      </form>
    </Grid>
    </Container>
    </div>
  );
};

export default Login;
