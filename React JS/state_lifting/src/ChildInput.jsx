import React from 'react'

const ChildInput = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value) }/>
      <p> Name updated in the Child Component : {props.name}</p>
    </div>
  )
}

export default ChildInput
