import { Box, Grid2 } from '@mui/material'
import React from 'react'
import PricingCard from '../../components/PricingCard';
import StandardPricingCard from '../../components/StandardPricingCard';
import PremiumPricingCard from '../../components/PremiumPricingCard';


function OurPricing() {
    return (
        <Box className='div-center d-flex-col' sx={{ py: 8 }}>
            <Grid2 className='div-center'>
                <div className='method-heading'>
                    <span style={{ paddingRight: '10px' }} >Our</span>
                    <span style={{ position: 'relative' }}>
                        Pricing
                        <span className='text-overflow-border-yellow-line'></span>
                    </span>
                    <span style={{ paddingRight: '10px' }} >Plan</span>
                </div>
            </Grid2>
            <div className='team-heading-side text-center'>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
            </div>
            <Grid2 container className='div-center method-task-card-container' rowSpacing={2} columnSpacing={5}>

                <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center'>
                    <PricingCard />
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center'>
                    <StandardPricingCard />
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 4, lg: 4, xl: 4 }} className='div-center'>
                    <PremiumPricingCard />
                </Grid2>

            </Grid2>
        </Box>
    )
}

export default OurPricing