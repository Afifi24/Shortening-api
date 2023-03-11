import brand from '../images/icon-brand-recognition.svg'
import details from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'
import React, { useEffect, useState } from 'react'

const Shortlink = () => {
    const [Link,setLink] = useState([])
    const [input,setInput] = useState('')
    const [search,setSearch] = useState('afifi.com/ksdh')
    const [copy,setCopy] = useState(Link.short_link)
    const [iscopy,setIscopy] = useState(false)

    const FetchLink = async()=>{
       const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
       const link  = await data.json()
        setLink(link.result)
    }
    const SubmitHandler = (e)=>{
         e.preventDefault()
        //  if(input=''){
        //   setLink(...Link)
        //  }else{
        //      setLink([...Link,{item:input}])
        //  }
         setSearch(input)
         setIscopy(false)
         setInput('')
    }
    useEffect(()=>{
      FetchLink()
  },[search])

    const HandlerCopyClick = ()=>{
      navigator.clipboard.writeText(Link.short_link)
      setIscopy(!iscopy)
    }
    
     
    
  return (
    <div className='mt-36 min-h-screen py-6 space-y-6 bg-[#F2F2F2]'>
     <form className='h-36 -mt-24 rounded-lg  w-widthsm shorten md:w-widthmd mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-6'style={{backgroundColor: 'var(--Dark-Violet)'}} onSubmit={SubmitHandler}>
        <input required type="text" value={input} onChange={(e)=>setInput(e.target.value)} className=' w-4/5 lg:w-3/4 outline-none px-4 py-3 rounded-md' name="" id="" />
        <button className='px-8 py-3 rounded-lg text-white w-4/5 lg:w-1/6'  style={{ backgroundColor: 'var(--Cyan)' }}>Shorten it!</button>

     </form>
     
    {
      search &&  <div className=' bg-white  items-center flex md:justify-between flex-col md:flex-row h-fit py-4 md:px-4 md:py-0 md:h-12 w-widthsm gap-4 md:gap-0 md:w-widthmd mx-auto rounded-md'>
      <h2 className='border-b md:border-0 pb-2 w-full pl-4 md:pl-0 md:pb-0 '>{search}</h2>
      <div className='flex text-left md:text-right w-full px-4 md:px-0  md:items-center md:justify-end gap-3 md:gap-6 flex-col md:flex-row'>
       { Link && <h2 >{Link.short_link}</h2>}
      
       <button className={`px-6 py-3 md:py-1 ${iscopy? 'bg-red-500':'bg-blue-500'} w-full md:w-20 pl-4 rounded-md text-white ` } onClick={HandlerCopyClick}> {iscopy ?'copied':'copy'} </button> 
      </div>
</div>
    }
    <div className='min-h-screen pt-32'>
      <div className='flex flex-col items-center gap-8  w-widthsm  md:w-widthmd mx-auto  '>
        <h2 className='font-bold text-2xl md:text-4xl'>advanced statistics</h2>
      <p className='max-w-md text-center leading-7'style={{color: 'var(--Gray)'}}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className=' pt-32 w-widthsm pb-20 flex flex-col text-center md:text-left gap-20 md:gap-4   md:w-widthmd mx-auto md:flex-row'>
         <div className='flex flex-col w-fit h-fit z-10   gap-4  bg-white rounded-md shadow-sm relative p-8 md:-mt-10 ' id="card">
          <div className='absolute -top-12 left-1/2 -translate-x-2/4 md:left-1/4 md:-translate-x-1/4 flex items-center justify-center rounded-full h-20 w-20 bg-slate-500'>
          <img className='' src={brand}  alt="" />
          </div>
         <h2 className='font-bold mt-10'>Brand Recognition</h2>
        <p className='leading-7' style={{color: 'var(--Gray)'}}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
         </div>
         <div className='flex flex-col w-fit h-fit gap-4 bg-white rounded-md shadow-sm relative p-8 ' id="card">
          <div className='absolute md:left-1/4 md:-translate-x-1/4 -top-12 left-1/2 -translate-x-2/4 flex items-center justify-center rounded-full h-20 w-20 bg-slate-500'>
          <img className='' src={details}  alt="" />
          </div>
         <h2 className='font-bold mt-10'>Detailed Records</h2>
        <p className='leading-7' style={{color: 'var(--Gray)'}}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
         </div>
         <div className='flex flex-col w-fit  h-fit md:mt-10 gap-4 bg-white rounded-md shadow-sm relative p-8  ' id="card">
          <div className='absolute md:left-1/4 md:-translate-x-1/4  -top-12 left-1/2 -translate-x-2/4 flex items-center justify-center rounded-full h-20 w-20 bg-slate-500'>
          <img className='' src={fully}  alt="" />
          </div>
         <h2 className='font-bold mt-10'>Fully Customizable</h2>
        <p className='leading-7' style={{color: 'var(--Gray)'}}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
         </div>
      </div>
    </div>

    </div>
  )
}

export default Shortlink