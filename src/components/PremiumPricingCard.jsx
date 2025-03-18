import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import Crown from '../assets/Crown.svg'
import Check from '../assets/Check.svg'

const lists =
    [
        '30h Fast generations',
        'Unlimited Relaxed generations',
        'General commercial terms',
        'Access to member gallery',
        'Optional credit top ups',
        '3 concurrent fast jobs'
    ]

function PremiumPricingCard() {

    return (
        <Box className="pricing-card-container">
            <Grid2 container className="price-cards" rowSpacing={3}>
                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }} className='div-center d-flex-col'>
                    <img src={Crown} alt="Logo" />
                    <div className='plan-text'>Premium</div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }} className='price-div-service'>
                    <div className='plan-text-price'>$129</div>
                    <div className='plan-text-duration'>/month</div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }} className='div-center'>
                    <div className='plan-text-desc'>
                        per editor/month
                        <br />
                        billed monthly
                    </div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                    {
                        lists.map((e, i) => {
                            return (
                                <div key={i} className='plan-text-detail'>
                                    <img src={Check} alt="Logo1" />
                                    <div style={{ paddingInline: '8px' }}>{e}</div>
                                </div>
                            )
                        })
                    }
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                    <div className='btn-plan'>
                        Get started
                    </div>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default PremiumPricingCard