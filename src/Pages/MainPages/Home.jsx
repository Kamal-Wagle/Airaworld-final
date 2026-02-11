import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { healthWorkBlogs, projectsData } from './Data.js';
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../compoment/Home/ServiceCard";
import ContentCard from "../../compoment/Home/ContentCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SEO from "../../compoment/common/SEO";

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const services = [
    { title: 'Research & Innovation', description: 'Cutting-edge research addressing real-world challenges.', icon: <ScienceIcon fontSize="large" /> },
    { title: 'Software Development', description: 'Comprehensive solutions from concept to deployment.', icon: <CodeIcon fontSize="large" /> },
    { title: 'Tool Development', description: 'Robust tools tailored for research and industry needs.', icon: <BuildIcon fontSize="large" /> },
    { title: 'eLearning Services', description: 'Customized, interactive courses for professional growth.', icon: <SchoolIcon fontSize="large" /> },
    { title: 'Professional Training', description: 'Expert-led training in data science, GIS, and more.', icon: <WorkIcon fontSize="large" /> },
    { title: 'Event Organization', description: 'Seamless management of workshops and conferences.', icon: <EventIcon fontSize="large" /> },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <SEO
        title="Home"
        description="Axon Infotech Research Academy (AIRA) - Leading health informatics and public health research in Nepal."
        keywords="Health Informatics, Public Health, Research, Nepal, AI, Data Science"
      />
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Innovating Healthcare with Data Science
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
              Axon Infotech Research Academy (AIRA) is dedicated to revolutionizing patient care through cutting-edge technology and research.
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2, px: 4, py: 1.5, fontSize: '1.1rem' }}
                onClick={() => navigate('/projects')}
              >
                Our Projects
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'white', color: 'white', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' } }}
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
                Who We Are
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Pioneering Research & Development
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Axon Infotech Research Academy evolved from a community health initiative to a premier research institution. We combine clinical expertise with data-driven innovation to solve complex healthcare challenges.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Originally established as Rara Medical Hall in 2017, we have grown into AIRA, focusing on the intersection of healthcare technology and data science to serve our community and beyond.
              </Typography>
              <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/about')} sx={{ mt: 2, fontSize: '1rem' }}>
                Read Our Story
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/Images/AboutUs.jpeg"
                alt="About AIRA"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'rgba(237,241,226, 0.3)', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
              What We Do
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
              Our Core Services
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard {...service} delay={index * 0.1} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
          <Box>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
              Our Work
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
              Featured Projects
            </Typography>
          </Box>
          <Button variant="outlined" onClick={() => navigate('/projects')}>View All</Button>
        </Box>
        <Grid container spacing={4}>
          {projectsData.slice(0, 3).map((project, index) => (
            <Grid item xs={12} md={4} key={project.id}>
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
          ))}
        </Grid>
      </Container>

      {/* Blogs Section */}
      <Box sx={{ bgcolor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
            <Box>
              <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
                Insights
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
                Latest Articles
              </Typography>
            </Box>
            <Button variant="outlined" onClick={() => navigate('/blogs')}>View All</Button>
          </Box>
          <Grid container spacing={4}>
            {healthWorkBlogs.slice(0, 3).map((blog, index) => (
              <Grid item xs={12} md={4} key={blog.id}>
                <ContentCard
                  title={blog.title}
                  description={blog.content[0]} // Use first paragraph as description
                  image={blog.image}
                  date={blog.date}
                  category="Blog"
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                  delay={index * 0.1}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Collaborate?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 300, opacity: 0.9 }}>
            Join us in shaping the future of healthcare technology.
          </Typography>
          <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/getintouch')}>
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};



export default Home;
