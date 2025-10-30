import React from "react";

function Welcome(){
    return(
        <div style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "Arial, sans-serif",
        }}>
            <h1>🎉 Welcome!</h1>    
            <p>You Scanned the QR Code successful.</p>
            <p style={{marginTop: "20x", color: "#555"}}>
                This is your custom welcome page
            </p>
        </div>
    );
}

export default Welcome;
