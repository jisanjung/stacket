import React from 'react'
import Heading from '../globals/Heading'
import CharacterSVG from './CharacterSVG'
import { BsChevronCompactDown } from "react-icons/bs";

const About = () => {
  return (
    <section className='h-screen bg-custom-green px-8 relative'>
        <Heading text="stacket" className="text-3xl pt-6"/>
        <div className='h-full flex justify-center items-center'>
            <div className='mb-56 flex flex-col justify-center'>
                <CharacterSVG/>
                <p className='font-bold text-2xl text-center px-8'>
                A tool made for software engineers and developers to find jobs based on their tech stack on GitHub.
                </p>
            </div>
        </div>
        <a href="#welcomeForm" className='absolute bottom-6 left-1/2 -translate-x-1/2'>
            <BsChevronCompactDown className='text-4xl'/>
        </a>
    </section>
  )
}

export default About