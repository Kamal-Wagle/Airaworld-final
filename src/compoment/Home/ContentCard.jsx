import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContentCard = ({ image, title, description, date, category, onClick, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10 }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={image || 'https://source.unsplash.com/random/800x600?technology'}
                    alt={title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box mb={1}>
                        {category && (
                            <Chip label={category} size="small" color="primary" variant="outlined" sx={{ mr: 1, fontSize: '0.7rem' }} />
                        )}
                        {date && (
                            <Typography variant="caption" color="text.secondary">
                                {date}
                            </Typography>
                        )}
                    </Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description && description.length > 100 ? `${description.substring(0, 100)}...` : description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        onClick={onClick}
                        sx={{ fontWeight: 'bold' }}
                    >
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
};

export default ContentCard;
