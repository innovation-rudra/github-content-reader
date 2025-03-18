import { Box, Grid2, Rating } from '@mui/material'
import React from 'react'
import FullEmp from '../../assets/FullEmp.svg'
import ArrowButton from '../../assets/ArrowButton.svg'

function ClientReview() {
  return (
    <Box className="review-main-container">

      <Grid2 container className='div-center' sx={{ py: 5 }}>
        <Grid2 item size={{ xs: 8, md: 8, lg: 8, xl: 8 }}>
          <div className='review-heading'>
            <span style={{ paddingRight: '10px' }} >Take A Look At Some Of Our Amazing Past Clients</span>
            <span style={{ position: 'relative' }}>
              Review
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 4, md: 4, lg: 4, xl: 4 }} className="review-button-container">
          <img src={ArrowButton} alt="Logo" />
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 item size={{ xs: 12,sm:12, md: 8, lg: 8, xl: 8 }} className='review-text-container'>
          <div>
            <img src={FullEmp} alt="Logo1" style={{width:'100%',height:'100%'}} />
          </div>
          <div style={{ maxWidth: '369px', paddingInline: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <div>
              <div>
                <Rating
                  name="simple-uncontrolled"
                  defaultValue={5}
                  style={{ color: '#715DE3', height: '30px' }}
                />
              </div>
              <div className='review-text'>
                Sasency is Rank Number
                # 1 SAAS Agency! Highly
                Recomended for Saas
              </div>
              <div className='review-description'>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
              </div>
            </div>

            <div className='review-card-bottom'>
              <span className='review-name'>
                Kapil Nagar
              </span>
              <span className='review-name' style={{ paddingInline: '5px' }}>|</span>
              <span className='review-degn-name'>
                Founder and CEO
              </span>
            </div>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12,sm:12, md: 4, lg: 4, xl: 4 }} style={{display:'flex',justifyContent:'flex-end'}}>
          <div className='review-award div-center d-flex-col'>
            <div className='award-text'>
              Great Design!
            </div>
            <div className='award-description'>
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
            </div>
            <div style={{paddingBlock:'20px'}}>
              <Rating
                name="simple-uncontrolled"
                defaultValue={5}
                style={{ color: '#715DE3', height: '30px' }}
              />
            </div>
            <div className='div-center'>
              <div style={{width: 44,height: 44,background:'#D9D9D9',borderRadius:'50%'}}></div>
              <div style={{paddingInline:'20px'}}>
                <div className='award-inner-text'>Kapil Nagar</div>
                <div className='award-inner-desc'>Product Designer </div>
              </div>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default ClientReview