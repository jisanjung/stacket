import React from 'react'

const Heading = (props) => {
  return (
    <h1 className={`font-bold ${props.className}`}>{props.text}</h1>
  )
}

export default Heading