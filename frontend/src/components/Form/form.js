import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./form.css";

const Form = (props) => {
  return (
    <>
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
              <TextField
                {...(inputErrors.fname && { error })}
                style={{
                  width: "51.5%",
                  marginBottom: "3%",
                  marginTop: "4%",
                  marginLeft: "-2%",
                }}
                color="success"
                type="text"
                label="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />

              <TextField
                {...(inputErrors.lname && { error })}
                style={{
                  width: "51.5%",
                  marginBottom: "3%",
                  marginLeft: "1%",
                  marginTop: "4%",
                  marginRight: "-2%",
                }}
                color="success"
                type="text"
                name="lastName"
                label="Last Name"
                onChange={handleChange}
                required
              />

              <TextField
                {...(inputErrors.email && { error })}
                style={{
                  width: "104%",
                  marginLeft: "-2%",
                  marginRight: "-2%",
                  marginBottom: "3%",
                }}
                color="success"
                type="text"
                label="Email"
                name="email"
                onChange={handleChange}
                required
              />

              {props.tooltip && (
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <div data-toggle="tooltip" title="">
                    <CTooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      arrow
                      title={
                        <>
                          <>Password must have:</>
                          <br />
                          <>• 6-20 characters</>
                          <br />
                          <>• Atleast 1 numeric digit,</>
                          <br />
                          <>• 1 uppercase letter,</>
                          <br />
                          <>• 1 lowercase letter</>
                        </>
                      }
                      placement="top-end"
                      TransitionComponent={Zoom}
                      disableInteractive
                    >
                      <FormControl
                        onClick={handleTooltipOpen}
                        {...(inputErrors.password && { error })}
                        required
                        style={{
                          width: "104%",
                          marginLeft: "-2%",
                          marginBottom: "3%",
                        }}
                        variant="outlined"
                      >
                        <InputLabel
                          color="success"
                          htmlFor="outlined-adornment-password"
                        >
                          Password
                        </InputLabel>
                        <OutlinedInput
                          color="success"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <MdVisibility />
                                ) : (
                                  <MdVisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </CTooltip>
                  </div>
                </ClickAwayListener>
              )}

              <FormControl
                {...(inputErrors.confirmpassword && { error })}
                required
                style={{ width: "104%", marginLeft: "-2%", marginBottom: "4%" }}
                variant="outlined"
              >
                <InputLabel
                  color="success"
                  htmlFor="outlined-adornment-password"
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  color="success"
                  id="confirmpassword"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  name="confirmpassword"
                  onChange={handleChange}
                />
              </FormControl>
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
                Register
              </button>
            </form>
            <div
              style={{ marginLeft: "-1%", marginRight: "-1%" }}
              className="mb-4 d-flex align-items-center justify-content-center"
            >
              {"Already have an account?"}
              <Link to="/Login" style={{ marginLeft: "2%" }} variant="body2">
                {"Login"}
              </Link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Form;
