import React from "react";

function Food() {
  return (
    <div style={pageStyle}>
      <h1>Welcome Back!</h1>
      <p>Order your favorite meals in seconds - fresh, fast, and easy.</p>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  marginTop: "100px",
  fontFamily: "Arial, sans-serif",
};

export default Food;