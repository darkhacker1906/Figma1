import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px", width: 300 }}>
                    Beverages, drinking water, morning tea and buffet lunch
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>Local taxes</Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px", width: 300 }}>
                    Hotel pickup and drop-off by air-conditioned minivan
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>
                    InsuranceTransfer to a private pier
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>Soft drinks</Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#EFF7F1",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>Tour Guide</Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#FFE5E5",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>Towel</Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#FFE5E5",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>Tips</Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    alignItems: "flex-start",
                    gap: 2,
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      background: "#FFE5E5",
                    }}
                  ></Typography>
                  <Typography sx={{ mb: "10px" }}>
                    Alcoholic Beverages
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ mb: 5, mt: 5 }} />
            <Box></Box>
          </Box>
        </Box>
        <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "90%", height: "90%", p: 2 }}>
            <CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}
              >
                <Typography>From</Typography>
                <Typography sx={{ fontSize: 23, fontWeight: 500 }}>
                  $1,200
                </Typography>
              </Box>
              <Box
                height={"200px"}
                sx={{ border: "2px solid #ECEFF1", borderRadius: 10, mt: 4 }}
              >
                <Box
                  height={"50%"}
                  width={"100%"}
                  sx={{ display: "flex", p: 3, gap: "7px" }}
                >
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 5,
                      background: "#F5F5F5",
                    }}
                  ></Box>
                  <Box>
                    <Typography>From</Typography>
                    <Typography>February 05 ~ March 14</Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  height={"50%"}
                  width={"100%"}
                  sx={{ display: "flex", p: 3, gap: "7px" }}
                >
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 5,
                      background: "#F5F5F5",
                    }}
                  ></Box>
                  <Box>
                    <Typography>From</Typography>
                    <Typography>February 05 ~ March 14</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography sx={{ fontSize: 25, fontWeight: 500, mt: 5 }}>
                Tickets
              </Typography>
              <Stack sx={{ gap: 2, mt: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Adult (18+ years) $282.00</Typography>
                  <Typography sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                    <Typography>3</Typography>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Adult (18+ years) $282.00</Typography>
                  <Typography sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                    <Typography>3</Typography>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Adult (18+ years) $282.00</Typography>
                  <Typography sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                    <Typography>3</Typography>
                    <Typography
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid #e1dcdc",
                        borderRadius: 10,
                      }}
                    ></Typography>
                  </Typography>
                </Box>
              </Stack>
              <Stack sx={{ mt: 2, gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: 25 }}>Add Extra</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        height: 30,
                        width: 30,
                        borderRadius: 2,
                        border: "1px solid #E1DCDC",
                      }}
                    ></Typography>
                    <Typography>Add Service per booking</Typography>
                  </Box>
                  <Typography>$40</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        height: 30,
                        width: 30,
                        borderRadius: 2,
                        border: "1px solid #E1DCDC",
                      }}
                    ></Typography>
                    <Typography>Add Service per booking</Typography>
                  </Box>
                  <Typography>$40</Typography>
                </Box>
              </Stack>
              <Typography sx={{mb:1,pt:1,pb:1}}>Adult: $17.00 - Youth: $14.00</Typography>
              <Divider />
              <Box sx={{display:'flex',justifyContent:'space-between',mt:1,pt:1,pb:1}}>
                <Typography>Total</Typography>
                <Typography>$530.00</Typography>
              </Box>
              <Box sx={{height:60,width:"100%",background:"#EB662B",borderRadius:5,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",fontSize:26,color:"white"}}>Book Now</Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default MainSection;
