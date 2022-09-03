import React from 'react';
import MenuCard from '../globals/MenuCard';
import Heading from "../globals/Heading";
import { BsChevronCompactRight } from "react-icons/bs";
import { useStoreActions, useStoreState } from "easy-peasy";
import LanguageTag from './LanguageTag';

const MobileFilterCard = (props) => {

    const stack = useStoreState(state => state.stack);
    const filterStack = useStoreState(state => state.filterStack);
    const setFilterStack = useStoreActions(actions => actions.setFilterStack);

    const handleLanguageClick = language => {
        if (filterStack.find(item => item === language)) {
            let stackCopy = [...filterStack];
            stackCopy = stackCopy.filter(val => val !== language);
            setFilterStack(stackCopy);
        } else {
            const stackCopy = [...filterStack];
            stackCopy.push(language);
            setFilterStack(stackCopy);
        }
    }

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
            <div className='flex flex-col mt-4'>
                {stack.map(language => {
                    return (
                        <LanguageTag key={language} language={language} filterStack={filterStack} onClick={() => handleLanguageClick(language)}/>
                    )
                })}
            </div>
        </div>
    </MenuCard>
  )
}

export default MobileFilterCard