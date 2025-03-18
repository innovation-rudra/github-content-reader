import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Grid2 } from '@mui/material';
import popularIcon from '../../assets/popularIcon.svg'

const posts = [1,2,3]

function PopularPosts() {
    return (
        <Box sx={{ py: 4 }}>
            <Grid2 className='side-menus-div'>
                <Grid2 className="side-headings">Popular Posts</Grid2>
                <List sx={{ width: '100%' }}>
                    {posts.map((value, i) => {
                        return (
                            <ListItem alignItems="flex-start" sx={{
                                borderBottom: i !== posts.length - 1 ? '1px solid #DFDFFB' : 'none',
                                borderTop: i === 0 ? '1px solid #DFDFFB' : 'none',
                                display:'flex',alignItems:'center',justifyContent:'space-between'
                            }}>
                                <ListItemAvatar sx={{margin:'0px'}} className='div-center'>
                                <img src={popularIcon} alt="Logo" style={{ width: '54px', height: '54px' }} />
                                </ListItemAvatar>
                                <ListItemText sx={{paddingLeft:'10px'}}
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                sx={{ color: '#7F7A9A', display: 'inline',fontSize:'12px',fontWeight:'500' }}
                                            >
                                                15 Feb, 2025
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                sx={{ color: '#1C163C', display: 'inline',fontSize:'12px',fontWeight:'500' }}
                                            >
                                                How much dose it cost to
                                                start and run a website?
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Grid2>
        </Box>

    );
}

export default PopularPosts