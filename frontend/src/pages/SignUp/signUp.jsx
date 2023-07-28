import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/navbar";
import "./signUp.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSnackbar } from "notistack";
import CustomTextField from "../../components/Form/textfield";
import CustomToolTip from "../../components/Tooltip/tooltip";
import CustomPasswordField from "../../components/Form/passwordfield";
import CustomLoadingAnimation from "../../components/LoadingAnimation/loadingAnimation";
import {FaLock, FaUserAlt} from 'react-icons/fa'
import {TbMailFilled} from 'react-icons/tb'

function SignUp() {
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [inputErrors, setinputErrors] = useState({});
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    console.log(open);
    setOpen(true);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value.trim() });
    setError("");
    setinputErrors({});
  };

  function capitalize(Word) {
    if (!Word) {
      return;
    }
    return Word[0].toUpperCase() + Word.substring(1).toLowerCase();
  }

  function validate(Fname, Lname, Email, Password, Confirmpassword) {
    if (/\s/.test(Fname)) {
      setError("Name must not contain blank space");
      setinputErrors({ fname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    }
    // eslint-disable-next-line
    else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Fname)) {
      setError("First Name must contain only alphabet letters");
      setinputErrors({ fname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (/\d/.test(Fname)) {
      setError("Name must not contain any number");
      setinputErrors({ fname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    }
    // eslint-disable-next-line
    else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Lname)) {
      setError("Name must contain only alphabet letters");
      setinputErrors({ lname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (/\d/.test(Lname)) {
      setError("Name must not contain any number");
      setinputErrors({ lname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (/\s/.test(Lname)) {
      setError("Name must not contain blank space");
      setinputErrors({ lname: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    }
    // eslint-disable-next-line
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      setError("Invalid Email");
      setinputErrors({ email: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (/\s/.test(Password)) {
      setError("Password must not contain blank space");
      setinputErrors({ password: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (!Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setError("Incorrect Password");
      setinputErrors({ password: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else if (Password !== Confirmpassword) {
      setError("Passwords donot match");
      setinputErrors({ confirmpassword: 1 });
      enqueueSnackbar("Couldn't register", { variant: "error" });
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (
      validate(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.password,
        userData.confirmpassword
      )
    ) {
      setError("");
      setinputErrors({});
    } else {
      return;
    }

    try {
      setLoading(true);
      // console.log("clicked")
      const url = process.env.REACT_APP_BASE_URL + "/register";
      const newData = {
        ...userData,
        firstName: capitalize(userData.firstName),
        lastName: capitalize(userData.lastName),
        email: userData.email.toLowerCase(),
      };
      await axios.post(url, newData);
      //console.log(res)
      setLoading(false);
      enqueueSnackbar("Successfully registered", { variant: "success" });
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Server not working. Try again later");
      }
      enqueueSnackbar("Couldn't register", { variant: "error" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const styleFirstHalf = {
    width: "49.5%",
    marginTop: "1%",
    marginBottom: "3%",

  };
  const styleSecondHalf = {
    width: "49.5%",
    marginBottom: "3%",
    marginLeft:'1%',
    marginTop: "1%",
  };
  const styleFull = {
    width: "100%",
    marginBottom: "3%",
  };
  const passwordToottipTitle = (
    <div>
      <>Password must have:</>
      <br />
      <>• 6-20 characters</>
      <br />
      <>• Atleast 1 numeric digit,</>
      <br />
      <>• 1 uppercase letter,</>
      <br />
      <>• 1 lowercase letter</>
    </div>
  );
  const TooltipPasswordField = (
    <CustomPasswordField
      onClick={handleTooltipOpen}
      handleTooltipOpen={handleTooltipOpen}
      inputError={inputErrors.password}
      style={styleFull}
      id="password"
      label="Password"
      icon={<FaLock size={17} />}
      name="password"
      handleChange={handleChange}
    />
  );

  return (
    <>
      {loading && <CustomLoadingAnimation />}
      <Navbar SignUp={1} data-aos />
      <div className="d-flex mt-lg-5 align-items-center justify-contennt-center" style={{height:'calc(90vh - 70px)',width:"100%", position:"fixed"}}>
        <div
          className="container pb-4 pb-md-0 mx-auto"
          style={{
            backgroundColor: "aliceblue",
          }}
        >
          <div
            className="shadow-custom card mx-auto"
            style={{
              maxWidth: "500px",
              minWidth: "350px",
            }}
            data-aos="zoom-out-up"
          >
            <div className="card-body px-4 px-md-5">
              <h2 className="text-uppercase fw-bold text-center mb-4" style={{letterSpacing:"1px",fontFamily:'Titillium Web, sans-serif',fontSize:"200%"}}>Registration</h2>

              <form onSubmit={handleSubmit}>
                <CustomTextField
                  inputError={inputErrors.fname}
                  style={styleFirstHalf}
                  label="First Name"
                  icon={<FaUserAlt />}
                  name="firstName"
                  onChange={handleChange}
                />

                <CustomTextField
                  inputError={inputErrors.lname}
                  style={styleSecondHalf}
                  label="Last Name"
                  icon={<FaUserAlt />}
                  name="lastName"
                  onChange={handleChange}
                />

                <CustomTextField
                  inputError={inputErrors.email}
                  style={styleFull}
                  label="Email"
                  icon={<TbMailFilled  size={21}/>}
                  name="email"
                  onChange={handleChange}
                />

                <CustomToolTip
                  handleTooltipClose={handleTooltipClose}
                  open={open}
                  title={passwordToottipTitle}
                  tooltipElement={TooltipPasswordField}
                />

                <CustomPasswordField
                  inputError={inputErrors.confirmpassword}
                  style={styleFull}
                  id="confirmpassword"
                  label="Confirm Password"
                  icon={<FaLock size={17} />}
                  name="confirmpassword"
                  handleChange={handleChange}
                />

                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginLeft: "-8%",
                    marginRight: "-8%",
                  }}
                >
                  {error}
                </p>
                <hr />

                <button
                  className="btn btn-success mb-4"
                  style={{
                    fontSize: 21,
                    width: "100%",  
                    height: 45,
                  }}
                  type="submit"
                >
                  Register
                </button>
              
              </form>
              
              <div
                style={{ fontSize:"105%",marginLeft: "-1%", marginRight: "-1%" }}
                className="mb-2 mb-md-1 d-flex align-items-center justify-content-center"
              >
                {"Already have an account?"}

                <Link to="/Login" style={{ marginLeft: "2%",marginBottom:"2px", textDecoration:"none"}}>
                  {"Login"}
                </Link>
              </div>

            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default SignUp;
