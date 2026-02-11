import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const TeamCard = ({ name, role, qualification, image, bio, socialLinks, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            style={{ height: '100%' }}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: 2,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                    }
                }}
            >
                <CardMedia
                    component="img"
                    image={image || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}
                    alt={name}
                    sx={{
                        height: 300,
                        objectFit: 'cover',
                        objectPosition: 'top'
                    }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
                    }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }}>
                    <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" fontWeight="medium" gutterBottom>
                        {role}
                    </Typography>
                    {qualification && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                            {qualification}
                        </Typography>
                    )}

                    {bio && (
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 'auto' }}>
                            {bio.length > 150 ? `${bio.substring(0, 150)}...` : bio}
                        </Typography>
                    )}

                    {socialLinks && socialLinks.length > 0 && (
                        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                            {socialLinks.map((link, index) => (
                                <IconButton
                                    key={index}
                                    component="a"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    size="small"
                                >
                                    {link.icon}
                                </IconButton>
                            ))}
                        </Box>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default TeamCard;
