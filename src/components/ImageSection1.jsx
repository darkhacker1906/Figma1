import { Box } from '@mui/material'
import React from 'react'
import imagePhiPhi1 from '../assets/Images/imagePhiPhi1.jpeg'
import imagePhiPhi2 from '../assets/Images/imagePhiPhi2.jpeg'
import imagePhiPhi3 from '../assets/Images/imagePhiPhi3.jpeg'
import imagePhiPhi4 from '../assets/Images/imagePhiPhi4.jpeg'

function ImageSection1() {
  return (
    <>
    <Box sx={{display:"flex",height:600,p:2,gap:1.5,flexDirection:"row"}}>
        <Box sx={{width:"60%",backgroundImage: `url(${imagePhiPhi1})`,backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover" }}></Box>
        <Box sx={{width:"40%"}}>
            <Box sx={{backgroundImage: `url(${imagePhiPhi2})`,height:"60%",width:"100%",backgroundRepeat: "no-repeat",backgroundSize:"cover"}}></Box>
            <Box sx={{height:"40%",width:"100%",display:"flex"}}>
                <Box sx={{height:"100%",width:"50%",backgroundImage: `url(${imagePhiPhi3})`}}></Box>
                <Box sx={{height:"100%",width:"50%",backgroundImage: `url(${imagePhiPhi4})`}}></Box>
            </Box>

        </Box>
    </Box>
    </>
  )
}

export default ImageSection1