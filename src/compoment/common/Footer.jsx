import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'text.primary',
        color: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              Axon Infotech Research Academy
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.400' }}>
              Innovating healthcare through cutting-edge technology and data science. We are dedicated to improving patient outcomes and fostering research excellence.
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
              <Link href="/projects" color="inherit" underline="hover">Projects</Link>
              <Link href="/blogs" color="inherit" underline="hover">Blogs</Link>
              <Link href="/getintouch" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'grey.400' }}>
              Lalitpur, Nepal
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'grey.400' }}>
              Email: airaworld1982@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              Phone: +977 9841285227
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.800' }} />

        <Box textAlign="center">
          <Typography variant="body2" color="grey.500">
            &copy; {new Date().getFullYear()} Axon Infotech Research Academy. All rights reserved.
          </Typography>
          <Box mt={1}>
            <Link href="#" color="grey.500" underline="hover" sx={{ mx: 1 }}>Privacy Policy</Link>
            |
            <Link href="#" color="grey.500" underline="hover" sx={{ mx: 1 }}>Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
