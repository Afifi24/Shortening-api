import React, { useState } from 'react'
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const Nav = () => {
    const [isopen,setIsopen] = useState(false)
  return (
    <div className=' lg:w-widthmd w-widthsm mx-auto py-10 '>
        {/* desktop */}
     <nav className='hidden text-sm  md:flex justify-between items-center  '>
        <div className='flex gap-20 items-center'>
            <img src={logo} alt="" />
        <ul className='flex  gap-8   font-bold' style={{color: 'var(--Gray)'}}>
            <a className='hover:text-black duration-200' href="#">Features</a>
            <a className='hover:text-black duration-200' href="#">Pricing</a>
            <a className='hover:text-black duration-200' href="#">Resources</a>
        </ul>
        </div>
        <div id='btn' className='flex font-bold gap-4 ' style={{color: 'var(--Gray)'}}>
           <button className='hover:text-black duration-200'>Login</button>
           <button className='px-8 py-2 rounded-full text-white hover:' style={{ backgroundColor: 'var(--Cyan)' }}>Sign Up</button>
        </div>
     </nav>
        {/* mobile */}
        <div className='md:hidden flex justify-between items-center'>
        <img src={logo} alt="" />
         <h4 onClick={()=>setIsopen(!isopen)} className='cursor-pointer text-3xl'>
            {isopen ? <FaTimes/>:<FaBars/> }</h4>
        </div>
        {isopen && <nav className=' gap-10 mt-4 rounded-xl px-6 py-12 flex flex-col md:hidden justify-between items-center  ' style={{backgroundColor: 'var(--Dark-Violet)'}}>
        <div className='flex gap-20 items-center'>
        <ul className='flex flex-col text-center  gap-6 text-white font-bold'>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
        </ul>
        </div>
        <div id='btn' className='flex border-t pt-4 w-full flex-col font-bold gap-6 text-white'>
           <button>Login</button>
           <button className='px-8 py-3 w-full rounded-full text-white'  style={{ backgroundColor: 'var(--Cyan)' }}>Sign Up</button>
        </div>
     </nav>}


    </div>
  )
}

export default Nav