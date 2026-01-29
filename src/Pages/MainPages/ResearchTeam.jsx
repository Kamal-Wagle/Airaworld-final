import { Box, Typography } from "@mui/material";
import React from "react";
import Loader1 from "../../compoment/Frequently/Loader1";
import useDataFetching from "../../compoment/Frequently/useDataFetching";
import "./ReserchTeam.css";
import { TeamMembers } from "./Data.js";

const ResearchTeam = () => {
  const { isPending } = useDataFetching(); // Use useDataFetching hook

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }

  const TeamMemberData = TeamMembers;

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop in case fallback image also fails
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; // Path to your fallback image
  };

  return (
    <>
      <Typography variant="h4" color="initial" sx={{ textAlign: 'center' }}>
        Research Team
      </Typography>

      <section className="team-section" style={{ display: "flex", flexWrap: "wrap" }}>
        {TeamMemberData.map((member) => (
          <Box
            key={member.id}
            className="Boxa"
            style={{ flex: "1 0 300px", margin: "10px", maxWidth: "300px" }}
          >
            <img
              src={member.Image}
              alt={member.Name}
              className="Admin-Image"
              style={{ width: "60%", height: "60%" }}
              onError={handleImageError}
            />
            <Typography color="initial" variant="h6">
              Name: {member.Name}
            </Typography>
            <Typography color="initial" variant="subtitle1">
              Post: {member.Post}
            </Typography>
            <Typography color="initial" variant="body1">
              Qualification: {member.Qualification}
            </Typography>
            {/* Additional details can be added here */}
            <Box className="Boxb" sx={{ flex: "1 0 300px", margin: "10px", maxWidth: "300px", justifyContent:"center" , alignContent:"center" }}>
              Brief: {member.Brief}
            </Box>
          </Box>
        ))}
      </section>
    </>
  );
};

export default ResearchTeam;
