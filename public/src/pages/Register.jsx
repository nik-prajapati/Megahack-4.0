import React from 'react';
import { Container, Grid, Typography,TextField,Button } from '@mui/material';
import Lottie from 'lottie-react';
import RegisterAnimation from '../assets/Register.json'
import { Link,useNavigate } from 'react-router-dom';
import { useRef,useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styled from "styled-components";
import { registerRoute } from "../utils/APIRoutes";

const Register = () => {

  const emailRef=useRef("")
  const passwordRef=useRef("")
  const userNameRef=useRef("")

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleValidation = () => {
    const password=passwordRef.current.value
    const username=userNameRef.current.value
    const  email  = emailRef.current.value

    if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const password=passwordRef.current.value
      const username=userNameRef.current.value
      const  email  = emailRef.current.value

      console.log(password,username,email)
      const {data} = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      console.log(data)
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
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
        <Typography variant="h4" sx={{ color: '#7752FE',fontWeight: 'bold' }}>Welcome To Umeed</Typography>
      <form>
        <TextField
          fullWidth
          margin="normal"
          id="username"
          label="Username"
          variant="outlined"
          inputRef={emailRef}
          onChange={()=>console.log(emailRef.current.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          inputRef={passwordRef}
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          inputRef={userNameRef}
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
        <Typography variant="h4" sx={{fontWeight: 'bold',fontSize:'15px',marginTop:'10px' }}>Already Have Account ? <Link to='/login' style={{
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
        }}>Sign in</Link></Typography>

      </form>
    </Grid>
    </Container>
    </div>
  );
};

export default Register;
