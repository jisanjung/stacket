import React, { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import MobileFilterCard from './MobileFilterCard';
import MobileProfileCard from './MobileProfileCard';
import useMediaQuery from "../../hooks/useMediaQuery";
import Skills from "./Skills";
import { useParams } from 'react-router-dom';

const ProfileBar = (props) => {

  const [openProfileCard, setOpenProfileCard] = useState(false);
  const [openFilterCard, setOpenFilterCard] = useState(false);
  const isLargeDesktop = useMediaQuery("(min-width: 1024px)");
  const { user } = useParams();

  return (
    <aside className='fixed w-full z-20 border-b-2 border-black py-4 px-5 lg:w-60 lg:h-screen lg:border-b-0 lg:border-r-2 lg:w-auto lg:pt-20'>
        <div className='flex justify-between lg:flex-col lg:items-center'>
          <button className='border-2 border-black w-10 h-10 rounded-full bg-gray-300 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28 lg:cursor-default' onClick={() => !isLargeDesktop && setOpenProfileCard(true)}></button>
          {isLargeDesktop && <h1 className='pt-3'>{user}</h1>}
          {isLargeDesktop && <Skills className="lg:w-48 2xl:w-56"/>}
          <button onClick={() => setOpenFilterCard(true)}><BsFilterRight className='text-3xl lg:hidden'/></button>
        </div>
        {openProfileCard && <MobileProfileCard setOpenProfileCard={setOpenProfileCard}/>}
        {openFilterCard && <MobileFilterCard setOpenFilterCard={setOpenFilterCard}/>}
    </aside>
  )
}

export default ProfileBar