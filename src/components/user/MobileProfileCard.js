import React from 'react'
import MenuCard from '../globals/MenuCard';
import { BsChevronCompactLeft } from "react-icons/bs";
import ProfilePic from './ProfilePic';
import Skills from './Skills';

const MobileProfileCard = (props) => {

  return (
    <MenuCard className="-left-10 right-1/4 bottom-0 top-0 overflow-scroll pt-6">
        <div className='flex justify-end'>
            <button onClick={() => props.setOpenProfileCard(false)}>
                <BsChevronCompactLeft className='text-3xl'/>
            </button>
        </div>
        <div className='ml-10'>
            <div className='flex flex-col justify-center items-center'>
                <ProfilePic className="w-32 h-32"/>
                <Skills/>
            </div>
        </div>
    </MenuCard>
  )
}

export default MobileProfileCard