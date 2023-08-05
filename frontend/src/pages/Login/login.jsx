import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/navbar";
import "./login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSnackbar } from "notistack";
import CustomTextField from "../../components/Form/textfield";
import CustomPasswordField from "../../components/Form/passwordfield";
import CustomLoadingAnimation from "../../components/LoadingAnimation/loadingAnimation";
import {FaLock} from 'react-icons/fa'
import {TbMailFilled} from 'react-icons/tb'

function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [inputErrors, setinputErrors] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  // eslint-disable-next-line
  const navigate = useNavigate();

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value.trim() });
    setError("");
    setinputErrors({});
  };

  function validate(Email, Password) {
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      setError("Invalid Email");
      setinputErrors({ email: 1 });
      enqueueSnackbar("Couldn't Login", { variant: "error" });
      return false;
    } else if (
      /\s/.test(Password) ||
      !Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
    ) {
      setError("Incorrect Password");
      setinputErrors({ password: 1 });
      enqueueSnackbar("Couldn't Login", { variant: "error" });
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (validate(userData.email, userData.password)) {
      setError("");
      setinputErrors({});
    } else {
      return;
    }

    try {
      setLoading(true);
      // console.log("clicked")
      const url = process.env.REACT_APP_BASE_URL + "/login";
      const newData = {
        ...userData,
        email: userData.email.toLowerCase(),
      };
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const { data } = await axios.post(url, newData, config);
      //console.log(res)
      setLoading(false);
      if (data.isLoggedIn) {
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        localStorage.setItem('isLoggedIn',JSON.stringify(data.isLoggedIn));
        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      if(localStorage.isLoggedIn){
      localStorage.setItem("isLoggedIn", "false");
      }
      if (error?.response?.data?.message) {
            setError(error.response.data.message);
      } else {
        setError("Server not working. Try again later");
      }
      enqueueSnackbar("Couldn't login", { variant: "error" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const styleFull = {
    width: "100%",
    marginBottom: "3%",
  };

  return (
    <>
      {loading && <CustomLoadingAnimation />}
      <div className="d-flex align-items-center justify-content-center">
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            hieght: "100%",
            marginTop: "calc(85vh + 11%)",
            backgroundColor: "aliceblue",
          }}
        >
          <div
            className="shadow-custom card"
            style={{ maxWidth: "500px", minWidth: "350px" }}
            data-aos="zoom-out-up"
          >
            <div className="card-body px-4 px-md-5">
              <h2 className="text-uppercase fw-bold text-center mb-4"  style={{letterSpacing:"1px",fontFamily:'Titillium Web, sans-serif',fontSize:"200%"}}>Login</h2>

              <form onSubmit={handleSubmit}>
                <CustomTextField
                  inputError={inputErrors.email}
                  style={styleFull}
                  label="Email"
                  icon={<TbMailFilled size={21} />}
                  name="email"
                  onChange={handleChange}
                />

                <CustomPasswordField
                  inputError={inputErrors.password}
                  style={styleFull}
                  id="password"
                  label="Password"
                  icon={<FaLock size={17} />}
                  name="password"
                  handleChange={handleChange}
                />

                <p style={{color: "red",
                    textAlign: "center",
                    marginLeft: "-8%",
                    marginRight: "-8%",
                    }}>{error}</p>
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
                  Login
                </button>
              </form>
              
              <div
                style={{ fontSize:"105%",marginLeft: "-1%", marginRight: "-1%" }}
                className="mb-2 mb-md-1 d-flex align-items-center justify-content-center"
              >
                {"Don't have an account?"}

                <Link to="/signup" style={{ marginLeft: "2%",marginBottom:"2px", textDecoration:"none"}}>
                  {"Sign Up"}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Navbar Login={1} />
    </>
  );
}

export default Login;
