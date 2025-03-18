import { Box, Grid2 } from '@mui/material'
import React from 'react'

const tags = ["Tech","Ui/Ux","App","Software","Mobile Design","Ios","Android","Wordpress", "Corporate", "Media"]

function PopularTags() {
    return (
        <Box>
            <Grid2 className='side-menus-div'>
                <Grid2 className="side-headings">Popular Tags</Grid2>
                <Grid2 className="chips-container">
                    {
                        tags.map((e,i) => {
                            return(
                                <div className='tags-chips'>{e}</div>
                            )
                        })
                    }
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default PopularTags