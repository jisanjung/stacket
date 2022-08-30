import React from 'react'
import MenuCard from '../globals/MenuCard';
import { BsChevronCompactLeft } from "react-icons/bs";
import ProfilePic from './ProfilePic';
import Skills from './Skills';
import { useParams } from "react-router-dom";

const MobileProfileCard = (props) => {

    const { user } = useParams();

  return (
    <MenuCard className="-left-10 right-1/4 bottom-0 top-0 overflow-scroll pt-6">
        <div className='flex justify-end'>
            <button onClick={() => props.setOpenProfileCard(false)}>
                <BsChevronCompactLeft className='text-3xl'/>
            </button>
        </div>
        <div className='ml-10'>
            <div className='flex flex-col justify-center items-center'>
                <ProfilePic className="w-24 h-24 my-4"/>
                <h1>{user}</h1>
                <Skills/>
            </div>
        </div>
    </MenuCard>
  )
}

export default MobileProfileCard