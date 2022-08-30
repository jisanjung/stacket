import React from 'react'

const MenuCard = (props) => {
  return (
    <div className={`border-2 border-black bg-white p-4 fixed z-20 ${props.className}`} style={{ borderRadius: "30px" }}>
        {props.children}
    </div>
  )
}

export default MenuCard