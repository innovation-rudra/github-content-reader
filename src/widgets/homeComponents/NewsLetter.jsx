import { Box, FormControl, Grid2, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'
import Envelop from '../../assets/envelop.svg'
import { Email } from '@mui/icons-material'


function NewsLetter() {
    return (
        <Box className="div-center" sx={{py:5}}>
            <Grid2 container className='news-letter-container'>
                <Grid2 item size={{ xs: 12, md: 9, lg: 9, xl: 9 }}>
                    <div className='news-heading'>
                        <span style={{paddingRight:'10px'}}>Subscribe To Our</span>
                        <span style={{ position: 'relative' }}>
                            Newslater
                            <span className='text-overflow-border-yellow-line'></span>
                        </span>
                    </div>
                    <div className='news-description'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                    </div>
                    <div className='news-form'>
                        <div className='news-text-field'>
                            <FormControl variant="standard">
                                <OutlinedInput
                                    id="input-with-icon-adornment"
                                    placeholder='Enter your email address'
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Email style={{color:'#ffffff'}} />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='news-button'>Subscribe Now</div>
                    </div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
                    <img src={Envelop} alt="Envelop" style={{width:'100%',height:'100%'}} />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default NewsLetter