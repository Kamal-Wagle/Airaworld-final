import React, { useState } from "react";
import { Container, Typography, Grid, Box, TextField, InputAdornment } from "@mui/material";
import { healthWorkBlogs } from "./Data.js";
import ContentCard from "../../compoment/Home/ContentCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import SEO from "../../compoment/common/SEO";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = healthWorkBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.some(paragraph => paragraph.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Our Blogs"
        description="Read the latest insights and articles on health technology, data science, and sustainable development from AIRA."
        keywords="Health Tech Blogs, Data Science Articles, Research Insights, Nepal Health News"
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
              Our Blogs
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              Insights, trends, and stories from the world of healthcare technology.
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
              placeholder="Search articles..."
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

        {/* Blogs Grid */}
        <Grid container spacing={4}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <ContentCard
                  title={blog.title}
                  description={blog.content[0]} // Using first paragraph as description
                  image={blog.image}
                  date={blog.date}
                  category="Blog"
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                  delay={index * 0.1}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" color="text.secondary" sx={{ py: 4 }}>
                No articles found matching your search.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
