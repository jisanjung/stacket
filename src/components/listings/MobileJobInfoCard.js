import React from 'react'
import MenuCard from '../globals/MenuCard';
import { BsChevronCompactDown } from "react-icons/bs";
import Button from "../globals/Button";

const MobileJobInfoCard = (props) => {
  return (
    <MenuCard className="left-0 right-0 -bottom-10 top-1/2 overflow-scroll">
      <div className='flex justify-center'>
        <button onClick={() => props.setSelectedJob(null)}>
          <BsChevronCompactDown className='text-4xl mb-1'/>
        </button>
      </div>
      <h3 className='font-bold text-xl'>{props.job.title}</h3>
      <h4>
        {props.job.company.display_name} 
        <span className='px-2'>-</span>
        {props.job.location.display_name}</h4>
        <a href={props.job.redirect_url} target="_blank" rel="noopener noreferrer"> 
          <Button text="Apply" className="my-4 w-full"/>
        </a>
        <h4 className='pb-2 text-xl'>Description: </h4>
        <p className='pb-10'>
          {props.job.description}
        </p>
    </MenuCard>
  )
}

export default MobileJobInfoCard