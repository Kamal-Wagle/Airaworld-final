import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { TeamMembers } from "./Data.js";
import TeamCard from "../../compoment/Team/TeamCard";
import { motion } from "framer-motion";

const ResearchTeam = () => {
  const formatMember = (member) => ({
    name: member.Name,
    role: member.Post,
    qualification: member.Qualification,
    image: member.Image,
    bio: member.Brief,
    socialLinks: [] // Add icons if available in data in future
  });

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md" sx={{ mb: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Research Team
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, color: 'text.secondary' }}>
            Innovating for a better tomorrow through rigorous research.
          </Typography>
        </motion.div>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {TeamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <TeamCard {...formatMember(member)} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ResearchTeam;
