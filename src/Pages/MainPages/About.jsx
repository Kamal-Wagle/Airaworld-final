import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Box,
} from "@mui/material";
import {
  fadeLeftWithOptions,
  fadeRightWithOptions,
} from "../../compoment/Frequently/aosAnimations.js";
import "../../index.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const About = () => {
  return (
    <Box sx={{ my: 4}} >
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>

      <div {...fadeLeftWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px" , textAlign:"justify" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Our Story
          </Typography>
          <Typography paragraph>
          Founded in 2017, Axon Infotech Research Academy has been dedicated to pioneering research-based innovations in healthcare technology and data sciences. Our journey began with a simple idea: to create a hub of excellence in clinical and non-clinical health services and research. Initially established as Rara Medical Hall in Gundu Bhaktapur, it later relocated to Lalitpur District, evolving into Rara Health Care and Research Centre in 2020. Despite the challenges posed by the COVID-19 pandemic, we upgraded to a 15-bed community hospital offering curative services. Eventually, we rebranded as Axon Infotech Research Academy, operating under the brand name "Airaworld," to focus primarily on research-based innovations.
          </Typography>
        </Box>
      </div>

      <div {...fadeRightWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px" , textAlign:"justify" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Our Mission
          </Typography>
          <Typography paragraph>
          At Axon Infotech Research Academy, our mission is to drive innovation in healthcare technology and data sciences, while also extending our expertise to other sectors. We are committed to supporting the Nepal government's vision to make Digital Nepal a reality and to achieving the Sustainable Development Goals (SDGs) through digital technologies. By providing exceptional research and innovative solutions, we aim to address real-world challenges and contribute to the digital transformation of Nepal. Our goal is to foster a culture of continuous learning and professional development, enhancing digital literacy, and improving access to healthcare through technology.

          </Typography>
        </Box>
      </div>

      <div {...fadeLeftWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px"  }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Our Values
          </Typography>
          {/* Make in this Card Items  */}
          <Box sx={{ display: "flex", flexWrap: "wrap"  , justifyContent:"center"}}>

  {/* Accountability (Missing in provided code, add similarly as others) */}
  <Box
    className="aaaa"
    sx={{
      margin: "20px",
      padding: "20px",
      width: {
        xs: "100%",
        sm: "calc(50% - 40px)",
        md: "calc(33.33% - 40px)",
      },
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
    }}
  >
    <div>
      <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
        Accountability
      </Typography>
      <p>
        We take responsibility for our actions and decisions, ensuring
        transparency and trustworthiness in all our dealings.
      </p>
    </div>
  </Box>

  {/* Integrity */}
  <Box
    className="aaaa"
    sx={{
      margin: "20px",
      padding: "20px",
      width: {
        xs: "100%",
        sm: "calc(50% - 40px)",
        md: "calc(33.33% - 40px)",
      },
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
    }}
  >
    <div>
      <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
        Integrity
      </Typography>
      <p>
        We uphold the highest standards of integrity, committing to ethical
        practices and honesty in every aspect of our work.
      </p>
    </div>
  </Box>

  {/* Research Excellence */}
  <Box
    className="aaaa"
    sx={{
      margin: "20px",
      padding: "20px",
      width: {
        xs: "100%",
        sm: "calc(50% - 40px)",
        md: "calc(33.33% - 40px)",
      },
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
    }}
  >
    <div>
      <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
        Research Excellence
      </Typography>
      <p>
        We are committed to producing high-quality, impactful research that
        contributes significantly to our chosen disciplines. We foster a culture
        of curiosity, critical thinking, and innovation.
      </p>
    </div>
  </Box>

  {/* Adaptability */}
  <Box
    className="aaaa"
    sx={{
      margin: "20px",
      padding: "20px",
      width: {
        xs: "100%",
        sm: "calc(50% - 40px)",
        md: "calc(33.33% - 40px)",
      },
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
    }}
  >
    <div>
      <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
        Adaptability
      </Typography>
      <p>
        We embrace change and are flexible in our approach, allowing us to stay
        ahead in a rapidly changing technological landscape and effectively
        respond to new challenges.
      </p>
    </div>
  </Box>



</Box>;



   
        </Box>
      </div>

      <div {...fadeRightWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px"  , textAlign:"justify"}}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Our Teams
          </Typography>
          <Typography paragraph>
          Our team is composed of passionate professionals who are experts in their fields. From our dedicated customer service representatives to our innovative product developers, each team member plays a crucial role in our success. We believe that a diverse and inclusive workplace fosters creativity and growth, and we are proud of the unique talents and perspectives our team members bring to Axon Infotech Research Academy.
          </Typography>
        </Box>
      </div>

      <div {...fadeLeftWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px" , textAlign:"justify" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Our Services/Products
          </Typography>
          <Typography paragraph>
          We offer a wide range of services designed to meet the needs of various sectors:
          </Typography>
          <List>
  <ListItem>
    <Typography><h2>Research & Innovation:</h2> Our team conducts cutting-edge research and fosters innovation to address real-world challenges, collaborating with industry experts and academic institutions.</Typography>
  </ListItem>
  <ListItem>
    <Typography><h2>Software Development:</h2> We provide comprehensive software development services, from initial concept to deployment, enhancing efficiency and productivity across various sectors.</Typography>
  </ListItem>
  <ListItem>
    <Typography><h2>Tool Development & Validation:</h2> We specialize in developing and validating robust tools tailored to meet specific research and industry needs, ensuring accuracy and reliability.</Typography>
  </ListItem>
  <ListItem>
    <Typography><h2>eLearning Services:</h2> Our eLearning services offer customized, interactive courses to support continuous learning and professional development, utilizing the latest technologies.</Typography>
  </ListItem>
  <ListItem>
    <Typography><h2>Professional Training:</h2> We offer in-person and virtual professional training programs in data science, Python & R programming, GIS, and other subjects, equipping individuals with essential skills and knowledge.</Typography>
  </ListItem>
  <ListItem>
    <Typography><h2>Event Organization:</h2> We organize and manage a wide range of events, from workshops and seminars to conferences and symposiums, ensuring seamless execution to foster networking and knowledge sharing.</Typography>
  </ListItem>
</List>

        </Box>
      </div>

     

     

      <div {...fadeRightWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Contact Us
          </Typography>

          <Typography paragraph>
            We would love to hear from you! Whether you have a question, feedback, or need support, our team is here to help. Please visit our Contact Us page for more information.
          </Typography>
        </Box>
      </div>

      <div {...fadeLeftWithOptions()}>
        <Box className="Box-Color" style={{ padding: "20px", margin: "10px" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
            Visit Us
          </Typography>

          <Typography paragraph>
          Axon Infotech Research Academy | Gatthaghar, Bhaktapur Nepal | Email: airaworld1982@gmail.com
          </Typography>
        </Box>
      </div>

  

<div {...fadeRightWithOptions()}>
  <Box className="Box-Color" style={{ padding: "20px", margin: "10px" }}>
    <Typography variant="h4" gutterBottom sx={{ color: "inherit" }}>
      Follow Us
    </Typography>

    <Typography paragraph>
      Stay connected with us on social media:
    </Typography>
    <List>
      <ListItem>
        <FacebookIcon sx={{ marginRight: '10px' }} />
        <Typography>
          Facebook: <a href="https://www.facebook.com/profile.php?id=61560547244349" target="_blank" rel="noopener noreferrer">https://www.facebook.com/profile.php?id=61560547244349</a>
        </Typography>
      </ListItem>
      <ListItem>
        <LinkedInIcon sx={{ marginRight: '10px' }} />
        <Typography>
          LinkedIn: <a href="https://www.linkedin.com/company/axon-infotech-research-academy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/company/axon-infotech-research-academy</a>
        </Typography>
      </ListItem>
      <ListItem>
        <YouTubeIcon sx={{ marginRight: '10px' }} />
        <Typography>
          YouTube: <a href="https://www.youtube.com/@Airaworld2" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@Airaworld2</a>
        </Typography>
      </ListItem>
    </List>
  </Box>
</div>



    </Box>
  );
};

const Section = ({ title, children }) => (
  <Card sx={{ my: 2, p: 2 }}>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default About;
