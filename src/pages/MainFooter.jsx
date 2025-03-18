import { Grid2 } from '@mui/material'
import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../assets/logo.svg';
import Whatsup from '../assets/whatsup.svg';
import Linkedin from '../assets/linkedin.svg';
import X from '../assets/x.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';

const pages = [
  { name: 'whatsup', link_url: Whatsup },
  { name: 'linkedin', link_url: Linkedin },
  { name: 'x', link_url: X },
  { name: 'facebook', link_url: Facebook },
  { name: 'instagram', link_url: Instagram }
];

function MainFooter() {

  return (
    <Box>
      <Grid2 container rowSpacing={3} sx={{ margin: '20px', paddingBottom: '20px', borderBottom: '1px solid #1767FE' }}>
        <Grid2 item size={{ xs: 12, sm:12, md: 4, lg: 4, xl: 4 }}>
          <div style={{ paddingBottom: '15px' }}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='footer-inner-side' style={{ width: '80%' }}>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.
          </div>
          <div>
            <Box className="footer-menu-section" sx={{ flexGrow: 1 }}>
              {pages.map((page, i) => (
                <div
                  key={i}
                  className='footer-menu-buttons'
                  sx={{ my: 2 }}
                >
                  <img src={page.link_url} alt="Logo" 
                  style={{
                    paddingRight:'10px',
                    borderRight: i !== pages.length - 1 ? '2px solid #1767FE' : 'none'}} />
                </div>
              ))}
            </Box>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 2, lg: 2, xl: 2 }}>
          <div className='footer-heading'>
            Business
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Software Center
          </div>
          <div className='footer-inner'>
            Certified Consultant
          </div>
          <div className='footer-inner'>
            Customer stories
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 2, lg: 2, xl: 2 }}>
          <div className='footer-heading'>
            Plans
          </div>
          <div className='footer-inner'>
            Enterprise
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 2, lg: 2, xl: 2 }}>
          <div className='footer-heading'>
            Support
          </div>
          <div className='footer-inner'>
            Enterprise
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 2, lg: 2, xl: 2 }}>
          <div className='footer-heading'>
            Company
          </div>
          <div className='footer-inner'>
            Enterprise
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
          <div className='footer-inner'>
            Featurs
          </div>
        </Grid2>
      </Grid2>
      <Grid2 container className='end-footer'>
        <Grid2>
          © 2025 XICS . All rights reserved.
        </Grid2>
        <Grid2>
          Terms and conditions | Privacy policy | Payment method
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default MainFooter