import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} className={`border-2 border-black bg-custom-green py-3 px-12 text-center ${props.className}`} style={{ borderRadius: "10px" }} onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button