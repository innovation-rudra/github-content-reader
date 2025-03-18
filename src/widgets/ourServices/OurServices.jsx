import { Box, Grid2 } from '@mui/material'
import React from 'react'
import TaskCards from '../../components/TaskCards';

const pages = [
    { name: 'Task' },
    { name: 'Task2' },
    { name: 'Task3' },
    { name: 'Task4' },
    { name: 'Task5' },
    { name: 'Task6' }
  ];

function OurServices() {
    return (
        <Box className='div-center d-flex-col'>
            <Grid2 className='div-center'>
                <div className='method-heading'>
                    <span style={{ paddingRight: '10px' }} >See Our</span>
                    <span style={{ position: 'relative' }}>
                        Services
                        <span className='text-overflow-border-yellow-line'></span>
                    </span>
                </div>
            </Grid2>
            <div className='team-heading-side text-center'>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
            </div>
            <Grid2 container className='div-center method-task-card-container' rowSpacing={2}>
                {pages.map((e, i) => {
                    return (
                        <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center' spa>
                            <TaskCards key={i} data={{
                                name: 'Task Management',
                                description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was',
                                imageId: e.name
                            }} />
                        </Grid2>
                    )
                })}
            </Grid2>
        </Box>
    )
}

export default OurServices