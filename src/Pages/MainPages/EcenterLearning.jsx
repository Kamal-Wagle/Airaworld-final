import React from "react";
import { Typography } from "@mui/material";
import useDataFetching from "../../compoment/Frequently/useDataFetching";
import Loader1 from "../../compoment/Frequently/Loader1";

const EcenterLearning = () => {

  const { isPending } = useDataFetching(); // Use useDataFetching hook

  // Render Loader1 if data is pending
  if (isPending) {
    return <Loader1 />;
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "",
        paddingTop:"100px",
        height: "80vh",
        color:"blue"
      }}
    >
      <Typography variant="p" sx={{ display:"flex" , alignContent:"start" }}>
        This page is currently empty. It will be updated in the future with new
        features and content.
      </Typography>
    </div>
  );
};

export default EcenterLearning;
