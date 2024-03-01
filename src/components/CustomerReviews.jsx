import { Box, Typography } from "@mui/material";
import React from "react";

function CustomerReviews() {
  return (
    <Box sx={{ width: "70%" }}>
      <Typography sx={{ fontSize: 30 }}>Customer Reviews</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 3,
          background: "#FDF0EA",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "16px" }}>Overall Rating</Typography>
          <Typography sx={{ fontSize: "13px" }}>Excellent</Typography>
        </Box>
        <Typography>5.0</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            background:"#FEF9F7"
          }}
        >
          <Box>
            <Typography sx={{fontSize:16}}>Location</Typography>
            <Typography sx={{fontSize:13}}>Excellent</Typography>
          </Box>
          <Typography>5.0</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Box>
            <Typography>Location</Typography>
            <Typography>Excellent</Typography>
          </Box>
          <Typography>5.0</Typography>
        </Box>
      </Box>

    </Box>
  );
}

export default CustomerReviews;
