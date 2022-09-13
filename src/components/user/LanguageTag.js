import React from 'react'
import Button from '../globals/Button'

const LanguageTag = (props) => {

    const doesLanguageExist = props.filterStack.find(item => item === props.language);

  return (
    <Button text={props.language} className={`block py-2 mb-4 text-sm lg:py-1 lg:px-8 lg:mr-2 ${!doesLanguageExist && "bg-transparent"}`} onClick={props.onClick}/>
  )
}

export default LanguageTag