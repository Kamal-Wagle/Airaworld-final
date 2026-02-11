import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import TeamCard from "../../compoment/Team/TeamCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

const DeveloperTeam = () => {
  const developer = {
    name: "Kamal Wagle",
    role: "Full Stack Developer",
    qualification: "BSc Computer Science and Information Technology",
    image: "/AdminTeam/Kamal Wagle.jpeg",
    bio: "Dedicated to crafting exceptional digital solutions. Bringing unique skills and experiences to ensure innovation and excellence in every project.",
    socialLinks: [
      { icon: <FacebookIcon />, url: "https://www.facebook.com/share/Wjz4sxZBb8k7Vire/?mibextid=qi2Omg" }
    ]
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md" sx={{ mb: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Developer Team
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, color: 'text.secondary' }}>
            Meet the minds behind our digital presence.
          </Typography>
        </motion.div>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard {...developer} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeveloperTeam;
