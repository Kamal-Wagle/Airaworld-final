// MainRoutes.js
import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../Pages/MainPages/Home.jsx";
import Contact from "../Pages/MainPages/Contact.jsx";
import Blogs from "../Pages/MainPages/Blogs.jsx";
import Experience from "../Pages/MainPages/Experience.jsx";
import Projects from "../Pages/MainPages/Projects.jsx";
import Skills from "../Pages/MainPages/Skills.jsx";
import About from "../Pages/MainPages/About.jsx";
import Gallery from "../Pages/MainPages/Gallery.jsx";
import Services from "../Pages/MainPages/Services.jsx";
import Board from "../Pages/MainPages/Board.jsx";
import AdminTeam from "../Pages/MainPages/AdminTeam.jsx";
import ResearchTeam from "../Pages/MainPages/ResearchTeam.jsx";
import DeveloperTeam from "../Pages/MainPages/DeveloperTeam.jsx";
import EcenterLearning from "../Pages/MainPages/EcenterLearning.jsx";
import ProjectDetails from "../Pages/Other/ProjectDetails.jsx";
import SearchSite from "../Pages/MainPages/SearchSite.jsx";
import YoutubePage from "../Pages/MainPages/YoutubePage.jsx";
import BlogDetails from "../Pages/Other/BlogDetails.jsx";
import GetinTouch from "../Pages/MainPages/GetinTouch.jsx";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "admin-team",
        element: <AdminTeam />,
      },
      {
        path: "research-team",
        element: <ResearchTeam />,
      },
      {
        path: "developer-team",
        element: <DeveloperTeam />,
      },
      {
        path: "elearning-center",
        element: <EcenterLearning />,
      },
      {
        path: "SearchSite",
        element: <SearchSite />,
      },
      {
        path: "youtube",
        element: <YoutubePage />,
      },

      {
        path: "getintouch",
        element: <GetinTouch />,
      },

      // Details Page
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
];

export default MainRoutes;

// const navItems = [
//   { Name: "Home", path: "/" },
//   { Name: "About", path: "/about" },
//   { Name: "Skills", path: "/skills" },
//   { Name: "Projects", path: "/projects" },
//   { Name: "Experience", path: "/experience" },
//   { Name: "Blog", path: "/blog" },
//   { Name: "Contact", path: "/contact" },
// ];
