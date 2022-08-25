import React, { useState } from 'react'
import Button from '../globals/Button'
import Heading from '../globals/Heading'
import Input from '../globals/Input'
import { useNavigate } from "react-router-dom";

const Form = () => {

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/listings/${username}`);
  }

  return (
    <div id="welcomeForm" className='h-screen px-12'>
        <div className='flex items-center h-full'>
            <form className='w-full mb-16' onSubmit={handleSubmit}>
                <Heading text="Try it out" className="text-2xl mb-4"/>
                <Input type="text" placeholder="GitHub Username" className="w-full mb-3" onChange={e => setUsername(e.target.value)}/>
                <Button type="submit" text="Let's go" className="w-full"/>
            </form>
        </div>
    </div>
  )
}

export default Form