import React from 'react'
import Heading from '../globals/Heading'
import CharacterSVG from './CharacterSVG'
import { BsChevronCompactDown } from "react-icons/bs";
import useMediaQuery from "../../hooks/useMediaQuery";

const About = () => {

  const isLargeDesktop = useMediaQuery("(min-width: 1024px)");
  const isXLargeDesktop = useMediaQuery("(min-width: 1280px)");
  
  return (
    <section className='h-screen bg-custom-green px-8 relative lg:w-1/2 lg:border-r-2 lg:border-black'>
        <Heading text="stacket" className="text-3xl pt-6 lg:absolute"/>
        <div className='h-full flex justify-center items-center'>
            <div className='mb-56 flex flex-col justify-center lg:absolute' style={{
              top: isLargeDesktop && "40%",
              transform: isLargeDesktop && "translateY(-50%)"
            }}>
                <CharacterSVG/>
                <p className='font-bold text-2xl text-center px-8' style={{
                  width: isLargeDesktop && "500px",
                  minWidth: isXLargeDesktop && "550px"
                }}>
                A tool made for software engineers and developers to find jobs based on their tech stack on GitHub.
                </p>
            </div>
        </div>
        <a href="#welcomeForm" className='absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden'>
            <BsChevronCompactDown className='text-4xl'/>
        </a>
    </section>
  )
}

export default About