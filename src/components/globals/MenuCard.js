import React from 'react'

const MenuCard = (props) => {
  return (
    <div className={`border-2 border-black bg-white py-4 px-6 fixed ${props.className}`} style={{ borderRadius: "30px" }}>
        {props.children}
    </div>
  )
}

export default MenuCard