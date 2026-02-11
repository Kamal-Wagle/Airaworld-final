import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Axon Infotech Research Academy (AIRA)";
    const defaultDescription = "Axon Infotech Research Academy (AIRA) is a leading research institution in Nepal, specializing in health informatics, data science, and public health research.";
    const defaultKeywords = "Research, Nepal, Health Informatics, Data Science, Public Health, AI in Healthcare, AIRA";
    const defaultImage = "/Logo.jpeg"; // Ensure this image exists in public folder
    const siteUrl = "https://airaworld.org";

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullDescription = description || defaultDescription;
    const fullKeywords = keywords || defaultKeywords;
    const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="keywords" content={fullKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={fullDescription} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
};

export default SEO;
