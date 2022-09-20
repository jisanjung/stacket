import React from 'react'
import Button from '../globals/Button'

const DesktopJobInfoCard = (props) => {
  return (
    <div className='relative'>
        <div className='z-10 relative bg-white border-2 border-black p-6' style={{  borderRadius: "10px" }}>
            {!props.job ?
            <h3 className='font-bold text-xl text-center'>No job selected</h3> :
            <div>
                <h3 className='font-bold text-xl mb-1'>{props.job.title}</h3>
                <div className='flex'>
                    <h4>{props.job.company.display_name}</h4>
                    <span className='mx-2'>-</span>
                    <h4>{props.job.location.display_name}</h4>
                </div>
                <a href={props.job.redirect_url} target="_blank" rel="noopener noreferrer">
                    <Button text="Apply" className="my-8"/>
                </a>
                <h4>Description: </h4>
                <p className='mt-4 mb-8'>
                    {props.job.description}
                </p>
            </div>}
        </div>
        <div className='absolute border-2 border-black bg-custom-green top-2 -bottom-2 left-2 -right-2' style={{ borderRadius: "10px" }}></div>
    </div>
  )
}

export default DesktopJobInfoCard