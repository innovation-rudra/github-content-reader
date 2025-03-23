import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { MdComputer, MdSecurity, MdSupport } from 'react-icons/md';
import { FaCloud, FaCode } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
import TaskCards from '../../components/TaskCards'
import Method1 from '../../assets/Method1.svg';
import Method2 from '../../assets/Method2.svg';
import Play from '../../assets/Play.svg'

const pages = [
  { name: 'IT Management', description: 'Ensure seamless IT operations by optimizing resources, enhancing security, and implementing the best strategies for high availability and performance.', icon: <MdComputer size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> },
  { name: 'Cloud Solutions', description: 'Enable scalable, secure, and cost-effective cloud infrastructure tailored to your business, ensuring optimal data storage, processing, and accessibility.', icon: <FaCloud size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> },
  { name: 'AI & Automation', description: 'Leverage AI-driven automation to streamline processes, enhance decision-making, and increase efficiency, reducing manual workloads and improving productivity.', icon: <AiOutlineRobot size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> },
  { name: 'Cybersecurity', description: 'Protect your business from evolving cyber threats with proactive security strategies, real-time monitoring, and advanced threat mitigation solutions.', icon: <MdSecurity size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> },
  { name: 'Software Development', description: 'Build high-quality, scalable software solutions tailored to your business needs, integrating the latest technologies for a competitive edge.', icon: <FaCode size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> },
  { name: 'IT Consultancy', description: 'Gain strategic IT insights from expert consultants to optimize technology investments, improve efficiency, and drive digital transformation.', icon: <MdSupport size={30} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> }
];

function BestMethod() {
  return (
    <Box className="method-container" sx={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}>
      <Grid2 container >
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }} >Our</span>
            <span style={{ position: 'relative' }}>
              IT Solutions
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>
          <div className='method-heading'>
            <span>For Your Business</span>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }} className='side-heading-container'>
          <div className='method-heading-description'>
            We provide innovative IT services and solutions tailored to help your business thrive in a digital world.
          </div>
        </Grid2>
      </Grid2>

      <Grid2 container className='div-center method-task-card-container' rowSpacing={2}>
        {pages.map((e, i) => {
          return (
            <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center' key={i}>
              <TaskCards data={{
                name: e.name,
                description: e.description,
                imageId: e.icon
              }} />
            </Grid2>
          )
        })}
      </Grid2>

      <Grid2 container sx={{ py: 8 }}>
        <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }} className='div-center'>
          <div style={{ paddingRight: '50px' }}>
            <img src={Method1} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }}>
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }}>Best</span>
            <span style={{ position: 'relative' }}>
              Solutions
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>
          <div className='method-heading'>
            <span>For Your Business Needs</span>
          </div>
          <div className='method-heading-side'>
            Our digital transformation solutions empower your organization to leverage technology for growth and efficiency.
          </div>

          <div className='method-btn-container'>
            <div className='btn-free'>
              Get started today
            </div>
            <div className='btn-play'>
              <img src={Play} alt="Logo1" />
              <span style={{ paddingLeft: '10px' }}>Watch our introduction</span>
            </div>
          </div>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5, xl: 5 }} >
          <div className='method-heading'>
            <span style={{ paddingRight: '10px' }}>Experience the Best</span>
            <span style={{ position: 'relative' }}>
              IT Services
              <span className='text-overflow-border-yellow-line'></span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center',paddingTop:'50px' }}>
            <div style={{ width: '74px', height: '74px', paddingRight: '20px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '39px', background: '#715DE3' }}></div>
            </div>
            <div className=''>
              <div className='best-text'>Dedicated IT Teams</div>
              <div className='best-description'>
                Our dedicated teams ensure that your technology infrastructure is robust and responsive.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center',paddingTop:'30px' }}>
            <div style={{ width: '74px', height: '74px', paddingRight: '20px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '39px', background: '#715DE3' }}></div>
            </div>
            <div className=''>
              <div className='best-text'>24/7 Support</div>
              <div className='best-description'>
                Our support team is available around the clock to assist you with any IT challenges.
              </div>
            </div>
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 7, lg: 7, xl: 7 }} className='div-center'>
          <div style={{ paddingBottom: '15px' }}>
            <img src={Method2} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default BestMethod