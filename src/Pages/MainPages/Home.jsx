import React from "react";
import SimpleSlider from "../../compoment/Frequently/SimpleSlider";
import { Container, Typography, Button, Box } from "@mui/material";
import { healthWorkBlogs, projectsData } from "./Data.js";
import { useNavigate } from "react-router-dom";
import useDataFetching from "../../compoment/Frequently/useDataFetching.js";
import Loader1 from "../../compoment/Frequently/Loader1.jsx";
import "./Home.css";
import {
  fadeLeftWithOptions,
  fadeRightWithOptions,
} from "../../compoment/Frequently/aosAnimations.js.js";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Home = () => {
  const { isPending } = useDataFetching(); // Use useDataFetching hook

  const navigate = useNavigate(); // Move useNavigate outside of the conditional rendering block

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }
  const BlogData = healthWorkBlogs;
  const ProjectData = projectsData;
  return (
    <>
      <section
        style={{
          // backgroundColor: "#f5f5f5",
          padding: "50px 0",
        }}
      >
        {/* Slider */}
        <SimpleSlider />

        {/* About Us Section */}
        <div {...fadeLeftWithOptions()}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgb(237,241,226)",
              borderRadius: "8px",
              padding: "30px",
              maxWidth: "", // Added max-width for responsiveness
              margin: "", // Center align the section
            }}
          >
            <Typography variant="h4" color="initial">
              About Us
            </Typography>

            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start", // Align items to flex-start
                width: "90%",
                marginTop: "20px",
                paddingL: "20px",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  width: { xs: "980%", md: "45%" },
                  marginBottom: "20px", // Add margin-bottom for spacing
                }}
              >
                {" "}
                <div {...fadeRightWithOptions()}>
                  <Typography
                    variant="body1"
                    color="initial"
                    style={{ textAlign: "justify" }}
                  >
                    Axon Infotech Research Academy is operated by highly
                    professional individuals. Initially established as Rara
                    Medical Hall in Gundu Bhaktapur in 2017 AD, the organization
                    later relocated to Lalitpur District and evolved into Rara
                    Health Care and Research Centre in 2020. Throughout this
                    transition, it has been dedicated to providing various
                    clinical and non-clinical health services to the entire
                    community, which consists of around 30,000 people, while
                    also engaging in research-based innovations. Amidst the
                    challenges posed by the COVID-19 pandemic, it was further
                    upgraded into a 15-bed community hospital, offering curative
                    services. Ultimately, it underwent a name change to Axon
                    Infotech Research Academy, operating under the brand name
                    "Airaworld," focusing primarily on research-based
                    innovations in healthcare technology and the field of data
                    sciences.
                  </Typography>
                </div>
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  marginBottom: "20px", // Add margin-bottom for spacing
                }}
              >
                <div {...fadeLeftWithOptions()}>
                  <img
                    src="/Images/AboutUs.jpeg"
                    alt=""
                    style={{
                      width: "90%",
                      borderRadius: "8px",
                      height: "300px",
                      background: "cover",
                    }}
                  />
                </div>
              </Box>
            </section>
          </section>
        </div>

        {/* Service Section */}
        <section
          style={{
            maxWidth: "", // Set max-width for responsiveness
            margin: "20px",
            backgroundColor: "rgb(237,241,226)", // Center align the section
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            align="center"
            sx={{ padding: "20px" }}
          >
            Our Services
          </Typography>

          <div {...fadeLeftWithOptions()}>
            <p sx={{ textAlign: "justify", padding: "10px 20px" }}>
              At Axon Infotech Research Academy, we are committed to pushing the
              boundaries of healthcare through groundbreaking research and
              innovation. Our team of experts is dedicated to exploring the
              latest advancements in medical technology and data sciences to
              revolutionize patient care and improve health outcomes.
            </p>
          </div>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              padding: "0 20px",
            }}
          >
            {/* Services Box 1 */}
            <Box className="aaaa"
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
                backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
              
            >
              <div {...fadeLeftWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                   Research & Innovation
                </Typography>
                <p>
                  Our team conducts cutting-edge research and fosters innovation
                  to address real-world challenges. We collaborate with industry
                  experts and academic institutions to drive impactful projects.
                </p>
              </div>
            </Box>

            {/* Services Box 2 */}
            <Box
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
          backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
            >
              <div {...fadeRightWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                  Software Development
                </Typography>
                <p>
                  We provide comprehensive software development services, from
                  initial concept to deployment. Our solutions are designed to
                  enhance efficiency and productivity across various sectors.
                </p>
              </div>
            </Box>

            {/* Services Box 3 */}
            <Box
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
          backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
            >
              <div {...fadeLeftWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                   Tool Development & Validation
                </Typography>
                <p>
                  We specialize in developing and validating robust tools
                  tailored to meet specific research and industry needs. Our
                  tools undergo rigorous testing to ensure accuracy and
                  reliability.
                </p>
              </div>
            </Box>

            {/* Services Box 4 */}
            <Box
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
          backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
            >
              <div {...fadeLeftWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                   eLearning Services
                </Typography>
                <p>
                  Our eLearning services offer customized, interactive courses
                  to support continuous learning and professional development.
                  We utilize the latest technologies to deliver engaging and
                  effective training programs.
                </p>
              </div>
            </Box>

            {/* Services Box 5 */}
            <Box
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
          backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
            >
              <div {...fadeRightWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                   Professional Training
                </Typography>
                <p>
                  We offer professional training programs in data science,
                  Python & R programming, GIS, and many others subject designed
                  to equip individuals with essential skills and knowledge. Our
                  expert instructors ensure a hands-on learning experience.
                </p>
              </div>
            </Box>

            {/* Services Box 6 */}
            <Box
              sx={{
                margin: "20px",
                padding: "20px",
                width: {
                  xs: "100%",
                  sm: "calc(50% - 40px)",
                  md: "calc(33.33% - 40px)",
                },
          backgroundColor: "rgb(213, 216, 195)",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "250px", // Set min-width to ensure a minimum width for service boxes
              }}
            >
              <div {...fadeLeftWithOptions()}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                  Event Organization
                </Typography>
                <p>
                  We organize and manage a wide range of events, from workshops
                  and seminars to conferences and symposiums. Our team ensures
                  seamless execution to foster networking and knowledge sharing.
                </p>
              </div>
            </Box>
          </Box>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////// */}

        {/* Projects section */}
        <section style={{ backgroundColor: "rgb(237,241,226)" }}>
          <Typography variant="h4" color="initial" align="center">
            Projects
          </Typography>
          <p style={{ textAlign: "justify", padding: "10px 40px" }}>
            At Axon Infotech Research Academy, we are committed to pushing the
            boundaries of healthcare through groundbreaking research and
            innovation. Our team of experts is dedicated to exploring the latest
            advancements in medical technology and data sciences to
            revolutionize patient care and improve health outcomes.
          </p>

          {/* Here /////////////////////////////////////////////////// */}
          <div
  style={{
    display: "flex",
    margin: "40px",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent:"center"
  }}
>
  {ProjectData && ProjectData.length > 0 ? (
    ProjectData.slice(0, 4).map((project) => (
      <div
        key={project.id}
        style={{
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          width: "280px",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          ":hover": { transform: "scale(1.05)" },
        }}
        onClick={() => navigate(`/projects/${project.id}`)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <div style={{ padding: "16px" }}>
          <h4>{project.title}</h4>
          {/* Check if project.description exists before slicing */}
          <p>{project.description && project.description.slice(0, 80)} ....</p>
          <p>Date:{project.date}</p>

          <Button variant="contained" size="small">
            View More
          </Button>
        </div>
      </div>
    ))
  ) : (
    <div>No projects available</div>
  )}
</div>



          <div
            style={{ display: "flex", justifyContent: "center" }}
            onClick={() => {
              navigate("/projects");
            }}
          >
            <Button
              variant="contained"
              sx={{ padding: "10px", margin: "20px" }}
            >
              View All projects
            </Button>
          </div>
        </section>

        {/* Latest Article or Blogs */}

        <section>
  <Typography
    variant="h4"
    sx={{
      fontSize: { xs: "24px", sm: "26px", md: "28px", lg: "30px" },
      fontFamily: "sans-serif",
      display:"flex"
      , justifyContent:"center" , padding:"8px"
    }}
  >
    Latest Articles or Blogs
  </Typography>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center", // Center the items horizontally
      gap: "20px",
      padding: "20px", // Added padding for better spacing
      backgroundColor: "rgb(237,241,226)",
    }}
  >
    {BlogData && BlogData.length > 0 ? (
      BlogData.slice(0, 4).map((blog) => (
        <div
          key={blog.id}
          style={{
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            width: "280px",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            ":hover": { transform: "scale(1.05)" },
          }}
          onClick={() => navigate(`/blogs/${blog.id}`)}
        >
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <div style={{ padding: "16px" }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ marginBottom: "8px", fontSize: "1.2rem" }}
            >
              {blog.title}
            </Typography>
            <Button variant="contained" size="small">
              View More
            </Button>
          </div>
        </div>
      ))
    ) : (
      <div>No blogs available</div>
    )}
  </div>
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <Button
      variant="contained"
      sx={{ padding: "10px", margin: "20px" }}
      onClick={() => {
        navigate("/blogs");
      }}
    >
      View All Blogs
    </Button>
  </div>
</section>


        {/* Edge IT Solutions [Last Section ] */}
        
   

      </section>
      <Box
          sx={{
            // backgroundColor: "#f5f5f5",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "rgb(237,241,226)",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h" component="h2" gutterBottom>
              Innovating Healthcare with Cutting-Edge IT Solutions
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Connect With Us
            </Typography>
            <Box >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                
                  "&:hover": { backgroundColor: "#3b5998", color: "#ffffff" },
                }}
                href="https://www.facebook.com/people/Axon-Infotech-Research-Academy-AIRA/61560547244349/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ marginRight: 1 }} />
                FaceBook
              </Button>
            
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  margin: 1,
                  "&:hover": { backgroundColor: "#0e76a8", color: "#ffffff" },
                }}
                href="https://www.linkedin.com/in/airaworld-com-551908312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ marginRight: 1 }} />
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  margin: 1,
                  "&:hover": { backgroundColor: "#c4302b", color: "#ffffff" },
                }}
                href="https://www.youtube.com/@airaworld2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ marginRight: 1 }} />
                YouTube
              </Button>
            </Box>
          </Container>
        </Box>
    </>
  );
};

export default Home;
