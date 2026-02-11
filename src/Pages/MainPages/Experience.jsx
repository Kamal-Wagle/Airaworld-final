import React from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from "../../compoment/common/SEO";

const Experience = () => {
  // Placeholder experience data
  const experiences = [
    {
      year: "2023 - Present",
      title: "Spatial Analysis of TB Prevalence",
      description: "Conducting in-depth spatial analysis of Tuberculosis prevalence in Nepal using advanced GIS techniques and data modeling."
    },
    {
      year: "2024 - Present",
      title: "Hybrid Model Development (ARIMA-CNNAR)",
      description: "Developing a cutting-edge hybrid model for Tuberculosis incidence time series analysis to improve predictive accuracy."
    },
    {
      year: "2022",
      title: "Establishment of AIRA",
      description: "Founded Axon Infotech Research Academy to bridge the gap between technology and public health research in Nepal."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Our Experience & Journey"
        description="Explore the milestones and achievements of AIRA in transforming healthcare through research and technology."
        keywords="AIRA Experience, Research Milestones, Health Informatics Journey, TB Research Nepal"
      />
      <Box sx={{ textAlign: 'center', mb: 8, bgcolor: 'primary.main', py: 8, color: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Our Journey
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Milestones in our mission to transform healthcare research.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Stepper orientation="vertical">
          {experiences.map((exp, index) => (
            <Step key={index} active={true}>
              <StepLabel
                StepIconProps={{
                  sx: { color: 'secondary.main' }
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {exp.year}
                </Typography>
              </StepLabel>
              <StepContent>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper elevation={1} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom color="primary.dark">
                      {exp.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {exp.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default Experience;
