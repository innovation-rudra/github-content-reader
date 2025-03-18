import React, { useEffect } from 'react'

function CommonCard(props) {

  useEffect(() => {
    console.log("props", props)
  }, [])

  return (
    <div>
      <div className='emp-image-card'>
        <img src={props.data.photo} alt="Logo1" style={{ width: '100%', height: '100%' }} />
        <div className='emp-image-card-bottom'>
          <span className='emp-name'>
            {props.data.name}
          </span>
          <span className='emp-name' style={{ paddingInline: '5px' }}>|</span>
          <span className='emp-degn-name'>
            {props.data.designation}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommonCard