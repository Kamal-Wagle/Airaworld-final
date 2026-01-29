import { Box, Typography } from "@mui/material";
import React from "react";
import "./Board.css";
import useDataFetching from "../../compoment/Frequently/useDataFetching";
import Loader1 from "../../compoment/Frequently/Loader1";

const Board = () => {
  const { isPending } = useDataFetching(); // Use useDataFetching hook

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }
  return (
    <>
      <section>
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Board Members
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Our board members bring a wealth of experience and expertise to Axon
            Infotech Research Academy, guiding our efforts in healthcare
            research and innovation.
          </Typography>
        </Box>
        {/* CEO Post */}
        <Box  sx={{ display: "flex", justifyContent: "center" }}>
          <Box  className="Board-Box" sx={{ backgroundColor: "rgb(213, 216, 195)" }}>
            <img
              src="https://pikwizard.com/pw/small/c958afcea4e4d8cb223df53c2dc530d7.jpg"
              alt="CEO Name"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
                transition: "transform 0.3s ease",
              }}
            />

            <Typography color="initial" variant="h6">
              Name: John Doe
            </Typography>
            <Typography color="initial" variant="subtitle1">
              Post: CEO
            </Typography>
            <Typography color="initial" variant="body1">
              John Doe is the founder and CEO of Axon Infotech Research Academy.
              With a passion for health and research, he leads the company
              towards groundbreaking discoveries and innovations in healthcare
              technology.
            </Typography>
          </Box>
        </Box>

        {/* Other Board Members */}
        <Box
          sx={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"  }}
       
        >
          <Box className="Board-Box">
            <img
              src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
              alt="Board Member 1"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
                transition: "transform 0.3s ease",
                
              }}
            />

            <Typography color="initial" variant="h6">
              Name: Jane Smith
            </Typography>
            <Typography color="initial" variant="subtitle1">
              Post: Head of Research
            </Typography>
            <Typography color="initial" variant="body1">
              Jane Smith leads the research division at Axon Infotech Research
              Academy. With expertise in molecular biology and bioinformatics,
              she spearheads projects aimed at advancing medical knowledge and
              developing new treatments.
            </Typography>
          </Box>
          <Box className="Board-Box">
            <img
              src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
              alt="Board Member 2"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
                transition: "transform 0.3s ease",
              }}
            />

            <Typography color="initial" variant="h6">
              Name: Michael Johnson
            </Typography>
            <Typography color="initial" variant="subtitle1">
              Post: Head of Health Informatics
            </Typography>
            <Typography color="initial" variant="body1">
              Michael Johnson oversees the health informatics department,
              leveraging data analytics and technology to improve healthcare
              delivery and patient outcomes. His team works on innovative
              solutions for healthcare data management and analysis.
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Board;
