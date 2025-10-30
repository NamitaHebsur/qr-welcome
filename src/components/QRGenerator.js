import React from "react";
import {QRCodeCanvas} from "qrcode.react";

function QRGenerator(){
    const url= "https://qr-welcome.vercel.app/welcome";
    
    const downloadQR = () => {
        const canvas = document.querySelector("canvas");
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-strem");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "welocme-qr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return(
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Scan QR Generator</h2>
            <p>Scan this QR to open the welcome page!</p>
            <div style={{marginTop: "20px"}}>
                <QRCodeCanvas value={url} size={200} />
            </div>

            <button 
            onClick={downloadQR}
            style={{marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
            }}>
                Download QR Code
            </button>

            <p style={{marginTop: "15px", color: "#555"}}>
                URL Encoded in QR: <br/>
                <strong>{url}</strong>
            </p>
        </div>

    );

}

export default QRGenerator;