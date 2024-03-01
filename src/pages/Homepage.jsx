import React from 'react'
import Navbar from '../components/Navbar'
import SellerSection from '../components/SellerSection'
import ImageSection1 from '../components/ImageSection1'
import MainSection from '../components/MainSection'
import Itinerary from '../components/Itinerary'
import TourMap from '../components/TourMap'
import Calendar from '../components/Calendar'
import Faq from '../components/Faq'
import { Box } from '@mui/material'
import CustomerReviews from '../components/CustomerReviews'

function Homepage() {
  return (
    <Box sx={{p:2}}>
    <Navbar/>
    <SellerSection/>
    <ImageSection1/>
    <MainSection/>
    {/* <Itinerary/> */}
    <TourMap/>
    <Calendar/>
    <Faq/>
    <CustomerReviews/>
    </Box>
  )
}

export default Homepage