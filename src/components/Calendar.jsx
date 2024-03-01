import { Box, Typography } from '@mui/material'
import React from 'react'
import CalendarImg from '../assets/Images/calendar.jpeg'
function Calendar() {
  return (
    <Box sx={{width:"70%",p:2}}>
        <Typography sx={{fontSize:30,fontWeight:"bold"}}>Availability Calendar</Typography>
        <Box sx={{height:400,width:"100%",background:`url(${CalendarImg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></Box>
    </Box>
  )
}

export default Calendar