import { Email } from '@mui/icons-material'
import { Box, Checkbox, FormControl, Grid2, InputAdornment, OutlinedInput, TextareaAutosize } from '@mui/material'
import React from 'react'

function EnquiryForm() {
  return (
    <Box sx={{ py: 5 }}>
      <Grid2>
        <div className='service-detail-heading' style={{ paddingBottom: '20px' }}>Post a Comment</div>
      </Grid2>
      <Grid2 container columnSpacing={2} rowSpacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <OutlinedInput
              className='comment-form-field'
              sx={{ border: '1px solid #715DE3', color: '#5B5B5B' }}
              id="input-with-icon-adornment"
              placeholder='Enter your name'
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <OutlinedInput
              className='comment-form-field'
              sx={{ border: '1px solid #715DE3', color: '#5B5B5B' }}
              id="input-with-icon-adornment"
              placeholder='Enter mobile numbers'
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <OutlinedInput
              className='comment-form-field'
              sx={{ border: '1px solid #715DE3', color: '#5B5B5B' }}
              id="input-with-icon-adornment"
              placeholder='Enter your email address'
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <FormControl variant="standard" sx={{ width: '100%',display:'flex' }}>
            <TextareaAutosize
              className='comment-form-field'
              maxRows={8}
              minRows={6}
              style={{ border: '1px solid #715DE3', color: '#5B5B5B', borderRadius: '5px' }}
              id="input-with-icon-adornment"
              placeholder='write your comment ...'
            />
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 sx={{ py: 2 ,display:'flex',alignItems:'center'}}>
        <Checkbox />
        <div className='checkbox-text'>Save my name , email, and website in this browser for the next time i comment.</div>
      </Grid2>
      <Grid2>
        <div className='btn-free-comment'>
          Comment
        </div>
      </Grid2>
    </Box>
  )
}

export default EnquiryForm