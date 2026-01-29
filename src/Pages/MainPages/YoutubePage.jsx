import React from "react";
import { Button, Link } from "@mui/material";
import useDataFetching from "../../compoment/Frequently/useDataFetching";
import Loader1 from "../../compoment/Frequently/Loader1";

const YoutubePage = () => {

  const { isPending } = useDataFetching(); // Use useDataFetching hook

  
  if (isPending) {
    return <Loader1 />
  }
  
  return (
    <section style={{ padding: "20px" }}>
    <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
      Welcome to Our YouTube Channel
    </h4>
    <p style={{ textAlign: "center", marginBottom: "20px" }}>
  Explore our diverse range of videos covering topics like organizational
  updates, behind-the-scenes, interviews, and much more. Don't forget to
  subscribe to stay updated with our latest content!
</p>


  <div style={{ margin: "20px" }}>
    {/* Embed the main page of a random YouTube channel */}
 <Link href="https://www.youtube.com/@airaworld2">  <img       target="_blank"  src="/Images/Youtube.png" alt="" />  </Link> 
  </div>



  <div
    style={{ display: "flex", justifyContent: "center", padding: "20px" }}
  >
    <Button
      variant="contained"
      component="a"
      href="https://www.youtube.com/@airaworld2"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "20px",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "red", // Change to the desired hover background color
        },
      }}
    >
      Our Youtube Channel
    </Button>
  </div>
</section>

  );
};

export default YoutubePage;
