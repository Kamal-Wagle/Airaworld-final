import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { fallbackImage, projectsData } from "./Data.js";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";
import useDataFetching from "../../compoment/Frequently/useDataFetching.js";
// https://static4.depositphotos.com/1000816/514/i/450/depositphotos_5140926-stock-photo-closeup-of-employee-in-the.jpg
const Projects = () => {
  const { isPending } = useDataFetching(); // Use useDataFetching hook
  const navigate = useNavigate();
  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }

  // Filter projects based on status
  const filterProjectsByStatus = (status) => {
    return projectsData.filter((project) => project.status === status);
  };

  const renderProjectBoxes = (projects) => {
    return projects.map((project) => (
      <div
        className="Project-Box"
        key={project.id}
        onClick={() => navigate(`/projects/${project.id}`)}
      >
        <img src={project.image || fallbackImage} />
        <h5 style={{ textAlign: "justify" }}>{project.title}</h5>
        <Button variant="contained">View More</Button>
      </div>
    ));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
      <Typography
        variant="h4"
        color="initial"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Projects
      </Typography>

      <Box sx={{ my: 4 }}>
        {filterProjectsByStatus("Present").length > 0 && (
          <>
            <Typography variant="h5" gutterBottom>
              Present Projects
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {renderProjectBoxes(filterProjectsByStatus("Present"))}
            </Box>
          </>
        )}
      </Box>

      <Box sx={{ my: 4 }}>
        {filterProjectsByStatus("Past").length > 0 && (
          <>
            <Typography variant="h5" gutterBottom>
              Past Projects
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {renderProjectBoxes(filterProjectsByStatus("Past"))}
            </Box>
          </>
        )}
      </Box>

      <Box sx={{ my: 4 }}>
        {filterProjectsByStatus("Future").length > 0 && (
          <>
            <Typography variant="h5" gutterBottom>
              Future Projects
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {renderProjectBoxes(filterProjectsByStatus("Future"))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
