import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { healthWorkBlogs } from "./Data.js";
import useDataFetching from "../../compoment/Frequently/useDataFetching.js";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";


const Blogs = () => {

  const { isPending } = useDataFetching(); // Use useDataFetching hook
  
  const navigate = useNavigate();
  // Render Loader1 if data is pending
  
  if (isPending) {
    return <Loader1 />;
  }

  const BlogData = healthWorkBlogs;

  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Blog List
      </Typography>

      <p style={{ padding: "20px", textAlign: "justify" }}>
        Welcome to our collection of health and wellness articles. Here you'll
        find insightful posts covering various topics like nutrition, fitness,
        mental health, and more. Explore and enrich your knowledge for a
        healthier lifestyle!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {BlogData.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              width: "280px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              ":hover": { transform: "scale(1.05)" },
            }}
            onClick={() => navigate(`/blogs/${blog.id}`)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <div style={{ padding: "16px" }}>
              <h3
                style={{ margin: "0", marginBottom: "8px", fontSize: "1.2rem" }}
              >
                {blog.title}
              </h3>
              <Button variant="contained" size="small">
                View More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
