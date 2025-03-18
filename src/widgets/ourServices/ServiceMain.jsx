import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Play from '../../assets/Play.svg'
import ServiceMainImg from '../../assets/ServiceMainImg.svg'

function ServiceMain() {
    return (
        <Box sx={{py:8}}>
            <Grid2 container>
                <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                    <div className='method-heading'>
                        <span style={{ paddingRight: '10px' }}>We Boost The Growth For  </span>
                        <span style={{ position: 'relative' }}>
                            Startup
                            <span className='text-overflow-border-yellow-line'></span>
                        </span>
                        <span style={{ paddingRight: '10px' }}>to Fortune 100 Companies</span>
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
                <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }} style={{display:'flex'}}>
                <img src={ServiceMainImg} alt="Logo1" style={{width:'100%',height:'100%'}} />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default ServiceMain