import { Box } from '@mui/material'
import React from 'react'
import Sponsers from '../widgets/homeComponents/Sponsers'
import OurTeam from '../widgets/homeComponents/OurTeam'
import ClientReview from '../widgets/homeComponents/ClientReview'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import Emp1 from '../assets/emp1.svg'
import Emp2 from '../assets/emp2.svg'
import Emp3 from '../assets/emp3.svg'
import CommonHeaderContent from '../components/CommonHeaderContent'
import DigitalProducts from '../widgets/aboutUs/DigitalProducts'
import PerfectSolution from '../widgets/aboutUs/PerfectSolution'

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

function About() {
  return (
    <Box className='width-100'>
      <CommonHeaderContent data={{ linkName: 'Home /  About us', name: 'About Us', description: 'Powerful project management tools for your companies of all sizes.' }} />
      <DigitalProducts />
      <PerfectSolution />
      <OurTeam data={{ pages1 }} />
      <ClientReview />
      <Sponsers />
      <NewsLetter />
    </Box>
  )
}

export default About