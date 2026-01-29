import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./ReserchTeam.css"; // Corrected CSS import path
import { CEO, AdminMembers } from "./Data.js"; // Assuming correct import path to Data.js
import useDataFetching from "../../compoment/Frequently/useDataFetching.js";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Import LinkedInIcon from Material-UI icons

const AdminTeam = () => {
  const { isPending } = useDataFetching(); // Use useDataFetching hook

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop in case fallback image also fails
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; // Placeholder URL for error image
  };

  return (
    <>
      <section
        className="team-section"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {CEO.map((ceo) => (
          <Box
            key={ceo.id}
            className="Boxa"
            style={{
              flex: "1 0 300px",
              margin: "20px",
              padding: "20px",
              maxWidth: "300px",
              height: "380px",
              textAlign: "center", // Center align content inside each Box
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center align items horizontally
            }}
          >
            <img
              src={ceo.Image}
              alt={ceo.name.toLowerCase()} // Ensure to use lowercase "name"
              className="Admin-Image"
              style={{ width: "60%", height: "60%", marginBottom: "10px" }}
              onError={handleImageError}
            />
            <Typography color="initial" variant="h6" fontFamily="monospace">
              {ceo.name}
            </Typography>
            <Typography
              color="initial"
              fontFamily="monospace"
            >
              Post: {ceo.post}
            </Typography>
            <Typography
              color="initial"
              variant="body1"
              sx={{ fontSize: "", paddingLeft: "20px" }}
              fontFamily="monospace"
            >
              {ceo.Qualification}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              component="a"
              href="https://np.linkedin.com/in/cmwagle"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2 }} // Adds margin-top to the button for spacing
            >
              LinkedIn
            </Button>
          </Box>
        ))}
      </section>

      <Typography
        variant="h4"
        color="initial"
        sx={{ textAlign: "center", marginTop: "60px" }}
      >
        Advisor Team
      </Typography>

      <section
        className="team-section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "40px",
          margin: "40px",
        }}
      >
        {Array.isArray(AdminMembers) && AdminMembers.length > 0 ? (
          AdminMembers.map((member) => (
            <Box
              key={member.id}
              className="Boxa"
              style={{
                flex: "1 0 300px",
                margin: "60px",
                maxWidth: "300px",
                padding: "20px",
                height: "380px",
                textAlign: "",
              }}
            >
              <img
                src={member.photoUrl} // Assuming photoUrl is correctly defined
                alt={member.name} // Changed to lowercase "name"
                className="Admin-Image"
                style={{ width: "60%", height: "60%" }}
                onError={handleImageError}
              />

              <Typography color="initial" variant="h6">
                Name: {member.name} {/* Changed to lower case "name" */}
              </Typography>
              <Typography color="initial" variant="subtitle1">
                {member.post} {/* Changed to lower case "post" */}
              </Typography>
              <Typography
                color="initial"
                variant="body1"
                sx={{ padding: "", fontSize: "small" }}
              >
                Qualification: {member.Qualification}
                {/* Assuming introduction contains Qualification information */}
              </Typography>

              {/* Additional details can be added here */}

              <Box
                className="Boxb"
                sx={{
                  flex: "1 0 300px",
                  margin: "10px",
                  maxWidth: "300px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  textAlign: "center", // Optional: Centers text inside the Box
                }}
              >
                <Typography variant="body1" gutterBottom>
                  Brief: {member.introduction}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  component="a"
                  href="https://www.linkedin.com/in/example-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 2 }} // Adds margin-top to the button for spacing
                >
                  LinkedIn
                </Button>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="body1" color="initial">
            No team members found.
          </Typography>
        )}
      </section>
    </>
  );
};

export default AdminTeam;
