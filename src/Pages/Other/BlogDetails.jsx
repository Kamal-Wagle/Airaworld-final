import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  Button,
  Chip,
  Stack,
  Divider,
  Avatar
} from "@mui/material";
import { healthWorkBlogs } from "../MainPages/Data.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';
import { motion } from "framer-motion";
import SEO from "../../compoment/common/SEO";

const BlogsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedBlog = healthWorkBlogs.find((blog) => blog.id === parseInt(id));

  if (!selectedBlog) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Article Not Found</Typography>
        <Button variant="contained" onClick={() => navigate('/blogs')}>Back to Blogs</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title={selectedBlog.title}
        description={selectedBlog.content[0]}
        keywords={`${selectedBlog.title}, Health Blog, ${selectedBlog.tags ? selectedBlog.tags.join(', ') : 'Health Research'}`}
        image={selectedBlog.image}
        url={`/blogs/${id}`}
      />
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/blogs')}
          sx={{ mb: 4 }}
        >
          Back to Articles
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="overline" color="secondary" fontWeight="bold">
            {selectedBlog.category}
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
            {selectedBlog.title}
          </Typography>

          <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 6, color: 'text.secondary' }}>
            <Box display="flex" alignItems="center" gap={1}>
              <PersonIcon fontSize="small" />
              <Typography variant="subtitle2">{selectedBlog.author || "AIRA Team"}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="subtitle2">{selectedBlog.date}</Typography>
            </Box>
          </Stack>

          <Box
            component="img"
            src={selectedBlog.image}
            alt={selectedBlog.title}
            sx={{
              width: '100%',
              borderRadius: 4,
              boxShadow: 3,
              mb: 6,
              maxHeight: '500px',
              objectFit: 'cover'
            }}
          />

          <Box sx={{ typography: 'body1', fontSize: '1.1rem', lineHeight: 1.8 }}>
            {selectedBlog.content.map((paragraph, index) => (
              <Typography key={index} paragraph sx={{ mb: 3 }}>
                {paragraph}
              </Typography>
            ))}
          </Box>

          <Divider sx={{ my: 6 }} />

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {selectedBlog.tags.map((tag, index) => (
                    <Chip key={index} label={tag} variant="outlined" />
                  ))}
                </Stack>
              )}
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
              {selectedBlog.source && (
                <Button
                  variant="text"
                  endIcon={<LinkIcon />}
                  href={selectedBlog.source}
                  target="_blank"
                >
                  Read Original Source
                </Button>
              )}
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogsDetails;
