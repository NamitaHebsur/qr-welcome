import React from "react";
import { useNavigate } from "react-router-dom";
import hotelImage from "../images/welcome-img.jpg"; 

function Welcome() {
    const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${hotelImage})`,
        backgroundSize: "cover",         // makes image cover full screen
        backgroundPosition: "center",    // centers the image
        backgroundRepeat: "no-repeat",
        height: "100vh",                 // full viewport height
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",        // vertically center content
        alignItems: "center",            // horizontally center content
        color: "white",
        textShadow: "2px 2px 5px rgba(0,0,0,0.6)", // make text readable
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginTop: "190px", position: "absolute", top: "0", fontWeight: "bolder" }}>
        🌴 Welcome to Paradise Hotel 🌴
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px", textAlign: "center", marginTop: "270px", position: "absolute", top: "0", fontWeight: "bold"}}>
        Experience luxury and comfort like never before.
      </p>

      <div style={{ display: "flex", gap: "20px"}}>
        <button
          onClick={() => navigate("/food")}
          style={buttonStyle}
        >
          Dining
        </button>

        <button
          onClick={() => navigate("/service")}
          style={buttonStyle}
        >
          Room Services
        </button>

        <button
          onClick={() => navigate("/experience")}
          style={buttonStyle}
        >
          Contact OR Experience
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "300px",
  height: "100px",
  marginTop: "120px",
  padding: "15px 30px",
  fontSize: "1.2rem",
  border: "none",
  borderRadius: "80px",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  color: "#333",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};

export default Welcome;
