//SF Pro Font: https://developer.apple.com/fonts/
import { hover } from "@testing-library/user-event/dist/hover";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const styling = {
  active: {
    fontWeight: "bold",
    fontSize: "23px",
    color: "aliceblue",
    marginLeft: "16px",
  },
  non_active: {
    fontSize: "23px",
    color: "aliceblue",
    marginLeft: "16px",
    textDecoration: "none",
  },
};

export default function HomeNavBar() {
  const id = styles.navbar;
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md py-3"
        style={{ fontSize: "20px", backgroundColor: "#1b854a" }}
      >
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            style={{ color: "rgb(2, 53, 2)" }}
          >
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                className="bi bi-bezier"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                fill="currentColor"
                viewBox="0 0 16 16"
                data-toggle="collapse"
              >
                <path
                  fillRule="evenodd"
                  d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                ></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg>
            </span>
            <span style={{ fontSize: "30px", marginRight: "20px" }}>
              &nbsp;EduAid
            </span>
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link" style={styling.active}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link" style={styling.non_active}>
                    Tutorial
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link" style={styling.non_active}>
                    About
                  </a>
                </Link>
              </li>
            </ul>
            <Link to="/registration">
              <button
                /*className="btn btn-primary"*/ className={
                  styles.sign_up_button
                }
                type="button"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                className={styles.login_button}
                type="button"
                style={{ marginLeft: "25px" }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
