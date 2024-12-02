import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Feature } from './components/Features'


function App() {
  const [count, setCount] = useState(0)

  return <div className='relative min-h-screen w-screen overflow-x-hidden '>
     <Navbar/>
    <Hero/>
    <About/>
    <Feature/>
  </div>
   
}

export default App
