import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/navbar";
import "./login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useSnackbar } from "notistack";
import CustomTextField from "../../components/Form/textfield";
import CustomPasswordField from "../../components/Form/passwordfield";
import CustomLoadingAnimation from "../../components/Loading animation/loadingAnimation";

function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [inputErrors, setinputErrors] = useState({});
  const { enqueueSnackbar } = useSnackbar();

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
      const config={headers:{"Content-Type": "application/json"}, withCredentials: true}
      const { data } = await axios.post(url, newData, config);
      //console.log(res)
      setLoading(false);
      if (data.isLoggedIn) {
        enqueueSnackbar("LoggedIn successfully", { variant: "success" });
      }
    } catch (error) {
      setLoading(false);
      if (error.response.data) {
        if (error.response.data.message) {
          setError(error.response.data.message);
        }
        enqueueSnackbar("Couldn't login", { variant: "error" });
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const styleFull = {
    width: "104%",
    marginLeft: "-2%",
    marginRight: "-2%",
    marginBottom: "3%",
  };

  return (
    <>
      {loading && <CustomLoadingAnimation />}

      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          position: "absolute",
          paddingBottom: "40px",
          hieght: "100%",
          marginTop: "18vh",
          backgroundColor: "aliceblue",
        }}
      >
        <MDBCard
          className="shadow-custom"
          style={{ maxWidth: "500px", minWidth: "350px" }}
          data-aos="zoom-out-up"
        >
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-4">Registration</h2>

            <form onSubmit={handleSubmit}>
              <CustomTextField
                inputError={inputErrors.email}
                style={styleFull}
                label="Email"
                name="email"
                onChange={handleChange}
              />

              <CustomPasswordField
                inputError={inputErrors.password}
                style={styleFull}
                id="password"
                label="Password"
                name="password"
                handleChange={handleChange}
              />

              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              <hr />
              {"\n"}

              <button
                className="btn btn-success"
                style={{
                  fontSize: 19,
                  marginBottom: "6%",
                  width: "100%",
                  height: 45,
                }}
                type="submit"
              >
                Login
              </button>
            </form>
            <button
                className="btn btn-success"
                style={{
                  fontSize: 19,
                  marginBottom: "6%",
                  width: "100%",
                  height: 45,
                }} 
                onClick={()=>{
                 axios.post("http://localhost:3001/logout",{message:"this works"}, {headers:{"Content-Type": "application/json"}, withCredentials: true})
                }}
              >
                Logout
              </button>
            <div
              style={{ marginLeft: "-1%", marginRight: "-1%" }}
              className="mb-4 d-flex align-items-center justify-content-center"
            >
              {"Don't have an account?"}

              <Link to="/Login" style={{ marginLeft: "2%" }} variant="body2">
                {"Sign In"}
              </Link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <Navbar Login={1} />
    </>
  );
}

export default Login;
