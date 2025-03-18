import { Box } from '@mui/material'
import React from 'react'
import MainContent from '../widgets/homeComponents/MainContent'
import Sponsers from '../widgets/homeComponents/Sponsers'
import BestMethod from '../widgets/homeComponents/BestMethod'
import LatestWork from '../widgets/homeComponents/LatestWork'
import OurTeam from '../widgets/homeComponents/OurTeam'
import ClientReview from '../widgets/homeComponents/ClientReview'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import OurClients from '../widgets/homeComponents/OurClients'
import Emp1 from '../assets/emp1.svg'
import Emp2 from '../assets/emp2.svg'
import Emp3 from '../assets/emp3.svg'

const pages1 = [
  {
    name: 'Kapil Nagar',
    designation: 'Funder and CEO',
    photo: Emp1
  },
  {
    name: 'Rohit',
    designation: 'Funder and CEO',
    photo: Emp2
  },
  {
    name: 'Lalit',
    designation: 'Funder and CEO',
    photo: Emp3
  },
]

function Home() {
  return (
    <Box className='width-100'>
      <MainContent />
      <Sponsers />
      <BestMethod />
      <LatestWork />
      <OurTeam data={{pages1}} />
      <OurClients />
      <ClientReview />
      <NewsLetter />
    </Box>
  )
}

export default Home