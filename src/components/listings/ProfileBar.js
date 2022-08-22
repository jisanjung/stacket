import React from 'react';
import { BsFilterRight } from "react-icons/bs";

const ProfileBar = (props) => {

  return (
    <aside className='border-b-2 border-black py-4 px-5'>
        <div className='flex justify-between'>
          <button className='border-2 border-black w-10 h-10 rounded-full bg-gray-300'></button>
          <button><BsFilterRight className='text-3xl'/></button>
        </div>
    </aside>
  )
}

export default ProfileBar