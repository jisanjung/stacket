import React from 'react'

const SkillMeter = (props) => {
  return (
    <div className='border border-black w-full h-4 bg-white'>
        <div className="h-full bg-black" style={{ width: `${props.percent}%` }}></div>
    </div>
  )
}

export default SkillMeter