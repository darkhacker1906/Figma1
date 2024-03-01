import { Box } from '@mui/material'
import React from 'react'
import tourMap from '../assets/Images/tourMap.jpeg'

function TourMap() {
  return (
    <Box sx={{p:2,width:"70%"}}>
   <Box sx={{height:"600px",width:"100%",background:`url(${tourMap})`,backgroundRepeat:'no-repeat',backgroundPosition:"center"}}></Box>
    </Box>
  )
}

export default TourMap