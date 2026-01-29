import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div
      style={{
        position: "",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ccc",
        paddingBottom: "10px",
        paddingTop: "10px",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Axon Infotech Research Academy. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary">
        Privacy Policy | Terms of Service | Accessibility Statement
      </Typography>
    </div>
  );
};

export default Footer;
