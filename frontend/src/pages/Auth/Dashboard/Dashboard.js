import React, { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <button
        className="btn btn-success"
        style={{
          fontSize: 19,
          marginBottom: "6%",
          width: "10%",
          height: 45,
        }}
        onClick={() => {
          axios.post(
            "http://localhost:3001/logout",
            { message: "logout" },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          navigate("/login");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
