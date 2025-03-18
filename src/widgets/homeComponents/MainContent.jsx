import { Box } from '@mui/material'
import React from 'react'
import Play from '../../assets/Play.svg'
import M from '../../assets/TotalSub.svg'
import N from '../../assets/InstagramSub.svg'
import O from '../../assets/o.svg'
import P from '../../assets/p.svg'
import R from '../../assets/r.svg'
import YellowSnake from '../../assets/YellowSnake.svg'
import PurpleSnake from '../../assets/PurpleSnake.svg'

function MainContent() {
  return (
    <Box className="main-content-container">

      <div className='main-content-text-container-all div-center position-relative'>
        <div className='display-sm-none' style={{ position: 'absolute', bottom: '0px', left: '0px' }}>
          <img src={PurpleSnake} alt="Logo1" />
        </div>

        <div className='main-content-text-container'>
          <span className='main-content-text'>The Only</span>
          <span className='main-content-span'>All In One</span>
          <span className='main-content-text'>Analytics Tool For Your Engagement</span>
        </div>

        <div className='display-sm-none' style={{ position: 'absolute', bottom: '0px', right: '0px' }}>
          <img src={YellowSnake} alt="Logo1" />
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <div className='display-sm-none'>
          <img src={M} alt="M" style={{ width: 'inherit' }} />
        </div>

        <div className='div-center d-flex-col'>
          <div className='main-content-description'>
            Prove the ROI of social media, plan more engaging content, and create automated white label analytics reports.
          </div>

          <div className='main-btn-container'>
            <div className='btn-free'>
              Get started for free
            </div>
            <div className='btn-play'>
              <img src={Play} alt="Logo1" />
              <span style={{ paddingLeft: '10px' }}>Play video</span>
            </div>
          </div>

          <div className='main-con-desc'>
            NB: No credit card required. Plans starts at $0/month.
          </div>
        </div>

        <div className='display-sm-none'>
          <img src={N} alt="N" style={{ width: 'inherit' }} />
        </div>
      </div>

      <div className='display-sm-none' style={{ marginTop: '-50px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img src={O} alt="O" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <img src={R} alt="R" style={{ width: '100%', height: '100%', paddingTop: '50px' }} />
        </div>
        <div>
          <img src={P} alt="P" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

    </Box>
  )
}

export default MainContent