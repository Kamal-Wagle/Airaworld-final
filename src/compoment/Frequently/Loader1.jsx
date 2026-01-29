import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Loader1 = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Simulate a delay of 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsPending(false); // After 3 seconds, set isPending to false
    };

    fetchData();
  }, []);

  // If isPending is true, render the loader
  return isPending ? (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img src="/gif/ripple2.gif" alt="Loader" />
    </Box>
  ) : null; // If isPending is false, return null to not render anything
};

export default Loader1;
