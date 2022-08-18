import React from 'react'

const Input = (props) => {
  return (
    <>
        <input type={props.type} className={`border-2 border-black py-3 pl-6 ${props.className}`} style={{ borderRadius: "10px" }} placeholder={props.placeholder}/>
    </>
  )
}

export default Input