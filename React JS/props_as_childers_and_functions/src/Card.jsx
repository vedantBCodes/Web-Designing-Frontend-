import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      {props.children}    
      {/* One can access whole content inside of parent component in the child using props.children */}
    </div>
  )
}

export default Card
