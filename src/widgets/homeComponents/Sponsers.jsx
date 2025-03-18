import { Box } from '@mui/material'
import React from 'react'
import Logo1 from '../../assets/Logo1.svg';
import Logo2 from '../../assets/Logo2.svg';
import Logo3 from '../../assets/Logo3.svg';
import Logo4 from '../../assets/Logo4.svg';

function Sponsers() {
  return (
    <Box className="sponser-container">
      <div className='our-sponser'>
        <span style={{ paddingRight: '10px' }}>Our</span>
        <span style={{ position: 'relative' }}>
          Sponsors
          <span className='text-overflow-border-yellow-line-10'></span>
        </span>
      </div>
      <div className='our-sponser-text'>
        We are blessed to work with leading brands & Companies
      </div>
      <div className='sponsers-image'>
        <div className='sponser-image-inner'>
          <img src={Logo1} alt="Logo1" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className='sponser-image-inner'>
          <img src={Logo2} alt="Logo2" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className='sponser-image-inner'>
          <img src={Logo3} alt="Logo3" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className='sponser-image-inner'>
          <img src={Logo4} alt="Logo4" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </Box>
  )
}

export default Sponsers