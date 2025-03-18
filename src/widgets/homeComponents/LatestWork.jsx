import React from 'react'
import { Box, Grid2 } from '@mui/material';
import Button from '@mui/material/Button';
import Blue from '../../assets/Blue.svg';
import Pink from '../../assets/Pink.svg';
import Purple from '../../assets/Purple.svg';
import Yellow from '../../assets/Yellow.svg';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'All', link: '' },
  { name: 'Brand', link: '' },
  { name: 'UI/UX Design', link: '' },
  { name: 'Development', link: '' },
  { name: 'Illustration', link: '' },
  { name: 'Marketing Strategy', link: '' }
];

function LatestWork() {
  return (
    <Box className="method-container">
      <Grid2 className='div-center'>
        <div className='method-heading'>
          <span style={{ paddingRight: '10px' }} >Our</span>
          <span style={{ position: 'relative' }}>
            Latest Works
            <span className='text-overflow-border-yellow-line'></span>
          </span>
        </div>
      </Grid2>
      <Grid2>
        <Box className="div-center latest-menu-section" sx={{ flexGrow: 1 }}>
          {pages.map((e, i) => (
            <Button
              key={i}
              className='menu-buttons'
              sx={{ my: 2 }}
            >
              <Link to={'/' + e.link} style={{ textDecoration: 'none', color: '#7F7A9A' }}>{e.name}</Link>
            </Button>
          ))}
        </Box>
      </Grid2>
      <Grid2 container rowSpacing={8} columnSpacing={5}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center'>
          <img src={Purple} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center'>
          <img src={Yellow} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center'>
          <img src={Blue} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center'>
          <img src={Pink} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Grid2>
      </Grid2>
      <Grid2 className='div-center p-block-50'>
        <div className='btn-free'>
          Get started for free
        </div>
      </Grid2>
    </Box>
  )
}

export default LatestWork