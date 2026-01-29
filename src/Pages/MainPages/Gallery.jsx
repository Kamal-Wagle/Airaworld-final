import React from "react";
import { Box } from "@mui/material";
import useDataFetching from "../../compoment/Frequently/useDataFetching.js";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";

const Gallery = () => {


  const { isPending } = useDataFetching(); // Use useDataFetching hook

  
  if (isPending) {
    return <Loader1 />
  }



  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center", // Center along the main axis
        alignItems: "center", // Center along the cross axis
        "& img": {
          width: "300px",
          height: "200px",
          objectFit: "cover",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
             <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />

<img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
              <img
        src="https://via.placeholder.com/300?text=Image+2"
        alt="Image 2"
      />
    </Box>
  );
};

export default Gallery;
