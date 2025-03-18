import React from 'react'
import Sponsers from '../widgets/homeComponents/Sponsers'
import ClientReview from '../widgets/homeComponents/ClientReview'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import { Box } from '@mui/material'
import CommonHeaderContent from '../components/CommonHeaderContent'
import ServiceMain from '../widgets/ourServices/ServiceMain'
import OurServices from '../widgets/ourServices/OurServices'
import OurPricing from '../widgets/ourServices/OurPricing'

function Service() {
  return (
    <Box className='width-100'>
      <CommonHeaderContent data={{ linkName: 'Home /  Services', name: 'Services', description: 'Powerful project management tools for your companies of all sizes.' }} />
      <ServiceMain />
      <OurServices />
      <OurPricing />
      <ClientReview />
      <Sponsers />
      <NewsLetter />
    </Box>
  )
}

export default Service