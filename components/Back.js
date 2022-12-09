import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IconContext } from 'react-icons'


const Back = (props) => {
  return (
     <div className='mt-4 ml-4'>
        
      <button className="bg-[#f0f0f0]  sm:text-[2rem] md:text-[2.5rem] font-bold py-5 px-5 m1 hover:bg-[#623B24] hover:text-yellow-400 rounded-2xl ">
           <IconContext.Provider value={{ className: 'text-4xl' }}>
              <IoMdArrowRoundBack />
             </IconContext.Provider>
           </button>
            
    </div>
  );
}

export default Back