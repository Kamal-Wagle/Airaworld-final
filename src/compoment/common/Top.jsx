import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Top = () => {
  const companyName = "Axon Infotech Research Academy";
  const companyState = "Nepal";
  const currentTime = new Date().toLocaleTimeString();
  const slogan = "Delivering Excellence Since 2020";
  const contactInfo = "Email Us: airaworld1982@gmail.com";
  const socialMediaLinks = "Follow us on Facebook and LinkedIn";

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div
        style={{
          margin: "0",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "rgb(237, 241, 240)",
        }}
      >
        <marquee behavior="scroll" direction="left" style={{ width: "98%" }}>
          {companyName} || {companyState} || Current Time: {currentTime} || {slogan} || {contactInfo} || {socialMediaLinks}
        </marquee>
      </div>

      {/* Show Only on the home page */}
      {isHomePage && (
        <Box
          sx={{
            backgroundColor: "rgb(237, 241, 226)",
            padding: "4px",
            margin: "2px",
            textAlign: "center",
          }}
        >
          <Box
            component="p"
            sx={{
              fontWeight: 'semi-bold',
              fontSize: {
                xs: '1rem', // for small screens
                sm: '1.8rem', // for medium screens
                md: '2.4rem', // for large screens
              },
              margin: "4px",
              color: "#000",
              fontFamily:"initial" ,
           
            }}
          >
            Axon Infotech Research Academy - AIRA
          </Box>
        </Box>
      )}
    </>
  );
};

export default Top;
