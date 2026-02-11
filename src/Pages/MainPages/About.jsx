import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LoopIcon from '@mui/icons-material/Loop';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SEO from "../../compoment/common/SEO";

const About = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: 'Accountability', description: 'We take responsibility for our actions and decisions, ensuring transparency and trustworthiness in all our dealings.', icon: <HandshakeIcon fontSize="large" color="secondary" /> },
    { title: 'Integrity', description: 'We uphold the highest standards of integrity, committing to ethical practices and honesty in every aspect of our work.', icon: <VerifiedUserIcon fontSize="large" color="secondary" /> },
    { title: 'Research Excellence', description: 'We are committed to producing high-quality, impactful research that contributes significantly to our chosen disciplines.', icon: <PsychologyIcon fontSize="large" color="secondary" /> },
    { title: 'Adaptability', description: 'We embrace change and are flexible in our approach, allowing us to stay ahead in a rapidly changing technological landscape.', icon: <LoopIcon fontSize="large" color="secondary" /> },
  ];

  return (
    <Box>
      <SEO
        title="About Us"
        description="Learn about Axon Infotech Research Academy (AIRA), our mission, vision, and commitment to transforming healthcare through research and technology."
        keywords="About AIRA, Mission, Vision, Health Research, Kathmandu, Nepal"
      />
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              About AIRA
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Pioneering Research & Innovation in Healthcare Technology
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Our Story & Mission */}
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" color="secondary" fontWeight="bold">
                Our Story
              </Typography>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                From Community Health to Global Innovation
              </Typography>
              <Typography paragraph color="text.secondary">
                Founded in 2017 as Rara Medical Hall, we began with a simple mission to serve the local community in Bhaktapur. Over the years, we evolved into the Rara Health Care and Research Centre, and eventually transformed into the Axon Infotech Research Academy (AIRA).
              </Typography>
              <Typography paragraph color="text.secondary">
                Today, we stand at the intersection of healthcare and data science, driving innovations that align with the vision of Digital Nepal and the Sustainable Development Goals (SDGs).
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: 3,
                  borderLeft: '6px solid',
                  borderColor: 'secondary.main',
                }}
              >
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Our Mission
                </Typography>
                <Typography paragraph>
                  To drive innovation in healthcare technology and data sciences, supporting the realization of Digital Nepal and achieving Sustainable Development Goals (SDGs) through digital technologies.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
              Our Core Values
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 2, borderRadius: 3, boxShadow: 2, '&:hover': { boxShadow: 6 } }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{value.icon}</Box>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team & Services Summary */}
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Our Team
            </Typography>
            <Typography paragraph color="text.secondary">
              Our diverse team of professionals experts, from product developers to customer service representatives, is the backbone of our success. We embrace inclusivity and foster a culture where creativity thrives.
            </Typography>
            <Button variant="outlined" color="primary" onClick={() => navigate('/research-team')}>
              Meet the Team
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Our Services
            </Typography>
            <Typography paragraph color="text.secondary">
              We offer comprehensive services including Research & Innovation, Software Development, Tool Validation, eLearning, Professional Training, and Event Organization.
            </Typography>
            <Button variant="outlined" color="primary" onClick={() => navigate('/services')}>
              Explore Services
            </Button>
          </Grid>
        </Grid>

        {/* Social Media & Contact */}
        <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'grey.100', borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Connect With Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Follow our journey and stay updated with the latest in healthcare innovation.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/profile.php?id=61560547244349"
              target="_blank"
              sx={{ bgcolor: '#1877F2' }}
            >
              Facebook
            </Button>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/company/axon-infotech-research-academy"
              target="_blank"
              sx={{ bgcolor: '#0A66C2' }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              href="https://www.youtube.com/@Airaworld2"
              target="_blank"
              sx={{ bgcolor: '#FF0000' }}
            >
              YouTube
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
