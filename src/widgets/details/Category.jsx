import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Grid2 } from '@mui/material';

const categories = [1,2,3,4,5,6]

function Category() {

    return (
        <Box>
            <Grid2 className='side-menus-div'>
                <Grid2 className="side-headings">Category</Grid2>
                <List sx={{ width: '100%' }}>
                    {categories.map((value,i) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <ListItem
                            sx={{borderBottom: i !== categories.length - 1 ? '1px solid #DFDFFB' : 'none',
                                borderTop: i ===0 ? '1px solid #DFDFFB' : 'none'
                            }}
                                key={value}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <KeyboardDoubleArrowRightIcon sx={{color:'#715DE3'}} />
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemText id={labelId} sx={{color:'#7F7A9A',fontSize:'15px', fontWeight:'500'}} primary={'Task Management'} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid2>
        </Box>
    );
}


export default Category