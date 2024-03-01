import { Box } from '@mui/material'
import React from 'react'
import logo from'../assets/Images/logo.jpeg'

function Navbar() {
  return (
    <div>
        <Box sx={{display:"flex",justifyContent:"space-between",p:2}}>
        <Box sx={{ backgroundImage: `url(${logo})` ,height:"30px",width:"153px"}}></Box>     
        <Box sx={{display:"flex",justifyContent:"space-between",width:"500px"}}>
            <Box>Destinations</Box>
            <Box>Activities</Box>
            <Box>USD</Box>
            <Box>Signup</Box>
            <Box sx={{borderRadius:"15px",backgroundColor:"#EE7741",pl:2,pr:2,pt:.5,pb:.5}}>Login</Box>
        </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",p:3}}>
            <Box>Home{'>'}Tours{'>'}Phucket</Box>
            <Box>The 10 Best tours and Excursions</Box>
        </Box>
       
       
    </div>
  )
}

export default Navbar