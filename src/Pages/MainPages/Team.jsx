import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import TeamCard from '../../compoment/Team/TeamCard';
import { CEO, AdminMembers, TeamMembers } from './Data.js';
import SEO from "../../compoment/common/SEO";

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Box sx={{ py: 8 }}>
            <SEO
                title="Our Team"
                description="Meet the dedicated leadership, advisory board, and research team behind Axon Infotech Research Academy."
                keywords="AIRA Team, Research Team, Advisory Board, Leadership, Nepal Health Experts"
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
                            Meet Our Team
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.8 }}>
                            The dedicated professionals driving innovation and research at AIRA.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg">

                {/* Leadership Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" color="primary" sx={{ borderLeft: '5px solid', borderColor: 'secondary.main', pl: 2, mb: 4 }}>
                        Leadership
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {CEO.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={member.id || index}>
                                <TeamCard
                                    name={member.name}
                                    role={member.post}
                                    qualification={member.Qualification}
                                    image={member.Image}
                                    bio={member.introduction}
                                    delay={index * 0.1}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Advisory Board Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" color="primary" sx={{ borderLeft: '5px solid', borderColor: 'secondary.main', pl: 2, mb: 4 }}>
                        Advisory Board
                    </Typography>
                    <Grid container spacing={4}>
                        {AdminMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={member.id || index}>
                                <TeamCard
                                    name={member.name}
                                    role={member.post}
                                    qualification={member.Qualification}
                                    image={member.photoUrl}
                                    bio={member.introduction}
                                    delay={index * 0.1}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Research & Consultants Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" color="primary" sx={{ borderLeft: '5px solid', borderColor: 'secondary.main', pl: 2, mb: 4 }}>
                        Research Team & Consultants
                    </Typography>
                    <Grid container spacing={4}>
                        {TeamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={member.id || index}>
                                <TeamCard
                                    name={member.Name} // Note capitalized key from Data.js
                                    role={member.Post}
                                    qualification={member.Qualification}
                                    image={member.Image}
                                    bio={member.Brief}
                                    delay={index * 0.1}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default Team;
