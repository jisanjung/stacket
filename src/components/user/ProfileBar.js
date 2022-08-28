import React, { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import MobileProfileCard from './MobileProfileCard';

const ProfileBar = (props) => {

  const [openProfileCard, setOpenProfileCard] = useState(false);

  return (
    <aside className='border-b-2 border-black py-4 px-5'>
        <div className='flex justify-between'>
          <button className='border-2 border-black w-10 h-10 rounded-full bg-gray-300' onClick={() => setOpenProfileCard(true)}></button>
          <button><BsFilterRight className='text-3xl'/></button>
        </div>
        {openProfileCard && <MobileProfileCard setOpenProfileCard={setOpenProfileCard}/>}
    </aside>
  )
}

export default ProfileBar