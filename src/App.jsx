import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Navbar } from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return <div className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
     <Navbar/>
    <Hero/>
    <About/>
  </div>
   
}

export default App