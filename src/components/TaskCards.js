import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function TaskCards(props) {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("props", props)
    }, [])

    function handleClick() {
        console.log("handleclick call")
        navigate("/service/details")
    }

    return (
        <Box className='taskcard-container' onClick={handleClick()}>
            <div>
                <img src={require(`../assets/${props.data.imageId}.png`)} style={{ width: '52px', height: '52px' }} alt="Logo1" />
            </div>
            <div className='task-card-heading'>
                {props.data.name}
            </div>
            <div className='task-card-description'>
                {props.data.description}
            </div>
        </Box>
    )
}

export default TaskCards