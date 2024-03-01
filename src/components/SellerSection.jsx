import { Box, Typography } from "@mui/material";
import React from "react";

function SellerSection() {
  return (
    <>
      <Box>
        <Box sx={{ width:{lg:"70%",md:"80%",sm:"85%",xs:"90%"}, p: 2 }}>
          <Box sx={{ pl: 2, pr: 2, display: "flex" }}>
            <Box sx={{ mr: 2, background: "#FEF7F4", p: 1, borderRadius: 3 }}>
              Bestseller
            </Box>
            <Box sx={{ background: "#F5F5F5", p: 1, borderRadius: 3 }}>
              Free Cancellation
            </Box>
          </Box>
          <Typography sx={{ fontSize:{lg:40,md:35,sm:32,xs:30}, color: "#05073C", fontWeight: 600 }}>
            Phi Phi Islands Adventure Day Trip With SeaView Launch by V.Marine
            Tour
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "left",gap:4,pl:"20%" }}>
          <Box>4.8(269)</Box>
          <Box>Paris,France</Box>
          <Box>30K+ booked</Box>
        </Box>
        </Box>
       
      </Box>
    </>
  );
}

export default SellerSection;
