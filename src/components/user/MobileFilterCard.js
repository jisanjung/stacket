import React from 'react';
import MenuCard from '../globals/MenuCard';
import Heading from "../globals/Heading";
import { BsChevronCompactRight } from "react-icons/bs";
import { useStoreState } from "easy-peasy";
import Button from '../globals/Button';

const MobileFilterCard = (props) => {

    const stack = useStoreState(state => state.stack);

  return (
    <MenuCard className="top-0 bottom-0 left-1/4 -right-10 pt-6">
        <div className='flex justify-start'>
            <button onClick={() => props.setOpenFilterCard(false)}>
                <BsChevronCompactRight className='text-3xl'/>
            </button>
        </div>
        <div className='mt-10 mr-10 px-4'>
            <Heading text="Filter by skillset:" className="text-lg"/>
            <div className='flex flex-col mt-4'>
                {stack.map(language => {
                    return (
                        <Button key={language} text={language} className="block py-2 mb-4 text-sm"/>
                    )
                })}
            </div>
        </div>
    </MenuCard>
  )
}

export default MobileFilterCard