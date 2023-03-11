import React from 'react'
import boost from '../images/bg-boost-desktop.svg'
const Boost = () => {
  return (
    <div>
        {/* destop */}
    <div className='h-48 flex  boost  flex-col gap-4 items-center justify-center ' style={{backgroundColor:'var(--Dark-Violet)'}}>
         <h2 className=' text-xl md:text-3xl text-white'>Boost your links today</h2>
         <button className=' px-4 py-2 md:px-8 md:py-3  rounded-full text-white'  style={{ backgroundColor: 'var(--Cyan)' }}>Get started</button>
    </div>
    </div>
  )
}

export default Boost