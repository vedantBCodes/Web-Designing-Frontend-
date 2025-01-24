import React from 'react'

const CounterCard = (props) => {
  return (
    <div className='counterCard'>
        {props.children} <br />
        <button onClick={props.fun1}>
      {props.text}
      </button>
    </div>
  )
}

export default CounterCard
