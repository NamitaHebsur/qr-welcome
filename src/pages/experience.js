import React from "react";

function Contact() {
  return (
    <div style={pageStyle}>
      <h1>📞 Contact Us</h1>
      <p>Email: info@paradisehotel.com</p>
      <p>Phone: +91-98765-43210</p>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  marginTop: "100px",
  fontFamily: "Arial, sans-serif",
};

export default Contact;