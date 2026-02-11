import React, { useState } from "react";
import { Container, Typography, Grid, Box, TextField, InputAdornment } from "@mui/material";
import { projectsData } from "./Data.js";
import ContentCard from "../../compoment/Home/ContentCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import SEO from "../../compoment/common/SEO";

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Our Projects"
        description="Explore our latest research projects on Tuberculosis, digital health, and public health interventions in Nepal."
        keywords="Public Health Projects, TB Research, Digital Health Initiatives, Nepal Research"
      />

      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 8, bgcolor: 'primary.main', py: 8, color: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Our Projects
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Exploring innovation through data science and technology.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Search Bar */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '600px' }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3, bgcolor: 'background.paper', boxShadow: 1 }
              }}
            />
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ContentCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  date={project.date}
                  category="Project"
                  onClick={() => navigate(`/projects/${project.id}`)}
                  delay={index * 0.1}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" color="text.secondary" sx={{ py: 4 }}>
                No projects found matching your search.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
