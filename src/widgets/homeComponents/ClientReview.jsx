import React, { useState, useEffect } from 'react';
import { Box, Grid, Rating } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FullEmp from '../../assets/FullEmp.svg';

// Sample review data
const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: "Sasency is Rank Number # 1 SAAS Agency! Highly Recomended for Saas",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    name: "Kapil Nagar",
    designation: "Founder and CEO",
    image: FullEmp
  },
  {
    id: 2,
    rating: 5,
    text: "Outstanding work on our website redesign, truly transformative results!",
    description: "The team at Sasency delivered beyond our expectations. Their approach to UI/UX design completely revolutionized our customer experience.",
    name: "Sarah Johnson",
    designation: "Marketing Director",
    image: FullEmp
  },
  {
    id: 3,
    rating: 4.5,
    text: "Exceptional service and remarkable attention to detail",
    description: "Working with this team has been a breath of fresh air. Their strategic approach to design helped us increase conversions by 45%.",
    name: "Michael Chen",
    designation: "Product Manager",
    image: FullEmp
  }
];

// Sample award reviews
const awardReviews = [
  {
    id: 1,
    title: "Great Design!",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    rating: 5,
    name: "Kapil Nagar",
    position: "Product Designer"
  },
  {
    id: 2,
    title: "Exceptional Service!",
    description: "Their team went above and beyond to ensure our project was completed on time and exceeded all our expectations.",
    rating: 5,
    name: "Lisa Wong",
    position: "UI Designer"
  },
  {
    id: 3,
    title: "Innovative Solutions!",
    description: "The creative approach they brought to our branding challenges completely transformed how our customers perceive us.",
    rating: 5,
    name: "David Smith",
    position: "Creative Director"
  }
];

function ClientReview() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
    setCurrentAwardIndex((prevIndex) => 
      prevIndex === 0 ? awardReviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentAwardIndex((prevIndex) => 
      prevIndex === awardReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <Box 
      className="method-container" 
      sx={{ 
        padding: "3rem 0", 
        maxWidth: "1200px", 
        margin: "0 auto",
        background: "linear-gradient(to bottom, #f9f9ff, #ffffff)"
      }}
    >
      <Box 
        className="review-main-container"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          background: '#ffffff'
        }}
      >
        <Grid container alignItems="center" sx={{ py: 3 }}>
          <Grid item xs={12} md={8}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='review-heading'
              style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '#222',
                marginBottom: '1rem'
              }}
            >
              <span style={{ paddingRight: '10px' }}>Take A Look At Some Of Our Amazing Past Clients </span>
              <span style={{ 
                position: 'relative',
                display: 'inline-block' 
              }}>
                Review
                <motion.span 
                  style={{ 
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#FFD700',
                    borderRadius: '2px'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4} 
            sx={{ 
              display: 'flex', 
              justifyContent: {xs: 'center', md: 'flex-end'},
              mt: {xs: 2, md: 0}
            }}
          >
            <motion.div 
              className="review-buttons" 
              style={{
                display: 'flex',
                gap: '12px'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#6C63FF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(108, 99, 255, 0.25)'
                }}
                onClick={goToPrevious}
              >
                <ArrowBackIosNewIcon sx={{ color: '#ffffff', fontSize: '18px' }} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#6C63FF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(108, 99, 255, 0.25)'
                }}
                onClick={goToNext}
              >
                <ArrowForwardIosIcon sx={{ color: '#ffffff', fontSize: '18px' }} />
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentReviewIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                style={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  backgroundColor: '#f8f8ff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                  height: '100%'
                }}
              >
                <div style={{ 
                  flex: '0 0 40%',
                  backgroundColor: '#6C63FF',
                  overflow: 'hidden'
                }}>
                  <motion.img 
                    src={reviewsData[currentReviewIndex].image} 
                    alt="Client" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div style={{ 
                  flex: '1',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <Rating
                      name="review-rating"
                      value={reviewsData[currentReviewIndex].rating}
                      readOnly
                      precision={0.5}
                      style={{ color: '#6C63FF', marginBottom: '1rem' }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        color: '#333',
                        marginBottom: '1rem'
                      }}
                    >
                      {reviewsData[currentReviewIndex].text}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#666',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {reviewsData[currentReviewIndex].description}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(0,0,0,0.06)',
                      paddingTop: '1rem'
                    }}
                  >
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {reviewsData[currentReviewIndex].name}
                    </span>
                    <span style={{ padding: '0 8px', color: '#ccc' }}>|</span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      {reviewsData[currentReviewIndex].designation}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentAwardIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  backgroundColor: '#6C63FF',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(108, 99, 255, 0.3)'
                }}
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '1rem'
                    }}
                  >
                    {awardReviews[currentAwardIndex].title}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      opacity: 0.9
                    }}
                  >
                    {awardReviews[currentAwardIndex].description}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ paddingBottom: '1.5rem' }}
                  >
                    <Rating
                      name="award-rating"
                      value={awardReviews[currentAwardIndex].rating}
                      readOnly
                      style={{ color: '#FFD700' }}
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {awardReviews[currentAwardIndex].name.charAt(0)}
                  </div>
                  <div style={{ paddingLeft: '15px' }}>
                    <div style={{ 
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      {awardReviews[currentAwardIndex].name}
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem',
                      opacity: 0.8
                    }}>
                      {awardReviews[currentAwardIndex].position}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>

        {/* Progress indicators */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4 
        }}>
          {reviewsData.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: currentReviewIndex === index ? '24px' : '8px',
                backgroundColor: currentReviewIndex === index ? '#6C63FF' : '#DDD'
              }}
              style={{
                height: '8px',
                borderRadius: '4px',
                margin: '0 4px',
                cursor: 'pointer'
              }}
              onClick={() => {
                setDirection(index > currentReviewIndex ? 1 : -1);
                setCurrentReviewIndex(index);
                setCurrentAwardIndex(index);
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ClientReview;