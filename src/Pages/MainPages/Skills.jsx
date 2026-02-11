import React from 'react';
import { Container, Typography, Box, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from "../../compoment/common/SEO";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & Analysis",
      skills: ["Python", "R", "Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Data Visualization"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Material UI", "JavaScript", "HTML5", "CSS3", "Git"]
    },
    {
      title: "GIS & Mapping",
      skills: ["QGIS", "ArcGIS", "Spatial Analysis", "Remote Sensing", "Geoinformatics"]
    },
    {
      title: "Research Tools",
      skills: ["SPSS", "Stata", "Quantitative Research", "Qualitative Research", "Technical Writing"]
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Technical Expertise & Skills"
        description="Explore the technical expertise of AIRA, from Data Science and GIS to Web Development and Research Methodologies."
        keywords="Data Science Skills, GIS Expertise, Web Development, Research Tools, Python, R, React"
      />
      <Box sx={{ textAlign: 'center', mb: 8, bgcolor: 'primary.main', py: 8, color: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Technical Expertise
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Tools and technologies we leverage to drive innovation.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {category.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontWeight: 'medium'
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
