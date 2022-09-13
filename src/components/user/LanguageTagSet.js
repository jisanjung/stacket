import React from 'react';
import { useStoreActions, useStoreState } from "easy-peasy";
import LanguageTag from './LanguageTag';

const LanguageTagSet = () => {

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
    <div className='flex flex-col mt-4 lg:flex-row'>
        {stack.map(language => {
            return (
                <LanguageTag key={language} language={language} filterStack={filterStack} onClick={() => handleLanguageClick(language)}/>
            )
        })}
    </div>
  )
}

export default LanguageTagSet