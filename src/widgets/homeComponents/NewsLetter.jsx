import { Box, FormControl, Grid, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import Envelop from '../../assets/envelop.svg'
import { Email } from '@mui/icons-material'

function NewsLetter() {
    const [hovered, setHovered] = useState(false);

    return (
        <Box className="method-container" sx={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}>
            <Box className="div-center" sx={{ py: 5 }}>
                <Box 
                    className='news-letter-container'
                    sx={{
                        backgroundColor: '#8B7CE0', // Purple color from screenshot
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: '0 10px 25px rgba(139, 124, 224, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 15px 30px rgba(139, 124, 224, 0.4)',
                            transform: 'translateY(-5px)'
                        }
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8} lg={8}>
                            <Box className='news-heading' sx={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 'bold',
                                color: 'white',
                                mb: 2
                            }}>
                                <span>Subscribe To Our </span>
                                <span style={{ position: 'relative', display: 'inline-block' }}>
                                    Newslater
                                    <Box 
                                        component="span" 
                                        sx={{
                                            position: 'absolute',
                                            bottom: '-5px',
                                            left: 0,
                                            width: '100%',
                                            height: '4px',
                                            backgroundColor: '#FFD54F', // Yellow underline
                                            borderRadius: '2px'
                                        }}
                                    />
                                </span>
                            </Box>
                            
                            <Box className='news-description' sx={{ 
                                color: 'rgba(255, 255, 255, 0.9)',
                                mb: 4,
                                fontSize: '1rem',
                                maxWidth: '90%',
                                lineHeight: 1.6
                            }}>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                            </Box>
                            
                            <Box className='news-form' sx={{ 
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: { xs: 'stretch', md: 'center' },
                                gap: 2
                            }}>
                                <Box className='news-text-field' sx={{ flex: 1 }}>
                                    <FormControl fullWidth variant="outlined">
                                        <OutlinedInput
                                            id="input-with-icon-adornment"
                                            placeholder='Enter your email address'
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                borderRadius: '12px',
                                                color: 'white',
                                                border: 'none',
                                                '& fieldset': { 
                                                    border: 'none' 
                                                },
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.1)'
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.15)'
                                                },
                                                transition: 'all 0.3s ease',
                                                height: '56px'
                                            }}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Email sx={{ color: 'white' }} />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>
                                
                                <Box 
                                    className='news-button'
                                    sx={{
                                        backgroundColor: 'white',
                                        color: '#6857CF', // Darker purple
                                        padding: '15px 30px',
                                        borderRadius: '12px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '160px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: hovered ? '0 6px 15px rgba(0, 0, 0, 0.1)' : '0 4px 10px rgba(0, 0, 0, 0.05)',
                                        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                                        '&:hover': {
                                            backgroundColor: '#f8f8f8'
                                        }
                                    }}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    Subscribe Now
                                </Box>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={4} lg={4} sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}>
                            <Box
                                component="img"
                                src={Envelop}
                                alt="Envelope"
                                sx={{
                                    width: { xs: '70%', md: '100%' },
                                    maxWidth: '200px',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))',
                                    transition: 'all 0.5s ease',
                                    animation: 'float 3s ease-in-out infinite',
                                    '@keyframes float': {
                                        '0%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-15px)' },
                                        '100%': { transform: 'translateY(0px)' }
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default NewsLetter