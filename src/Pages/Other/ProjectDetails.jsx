import React from 'react';
import { useParams } from 'react-router-dom';
import { fallbackImage, projectsData } from '../MainPages/Data.js';
import { Typography, Box, Link } from '@mui/material';

const ProjectDetails = () => {
  // Extract the project ID from the URL
  const { id } = useParams();

  // Find the project object with the matching ID
  const project = projectsData.find(project => project.id == id);

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <Box p={3}>
<Typography
          variant="h3"
          gutterBottom
          style={{
            fontSize: "2em", // Example of using em unit for font size
            maxWidth: "100%", // Ensures text doesn't overflow its container
            wordWrap: "break-word", // Allows text to wrap if it exceeds container width
          }}
        >   {project.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>
        <strong>Author:</strong> {project.author}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Date:</strong> {project.date}
      </Typography>
      <Box mb={2}>
        <img src={project.image || fallbackImage} style={{ width: '100%', borderRadius: '8px' }} />
      </Box>
      <Typography variant="body1" paragraph>{project.description}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Client:</strong> {project.client}
      </Typography>
      
      <Typography variant="subtitle2" gutterBottom>
        <strong>Duration:</strong> {project.duration}
      </Typography>
        
     
    </Box>
  );
};

export default ProjectDetails;
