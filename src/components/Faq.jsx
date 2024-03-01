import { Box, Typography } from '@mui/material'
import React from 'react'

function Faq() {
  return (
    <Box sx={{width:'70%',p:1}}>
        <Box sx={{border:"2px solid #DCE2E8",p:2,borderRadius:5}}>
        <Typography sx={{fontSize:'30px',fontWeight:"bold"}}>FAQ</Typography>
        <Box>
            <Typography sx={{fontSize:17,mb:2,mt:1}}>Can I get the refund?</Typography>
            <Typography sx={{lineHeight:2,fontSize:14}}>Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat</Typography>
        </Box>
        </Box>
        <Box ><Typography sx={{fontSize:14,border:"2px solid #DCE2E8",p:2,borderRadius:5,mt:2}}>Can I change the travel date?</Typography></Box>
        <Box ><Typography sx={{fontSize:14,border:"2px solid #DCE2E8",p:2,borderRadius:5,mt:2}}>When and where does the tour end?</Typography></Box>
        <Box ><Typography sx={{fontSize:14,border:"2px solid #DCE2E8",p:2,borderRadius:5,mt:2}}>Do you arrange airport transfers?</Typography></Box>
    </Box>
  )
}

export default Faq