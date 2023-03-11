import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-instagram.svg'
import pentrest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
const Footer = () => {
  return (
    <div style={{backgroundColor:'var(--Very-Dark-Violet)'}}>
     <div className='h-fit place-items-center md:place-items-start text-center grid-cols-1 gap-6 grid md:grid-cols-3 pt-20 pb-6 sm:w-widthsm lg:w-widthmd mx-auto  text-white' >
        <div className='flex grid-cols-1  items-start'>
            <img src={logo} alt="" />
        </div>
        <div className=' flex flex-col grid-cols-1  md:flex-row text-gray-400  gap-6 '>
            <div >
                <h2 className='mb-4 text-white'>Features</h2>
                <ul className='flex flex-col gap-2'>
                    <a href="#">Link Shortening</a>
                    <a href="#">Branded Links</a>
                    <a href="#">Analytics</a>
                </ul>
            </div>
            <div >
                <h2 className='mb-4 text-white'>Resources</h2>
                <ul className='flex flex-col gap-2'>
                    <a href="#">Blog</a>
                    <a href="#">Developers</a>
                    <a href="#">Support</a>
                </ul>
            </div>
            <div>
                <h2 className='mb-4 text-white'>Company</h2>
                <ul className='flex flex-col gap-2'>
                    <a href="#">About</a>
                    <a href="#">Our Team</a>
                    <a href="#">careers</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
        </div>
        <div className='flex grid-cols-1   items-start justify-center gap-6'>
            <img className='cursor-pointer' src={facebook} alt="" />
            <img className='cursor-pointer' src={twitter} alt="" />
            <img className='cursor-pointer' src={pentrest} alt="" />
            <img className='cursor-pointer' src={instagram} alt="" />
        </div>
         
     </div>
    </div>
  )
}

export default Footer



