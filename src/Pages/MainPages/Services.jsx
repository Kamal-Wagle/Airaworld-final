import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '../../compoment/Home/ServiceCard';
import { motion } from 'framer-motion';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SEO from "../../compoment/common/SEO";

const Services = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Data Analysis & Visualization",
      description: "Transforming complex datasets into actionable insights using advanced statistical methods and interactive dashboards.",
      icon: <QueryStatsIcon fontSize="large" />
    },
    {
      title: "Geospatial Analysis (GIS)",
      description: "Mapping disease prevalence and health resources to inform targeted public health interventions.",
      icon: <PublicIcon fontSize="large" />
    },
    {
      title: "Digital Health Solutions",
      description: "Developing custom software and mobile applications to improve healthcare delivery and patient outcomes.",
      icon: <CodeIcon fontSize="large" />
    },
    {
      title: "Public Health Research",
      description: "Conducting rigorous epidemiological studies and surveys to understand health trends and needs.",
      icon: <HealthAndSafetyIcon fontSize="large" />
    },
    {
      title: "Health Informatics",
      description: "Optimizing the acquisition, storage, retrieval, and use of information in health and biomedicine.",
      icon: <AutoGraphIcon fontSize="large" />
    },
    {
      title: "Training & Capacity Building",
      description: "Empowering healthcare professionals and researchers with skills in data science and research methodology.",
      icon: <SchoolIcon fontSize="large" />
    },
    {
      title: 'Event Organization',
      description: 'We manage a wide range of events including workshops, seminars, conferences, and symposiums. Our end-to-end event management ensures seamless execution and fosters valuable networking opportunities.',
      icon: <WorkIcon fontSize="large" />
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Our Services"
        description="Comprehensive services in Data Analysis, GIS Mapping, Digital Health Solutions, and Public Health Research."
        keywords="Data Analysis, GIS, Digital Health, Public Health Services, Research Training"
      />
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8, bgcolor: 'primary.main', py: 8, color: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Comprehensive solutions driving innovation and growth.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
