import React from 'react';
import MenuCard from '../globals/MenuCard';
import Heading from "../globals/Heading";
import { BsChevronCompactRight } from "react-icons/bs";
import { useStoreState } from "easy-peasy";
import LanguageTagSet from './LanguageTagSet';

const MobileFilterCard = (props) => {

    const filterStack = useStoreState(state => state.filterStack);

  return (
    <MenuCard className="top-0 bottom-0 left-1/4 -right-10 pt-6">
        {console.log(filterStack)}
        <div className='flex justify-start'>
            <button onClick={() => props.setOpenFilterCard(false)}>
                <BsChevronCompactRight className='text-3xl'/>
            </button>
        </div>
        <div className='mt-10 mr-10 px-4'>
            <Heading text="Filter by skillset:" className="text-lg"/>
            <LanguageTagSet/>
        </div>
    </MenuCard>
  )
}

export default MobileFilterCard