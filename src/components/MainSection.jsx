import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";

function MainSection() {
  return (
    <>
      <Box sx={{ display: "flex", pt: 4, pl: 2, pl: 2 }}>
        <Box sx={{ width: "70%" }}>
          <Box
            sx={{
              display: "flex",
              height: "50px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "45px",
                  height: "50px",
                  border: "1px solid #bababa",
                  mr: 1,
                  borderRadius: "7px",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Duration</Typography> 3
                days
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "45px",
                  height: "50px",
                  border: "1px solid #bababa",
                  mr: 1,
                  borderRadius: "7px",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Group Size</Typography> 3
                days
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "45px",
                  height: "50px",
                  border: "1px solid #bababa",
                  mr: 1,
                  borderRadius: "7px",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Ages</Typography> 3 days
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "45px",
                  height: "50px",
                  border: "1px solid #bababa",
                  mr: 1,
                  borderRadius: "7px",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Languages</Typography> 3
                days
              </Box>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "40px", fontWeight: 700, mt: 4 }}>
            Tour Overview
          </Typography>
          <Typography
            sx={{ fontSize: "18px", lineHeight: "28.13px", mt: 3, mb: 2 }}
          >
            The Phi Phi archipelago is a must-visit while in Phuket, and this
            speedboat trip whisks you around the islands in one day. Swim over
            the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel
            at Bamboo Island, and visit Monkey Beach and Maya Bay, immortalized
            in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling
            equipment, and Phuket hotel pickup and drop-off all included.
          </Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
            Tour Highlights
          </Typography>
          <Box sx={{ pl: 2 }}>
            <List sx={{ listStyleType: "disc" }}>
              <ListItem sx={{ display: "list-item", fontSize: "18px" }}>
                Experience the thrill of a speedboat to the stunning Phi Phi
                Islands
              </ListItem>
              <ListItem sx={{ display: "list-item", fontSize: "18px" }}>
                Be amazed by the variety of marine life in the archepelago
              </ListItem>
              <ListItem sx={{ display: "list-item", fontSize: "18px" }}>
                Enjoy relaxing in paradise with white sand beaches and azure
                turquoise water
              </ListItem>
              <ListItem sx={{ display: "list-item", fontSize: "18px" }}>
                Feel the comfort of a tour limited to 35 passengers
              </ListItem>
              <ListItem sx={{ display: "list-item", fontSize: "18px" }}>
                Catch a glimpse of the wild monkeys around Monkey Beach
              </ListItem>
            </List>
          </Box>
          <Divider sx={{ mb: 5, mt: 5 }} />
          <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
            What's Included
          </Typography>
          <Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
              <List sx={{width:"350px", listStyleType: "disc",ml:2,'&.MuiList-padding':"5px"}}>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}> Beverages, drinking water, morning tea and buffet lunch</ListItem>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}>Local taxes</ListItem>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}>Hotel pickup and drop-off by air-conditioned minivan</ListItem>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}>InsuranceTransfer to a private pier</ListItem>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}>Soft drinks</ListItem>
                <ListItem sx={{ display: "list-item", fontSize: "18px" }}>Tour Guide</ListItem>
              </List>
              <List>
                <ListItem>Towel</ListItem>
                <ListItem>Tips</ListItem>
                <ListItem>Alcoholic Beverages</ListItem>
              </List>
            </Box>
            <Divider sx={{ mb: 5, mt: 5 }} />
            <Box></Box>
          </Box>
        </Box>
        <Box sx={{ width: "30%" }}></Box>
      </Box>
    </>
  );
}

export default MainSection;
