import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { CEO, AdminMembers } from "./Data.js";
import TeamCard from "../../compoment/Team/TeamCard";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const AdminTeam = () => {
  // Helper to format data for TeamCard
  const formatMember = (member) => ({
    name: member.name,
    role: member.post,
    qualification: member.Qualification,
    image: member.Image || member.photoUrl,
    bio: member.introduction,
    socialLinks: [
      { icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/axon-infotech-research-academy" } // Placeholder link, utilize member specific if available
    ]
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
            Administrative Team
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, color: 'text.secondary' }}>
            The visionaries leading AIRA towards excellence.
          </Typography>
        </motion.div>
      </Container>

      <Container maxWidth="lg">
        {/* CEO Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
            Leadership
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {CEO.map((ceo, index) => (
              <Grid item xs={12} sm={6} md={4} key={ceo.id}>
                <TeamCard {...formatMember(ceo)} delay={index * 0.1} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Advisor Team */}
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
            Advisory Board
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {Array.isArray(AdminMembers) && AdminMembers.length > 0 ? (
              AdminMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={member.id}>
                  <TeamCard {...formatMember(member)} delay={index * 0.1} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography align="center">No team members found.</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminTeam;
