import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import YellowSnake from '../assets/YellowSnake.svg'
import PurpleSnake from '../assets/PurpleSnake.svg'
import { Height } from '@mui/icons-material'

function CommonHeaderContent(props) {

    useEffect(() => {
        console.log("props", props);
    }, [])

    return (
        <Box className='div-center' style={{ position: 'relative',width:'100%',height:'40vh' }}>
            <div className='display-sm-none' style={{ position: 'absolute',left:'0px' }}>
                <img src={PurpleSnake} alt="Logo1" />
            </div>
            <div className='div-center d-flex-col'>
                <div className='common-header-link-text'>{props.data.linkName}</div>
                <div className='common-header-text'>{props.data.name}</div>
                <div className='common-header-description'>{props.data.description}</div>
            </div>
            <div className='display-sm-none' style={{ position: 'absolute', right: '0px' }}>
                <img src={YellowSnake} alt="Logo1" />
            </div>
        </Box>
    )
}

export default CommonHeaderContent