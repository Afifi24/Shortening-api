import React from 'react'
import img1d from '../images/illustration-working.svg'
const Header = () => {
  return (
    <div>
      <div className='flex flex-col gap-6 md:flex-row my-20 w-widthsm mx-auto md:mx-0   md:ml-auto overflow-hidden '>
        <div id="content" className='order-2 flex-1 md:order-1 flex flex-col gap-8 justify-center'>
          <h1 className='text-4xl text-center md:text-left md:text-6xl leading-loose font-bold '>More than just shorter links</h1>
          <p className='text-center md:text-left' style={{color: 'var(--Gray)'}}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <div className='flex items-center justify-center md:items-start md:justify-start'>
          <button className='text-center px-8 py-3 rounded-full w-fit  text-white' style={{ backgroundColor: 'var(--Cyan)' }}>Get Started</button>
          </div>
          
        </div>
        <div className='order-1 flex-1 md:order-2 md:-mr-24'>
          <img className='w-2full' src={img1d} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Header