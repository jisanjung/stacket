import React from 'react'

const ProfilePic = (props) => {
  return (
    <div>
        <img alt={props.alt} src={props.src} className={`bg-gray-300 rounded-full ${props.className}`}/>
    </div>
  )
}

export default ProfilePic