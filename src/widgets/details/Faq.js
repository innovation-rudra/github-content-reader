import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Grid2 } from '@mui/material';
import AboutSnake from '../../assets/AboutSnake.svg'
import AboutSnake1 from '../../assets/AboutSnake1.svg'

export default function Faq() {
    return (
        <Box  sx={{ py: 5,display:'flex',justifyContent:'center' }}>
            <img className='display-sm-none' src={AboutSnake} alt="Logo1" style={{ width: 'auto', height: '184px', marginLeft: '-55px', display:'flex',alignSelf:'flex-end' }} />
            <Grid2 container columnSpacing={5} rowSpacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className="faq-headings">Frequently Answer & Questions</Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion sx={{ background: '#F8F7FF', boxShadow: 'none' }}>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span" sx={{ color: '#5B5B5B', fontSize: '16.33px', fontWeight: '600' }}>How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#5D6C7C', fontSize: '18px', fontWeight: '400px' }}>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion sx={{ background: '#F8F7FF', boxShadow: 'none' }}>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span" sx={{ color: '#5B5B5B', fontSize: '16.33px', fontWeight: '600' }}>How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#5D6C7C', fontSize: '18px', fontWeight: '400px' }}>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Accordion sx={{ background: '#F8F7FF', boxShadow: 'none' }}>
                        <AccordionSummary
                            // expandIcon={<ArrowDropDownIcon />}

                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span" sx={{ color: '#5B5B5B', fontSize: '16.33px', fontWeight: '600' }}>How to know status of a campaign?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#5D6C7C', fontSize: '18px', fontWeight: '400px' }}>
                                Powerful project management tools for your companies of all sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
            </Grid2>
            <img className='display-sm-none' src={AboutSnake1} alt="Logo1" style={{ width: 'auto', height: '184px', marginRight: '-55px' }} />
        </Box>
    );
}
