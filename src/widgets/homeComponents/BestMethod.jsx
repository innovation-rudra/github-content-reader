import { Box, Grid2 } from '@mui/material'
import React from 'react'
import TaskCards from '../../components/TaskCards'
import Method1 from '../../assets/Method1.svg';
import Method2 from '../../assets/Method2.svg';
import Play from '../../assets/Play.svg'

const pages = [
  { name: 'Task' },
  { name: 'Task2' },
  { name: 'Task3' },
  { name: 'Task4' },
  { name: 'Task5' },
  { name: 'Task6' }
];

function BestMethod() {
  return (
    <Box className="method-container">
      <Grid2 container >
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }} >Our</span>
            <span style={{ position: 'relative' }}>
              Best Method
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>
          <div className='method-heading'>
            <span>For Your Company</span>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }} className='side-heading-container'>
          <div className='method-heading-description'>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
          </div>
        </Grid2>
      </Grid2>

      <Grid2 container className='div-center method-task-card-container' rowSpacing={2}>
        {pages.map((e, i) => {
          return (
            <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center'>
              <TaskCards key={i} data={{
                name: 'Task Management',
                description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was',
                imageId: e.name
              }} />
            </Grid2>
          )
        })}
      </Grid2>

      <Grid2 container sx={{ py: 8 }}>
        <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }} className='div-center'>
          <div style={{ paddingRight: '50px' }}>
            <img src={Method1} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }}>
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }}>Perfect</span>
            <span style={{ position: 'relative' }}>
              Solution
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>
          <div className='method-heading'>
            <span>For Your Company</span>
          </div>
          <div className='method-heading-side'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </div>

          <div className='method-btn-container'>
            <div className='btn-free'>
              Get started for free
            </div>
            <div className='btn-play'>
              <img src={Play} alt="Logo1" />
              <span style={{ paddingLeft: '10px' }}>Play video</span>
            </div>
          </div>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }} >
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }}>You Will Get Best Quality</span>
            <span style={{ position: 'relative' }}>
              Services
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center',paddingTop:'50px' }}>
            <div style={{ width: '74px', height: '74px', paddingRight: '20px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '39px', background: '#715DE3' }}></div>
            </div>
            <div className=''>
              <div className='best-text'>Dedicated Team</div>
              <div className='best-description'>
                There are many variations of passages of Lorem Ipsum available, but the majority have
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center',paddingTop:'30px' }}>
            <div style={{ width: '74px', height: '74px', paddingRight: '20px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '39px', background: '#715DE3' }}></div>
            </div>
            <div className=''>
              <div className='best-text'>24/7 Hours Support</div>
              <div className='best-description'>
                There are many variations of passages of Lorem Ipsum available, but the majority have
              </div>
            </div>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }} className='div-center'>
          <div style={{ paddingBottom: '15px' }}>
            <img src={Method2} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default BestMethod