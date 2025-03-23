import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonCard from '../../components/CommonCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function OurTeam(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate how many slides we need based on screen size
  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1200) return 3; // xl
    if (window.innerWidth >= 900) return 3; // lg
    if (window.innerWidth >= 600) return 2; // md
    return 1; // sm and xs
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Total number of slides
  const totalSlides = Math.ceil(props.data.pages1.length / itemsPerSlide);

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    
    if (autoplay && !isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, totalSlides, isHovered]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setAutoplay(false);
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setAutoplay(false);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
  };

  return (
    <Box className="method-container" sx={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}>
      <Box className="div-center p-20 d-flex-col">
      <Grid className='div-center'>
        <div className='method-heading' style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          <span style={{ paddingRight: '10px' }}>Meet Our</span>
          <span style={{ position: 'relative' }}>
            Team
            <span className='text-overflow-border-yellow-line' style={{
              position: 'absolute',
              bottom: '-5px',
              left: 0,
              width: '100%',
              height: '4px',
              backgroundColor: '#FFD54F',
              borderRadius: '2px'
            }}></span>
          </span>
        </div>
      </Grid>
      <div className='team-heading-side text-center' style={{
        maxWidth: '800px',
        margin: '0 auto 40px',
        color: '#666',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
      </div>

      <Box sx={{ 
        position: 'relative', 
        width: '100%',
        overflow: 'hidden',
        py: 5,
        '&:hover .carousel-nav': {
          opacity: 1,
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel navigation buttons */}
        <Box className="carousel-nav" sx={{ 
          position: 'absolute', 
          left: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          zIndex: 2,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
          }
        }} onClick={prevSlide}>
          <KeyboardArrowLeftIcon />
        </Box>
        
        <Box className="carousel-nav" sx={{ 
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          zIndex: 2,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
          }
        }} onClick={nextSlide}>
          <KeyboardArrowRightIcon />
        </Box>

        {/* Carousel content */}
        <Box sx={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentSlide * 100}%)`,
        }}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <Box 
              key={slideIndex} 
              sx={{ 
                minWidth: '100%', 
                flexShrink: 0,
              }}
            >
              <Grid container spacing={5}>
                {props.data.pages1
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((member, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={4} xl={4}>
                      <Box sx={{
                        transform: 'scale(1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.03)',
                        }
                      }}>
                        <CommonCard 
                          data={{ ...member }} 
                          sx={{
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          ))}
        </Box>

        {/* Carousel indicators/dots */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4,
          gap: 1
        }}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Box 
              key={index} 
              onClick={() => goToSlide(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#FFD54F' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: currentSlide === index ? '#FFD54F' : '#bdbdbd',
                  transform: 'scale(1.2)',
                },
                boxShadow: currentSlide === index ? '0 0 6px rgba(255, 213, 79, 0.6)' : 'none'
              }}
            />
          ))}
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default OurTeam