import React from 'react'
import Button from '../globals/Button'
import Heading from '../globals/Heading'
import Input from '../globals/Input'
import { useStoreActions } from "easy-peasy";

const Form = () => {

  const setUsername = useStoreActions(actions => actions.setUsername);

  return (
    <div id="welcomeForm" className='h-screen bg-custom-light-green px-12'>
        <div className='flex items-center h-full'>
            <div className='w-full mb-16'>
                <Heading text="Try it out" className="text-2xl mb-4"/>
                <Input type="text" placeholder="GitHub Username" className="w-full mb-3" onChange={e => setUsername(e.target.value)}/>
                <Button text="Let's go" className="w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Form