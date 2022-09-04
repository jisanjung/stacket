import React from 'react'
import About from '../components/welcome/About'
import Form from '../components/welcome/Form'

const Welcome = () => {
  return (
    <main className='lg:flex'>
      <About/>
      <Form/>
    </main>
  )
}

export default Welcome