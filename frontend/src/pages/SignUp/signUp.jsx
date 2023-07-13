import Navbar from "../../components/Navbar/navbar";
import './signUp.css';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DotLoaderOverlay } from "react-spinner-overlay";
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {MdVisibilityOff,MdVisibility} from 'react-icons/md';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
}
from 'mdb-react-ui-kit';

import { TextField } from "@mui/material";
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Zoom from '@mui/material/Zoom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';
import { SnackbarProvider, useSnackbar } from 'notistack'

const CTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 200,
  },
});

function SignUp() {
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword:""
  });

  const [loading,setLoading]=useState(false)
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputErrors, setinputErrors]=useState({});
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  
  function capitalize(Word) {
    if(!Word){
      return
    }
  return Word[0].toUpperCase() + Word.substring(1).toLowerCase();
}
  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value.trim() });
    setError('')
    setinputErrors({})
  };


  function validate(Fname,Lname,Email,Password,Confirmpassword){
    
    if(/\s/.test(Fname))
    {
      setError('First Name must contain only one word')
      setinputErrors({fname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Fname))
    {
      setError('First Name must contain only alphabet letters')
      setinputErrors({fname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if(/\d/.test(Fname))
    {
      setError('First Name must not contain any number')
      setinputErrors({fname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Lname))
    {
      setError('Last Name must contain only alphabet letters')
      setinputErrors({lname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if(/\d/.test(Lname))
    {
      setError('Last Name must not contain any number')
      setinputErrors({fname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if(/\s/.test(Lname))
    {
      setError('Last Name must contain only one word')
      setinputErrors({lname:1})
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
      return false
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)))
  {
    setError('Invalid Email')
    setinputErrors({email:1})
    enqueueSnackbar('Couldn\'t register',{variant: "error"});
    return false
  }
  else if(/\s/.test(Password))
  {
    setError("Password must not contain white space")
    setinputErrors({password:1})
    enqueueSnackbar('Couldn\'t register',{variant: "error"});
    return false
  }
  else if(!Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
  {  
    setError("Incorrect Password")
    setinputErrors({password:1})
    enqueueSnackbar('Couldn\'t register',{variant: "error"});
    return false
  }
  else if(Password !== Confirmpassword){
    setError('Passwords donot match' )
    setinputErrors({confirmpassword:1})
    enqueueSnackbar('Couldn\'t register',{variant: "error"});
    return false
  }
  else{
    return true
  }
}

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    if(validate(userData.firstName,
      userData.lastName,
      userData.email,
      userData.password,
      userData.confirmpassword))
    {
      setError('')
      setinputErrors({})
    }
    else{
      return
    }

    try {
      setLoading(true)
      // console.log("clicked")
      const url = "http://localhost:3001/register";
      const newData={...userData,
        firstName:capitalize(userData.firstName),
        lastName:capitalize(userData.lastName),
        email:(userData.email).toLowerCase()}
      const{ data : res }  = await axios.post(url, newData);
      //console.log(res)
      setLoading(false);
      enqueueSnackbar('Successfully registered',{variant: "success"});
      navigate("/login");
    } 
    catch (error) {
      setLoading(false)
      if(error.response.data.message)
      {
      setError(error.response.data.message)
      }
      enqueueSnackbar('Couldn\'t register',{variant: "error"});
    }
  };

  useEffect(()=> {
    AOS.init({duration : 600});
  }, [])

  return (
  <>
  {loading &&
  <DotLoaderOverlay
  overlayColor="rgba(0, 0, 0, 0.7)"
  color="#1b854a"
  size={20}
  between={13}
  />
  }  
        
        <MDBContainer fluid className='d-flex align-items-center justify-content-center' style={{position:"absolute",paddingBottom:"40px", hieght:"100%",marginTop:'18vh',backgroundColor:"aliceblue"}}>
      <MDBCard className='shadow-custom' style={{maxWidth: '500px',minWidth:'350px'}}  data-aos='zoom-out-up'>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-4">Registration</h2>

          <form onSubmit={handleSubmit}>
            <TextField {...(inputErrors.fname && {error})} style={{width: "51.5%", marginBottom:"3%",marginTop:"4%",marginLeft:"-2%"}} color="success" type='text' label="First Name" name="firstName" onChange={handleChange} required /> 
            
            <TextField {...(inputErrors.lname && {error})} style={{width: "51.5%", marginBottom:"3%", marginLeft:"1%",marginTop:"4%",marginRight:"-2%"}}color="success" type="text" name="lastName" label="Last Name" onChange={handleChange} required/>
            
            <TextField {...(inputErrors.email && {error})} style={{width: "104%",marginLeft:"-2%",marginRight:"-2%", marginBottom:"3%"}}color="success" type="text" label="Email" name="email" onChange={handleChange} required />

            <ClickAwayListener onClickAway={handleTooltipClose}>
            <div data-toggle="tooltip" title="">
            <CTooltip PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener 
                arrow title={
                <>
                <>Password must have:</> 
                <br/> 
                <>• 6-20 characters</> 
                <br/> 
                <>• Atleast 1 numeric digit,</>
                <br/> 
                <>• 1 uppercase letter,</>
                <br/> 
                <>• 1 lowercase letter</>
                </>
              } placement="top-end" TransitionComponent={Zoom} disableInteractive>
            <FormControl onClick={handleTooltipOpen} {...(inputErrors.password && {error})} required style={{width: "104%",marginLeft:"-2%", marginBottom:"3%"}} variant="outlined">
              <InputLabel color='success' htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
              color="success"
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password" name="password" onChange={handleChange}
              />
           </FormControl>
           </CTooltip>
           </div>
           </ClickAwayListener>
          
            <FormControl {...(inputErrors.confirmpassword && {error})} required style={{width: "104%",marginLeft:"-2%", marginBottom:"4%"}} variant="outlined">
              <InputLabel color='success' htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
              color="success"
                id="confirmpassword"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password" name="confirmpassword" onChange={handleChange}
              />
           </FormControl>

            <p style={{color:'red',textAlign:'center'}}>{error}</p><hr/>{"\n"}
            <button className='btn btn-success' style={{fontSize:19 ,marginBottom:'6%',width:'100%',height:45}} type='submit'>Register</button>
        </form>
        <div style={{marginLeft:'-1%',marginRight:'-1%'}} className="mb-4 d-flex align-items-center justify-content-center">
        {"Already have an account?"}
        <Link to="/Login"  style={{marginLeft:"2%"}} variant="body2">
                {"Login"}
              </Link>
              </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

    <Navbar SignUp={1}/>
    </>
  )
}

export default SignUp;
