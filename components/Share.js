import React from 'react'
import { Tooltip } from '@nextui-org/react'

import { FaShareAlt } from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'
import { IconContext } from "react-icons";

const Share = () => {
  return (
    <div className="m2 bg-white p-3 border-spacing-1 rounded-2xl shadow-xl">
      <h1 className="text-[2rem] font-bold mb-4">Like what you see?</h1>

      <p>Why not write a personal comment?</p>
        <p>-Or share with the world</p>
        <div className='flex'>
      <Tooltip content="share" placement="left" color="invert">
        <button className="hover:bg-yellow-400  rounded-full text-center w-[3rem] h-[3rem] flex justify-center ">
          <IconContext.Provider value={{ className: "text-3xl" }}>
            <FaShareAlt className='mt-[0.5rem] mr-[0.2rem]'/>
          </IconContext.Provider>
           </button>
           
        </Tooltip>
        <Tooltip content="leave a personal comment" placement="bottom" color="invert">
           <button className="hover:bg-yellow-400  rounded-full text-center w-[3rem] h-[3rem] flex justify-center ">
              <IconContext.Provider value={{ className: "text-3xl" }}>
                 <FaPencilAlt className='mt-[0.5rem] mr-[0.2rem]' />
              </IconContext.Provider>
           </button>
           </Tooltip>
        </div>
    </div>
  );
}

export default Share