import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import "../../index.css";
import useDataFetching from "../../compoment/Frequently/useDataFetching";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";


const DeveloperTeam = () => {

  const { isPending } = useDataFetching(); // Use useDataFetching hook

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }

  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Developer Team
      </Typography>


      <section>
      <Typography
  variant="body1"
  color="initial"
  align="center"
  sx={{
    padding: '20px', // Padding on all sides
    '@media (min-width: 600px)': {
      padding: '20px 40px', // Adjust padding for wider screens
    },
    '@media (min-width: 960px)': {
      padding: '20px 100px', // Further adjust padding for larger screens
    },
    '@media (min-width: 1280px)': {
      padding: '20px 200px', // Maximum padding for very large screens
    },
  }}
>
  Meet our talented team of developers dedicated to crafting exceptional digital solutions. Each member brings unique skills and experiences to the table, ensuring innovation and excellence in every project.
</Typography>


        <section
        className="team-section"
        style={{ display: "flex", flexWrap: "wrap", textAlign: "" }}
      >
     

          <Box
       
            className="Boxa"
            style={{
              flex: "1 0 300px",
              margin: "60px",
              maxWidth: "400px",
              padding: "20px",
              height:"480px"             
            }}
          >
            <img
              src="/AdminTeam/Kamal Wagle.jpeg"
              alt="" // Ensure to use lowercase "name"
              className="Admin-Image"
              style={{alignItems:"center" , width: "340px", height: "300px" , objectFit:"cover"}}
            />
            <Typography color="initial" variant="h6" fontFamily="monospace" >
              Kamal Wagle
            </Typography>
            <Typography color="initial" variant="subtitle1" fontFamily="monospace" >
       Full Stack Developer 
            </Typography>
            <Typography
              color="initial"
              variant="body1"
              sx={{ textAlign: "", fontSize: "small" , paddingLeft:"20px" }} fontFamily="monospace" 
            >
      BSc Computer Science and Information Technology
            </Typography>
            <Button
  variant="contained"
  sx={{ marginTop: "8px", marginX: "20px", textTransform: "none" }} // Adjusted textTransform for consistent styling
  href="https://www.facebook.com/share/Wjz4sxZBb8k7Vire/?mibextid=qi2Omg"
  target="_blank"
  startIcon={<FacebookIcon />} // Include FacebookIcon as the start icon
>
  Connect With Me
</Button>


            {/* Additional details can be added here */}
           
          </Box>

      </section>



      </section>
    </>
  );
};

export default DeveloperTeam;
