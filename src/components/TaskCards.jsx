import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Glob import to load images dynamically
const images = import.meta.glob('../assets/*.png', { eager: true });

function TaskCards(props) {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (props.data?.imageId && images[`../assets/${props.data.imageId}.png`]) {
            setImageSrc(images[`../assets/${props.data.imageId}.png`].default);
        }
    }, [props.data]);

    function handleClick() {
        console.log("handleclick call");
        navigate("/service/details");
    }

    return (
        <Box className='taskcard-container' onClick={handleClick}>
            <div>
                {imageSrc && (
                    <img 
                        src={imageSrc} 
                        style={{ width: '52px', height: '52px' }} 
                        alt="Logo1" 
                    />
                )}
            </div>
            <div className='task-card-heading'>
                {props.data?.name || "No Name Provided"}
            </div>
            <div className='task-card-description'>
                {props.data?.description || "No Description Available"}
            </div>
        </Box>
    );
}

export default TaskCards;