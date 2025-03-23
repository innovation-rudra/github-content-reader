import { Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import Play from '../../assets/Play.svg';
import M from '../../assets/TotalSub.svg';
import N from '../../assets/InstagramSub.svg';
import O from '../../assets/o.svg';
import P from '../../assets/p.svg';
import R from '../../assets/r.svg';
import YellowSnake from '../../assets/YellowSnake.svg';
import PurpleSnake from '../../assets/PurpleSnake.svg';

function MainContent() {
  return (
    <Box className="main-content-container">
      <div className='main-content-text-container-all div-center position-relative'>
        <motion.div
          className='display-sm-none'
          style={{ position: 'absolute', bottom: '0px', left: '0px' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src={PurpleSnake} alt="Logo1" />
        </motion.div>

        <div className='main-content-text-container'>
  <span className='main-content-text hero-text'>All-in-One</span>
  <span className='main-content-span hero-text' style={{ fontWeight: 'bold' }}>IT Services</span>
  <span className='main-content-text hero-text'>Empowering Businesses</span>
</div>

        <motion.div
          className='display-sm-none'
          style={{ position: 'absolute', bottom: '0px', right: '0px' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src={YellowSnake} alt="Logo1" />
        </motion.div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <motion.div
          className='display-sm-none'
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src={M} alt="M" style={{ width: 'inherit' }} />
        </motion.div>

        <div className='div-center d-flex-col'>
          <motion.div
            className='main-content-description'
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 1.5 }}
          >
            Leverage our expertise in IT consulting, AI solutions, cloud infrastructure, and enterprise services to drive your business forward.
          </motion.div>

          <div className='main-btn-container'>
            <motion.div
              className='btn-free'
              whileHover={{ scale: 1.1 }}
            >
              Request a Consultation
            </motion.div>
            <motion.div
              className='btn-play'
              whileHover={{ scale: 1.1 }}
            >
              <img src={Play} alt="Logo1" />
              <span style={{ paddingLeft: '10px' }}>Learn More</span>
            </motion.div>
          </div>

          <motion.div
            className='main-con-desc'
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 1.5 }}
          >
            Partner with us for scalable and innovative IT solutions.
          </motion.div>
        </div>

        <motion.div
          className='display-sm-none'
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src={N} alt="N" style={{ width: 'inherit' }} />
        </motion.div>
      </div>

      <div className='display-sm-none' style={{ marginTop: '-50px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
          <img src={O} alt="O" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
          <img src={R} alt="R" style={{ width: '100%', height: '100%', paddingTop: '50px' }} />
        </motion.div>
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
          <img src={P} alt="P" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </Box>
  );
}

export default MainContent;