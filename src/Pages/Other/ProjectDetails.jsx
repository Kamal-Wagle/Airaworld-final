import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../MainPages/Data.js';
import {
  Typography,
  Box,
  Container,
  Grid,
  Chip,
  Button,
  Divider,
  Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import SEO from "../../compoment/common/SEO";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(project => project.id == id);

  if (!project) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Project Not Found</Typography>
        <Button variant="contained" onClick={() => navigate('/projects')}>Back to Projects</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.title}, Public Health, Research Project, Nepal`}
        image={project.image}
        url={`/projects/${id}`}
      />
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{ mb: 4 }}
        >
          Back to Projects
        </Button>

        <Grid container spacing={6}>
          {/* Project Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: 3,
                  maxHeight: '500px',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </Grid>

          {/* Project Details */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" color="secondary" fontWeight="bold">
                {project.category || "Project Case Study"}
              </Typography>
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                {project.title}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                {project.status && <Chip label={project.status} color={project.status === 'Present' ? 'success' : 'default'} />}
                {/* Add more chips if data exists */}
              </Stack>

              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                {project.description}
              </Typography>

              <Divider sx={{ my: 4 }} />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PersonIcon color="action" />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">Author</Typography>
                      <Typography variant="body2" fontWeight="medium">{project.author || "AIRA Team"}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <CalendarTodayIcon color="action" />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">Date</Typography>
                      <Typography variant="body2" fontWeight="medium">{project.date}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <BusinessIcon color="action" />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">Client</Typography>
                      <Typography variant="body2" fontWeight="medium">{project.client || "Internal"}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon color="action" />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">Duration</Typography>
                      <Typography variant="body2" fontWeight="medium">{project.duration || "N/A"}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {project.technologies && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle2" gutterBottom>Technologies Used:</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} variant="outlined" size="small" />
                    ))}
                  </Stack>
                </Box>
              )}

            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
