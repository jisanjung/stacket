import React, { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import MobileFilterCard from './MobileFilterCard';
import useMediaQuery from "../../hooks/useMediaQuery";

const ProfileBar = (props) => {

  const [openFilterCard, setOpenFilterCard] = useState(false);
  const isLargeDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <aside className={`fixed w-full z-20 border-b-2 border-black py-4 px-5 ${isLargeDesktop && "hidden"}`}>
        <div className='flex justify-end lg:flex-col lg:items-center'>
          <button onClick={() => setOpenFilterCard(true)}><BsFilterRight className='text-3xl lg:hidden'/></button>
        </div>
        {openFilterCard && <MobileFilterCard setOpenFilterCard={setOpenFilterCard}/>}
    </aside>
  )
}

export default ProfileBar