import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Link } from "@mui/material";
import { healthWorkBlogs } from "../MainPages/Data.js";

const BlogsDetails = () => {
  // Extract the blog ID from the URL
  const { id } = useParams();

  // Find the blog post with the matching ID
  const selectedBlog = healthWorkBlogs.find((blog) => blog.id === parseInt(id));

  // Function to render paragraphs with Typography component
  const renderContent = () => {
    return selectedBlog.content.map((paragraph, index) => (
      <Typography key={index} variant="h6" paragraph>
        {paragraph}
      </Typography>
    ));
  };

  // Render the details of the selected blog post
  return (
    <Box p={3} sx={{ textAlign: "justify" }}>
      <Box mb={2}>
        <Typography
          variant="h3"
          gutterBottom
          style={{
            fontSize: "2em", // Example of using em unit for font size
            maxWidth: "100%", // Ensures text doesn't overflow its container
            wordWrap: "break-word", // Allows text to wrap if it exceeds container width
          }}
        >
          {selectedBlog.title}
        </Typography>
      </Box>

      <Typography variant="subtitle1" gutterBottom>
        <strong>Author:</strong> {selectedBlog.author}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Date:</strong> {selectedBlog.date}
      </Typography>
      <Box mb={2}>
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          style={{
            width: "100%",
            height: "900px",
            padding: "10%",
            borderRadius: "8px",
          }}
        />
      </Box>
      {/* Render content paragraphs */}
      {renderContent()}
      <Typography variant="subtitle2" gutterBottom>
        <strong>Category:</strong> {selectedBlog.category}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Tags:</strong> {selectedBlog.tags.join(", ")}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Source:</strong>{" "}
        <Link
          href={selectedBlog.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Link
        </Link>
      </Typography>
      {/* Add a link to go back to the blogs page */}
      <Box mt={3}>
        <Link href="/blogs" variant="body2">
          Back to Blogs
        </Link>
      </Box>
    </Box>
  );
};

export default BlogsDetails;
