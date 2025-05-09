import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';


export default function windowWorld(){

  const Introduction = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(true);

    const toggleInfo = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <div className='py-12'>
                <button className='p-4 bg-[rgb(255,0,0)] border-white border-2 text-white self-center rounded-xl text-xl'onClick={toggleInfo}>
                    {isInfoOpen ? "Close Info" : "Open Info"}
                    </button>
            </div>
            {/* <div>
                <span  className='h-10 w-10 rounded-full bg-white absolute left-5 top-5'/>
                <span  className='h-10 w-10 rounded-full bg-white absolute right-5 top-5'/>
                <span  className='h-10 w-10 rounded-full bg-white absolute left-5 bottom-5'/>
                <span  className='h-10 w-10 rounded-full bg-white absolute right-5 bottom-5'/>
            </div> */}
            <div className='self-center'>
                {isInfoOpen ?             
                    <div className='flex flex-col text-center bg-white p-4 rounded-xl'>
                        <span className='text-4xl p-2'>
                            Welcome to Window World
                        </span>
                        <ol className='text-xl'>
                           <li className='p-2'>1. Step into one of the windows on screen</li>
                           <li className='p-2'>2. Hide this tutorial and hold your phone vertiacl towards the screen </li>
                           <li className='p-2'>3. Tilt and rotate your phone to control your plant </li>
                           <li className='p-2'>4. Have fun </li>
                        </ol>
                    </div>
                : <></>}
            </div>
      </div>
    );
  };

    return(
        <div className='bg-[rgb(255,0,0)] h-screen w-screen flex items-center justify-center border-[rgb(0,255,0)] border-[25px]'>
            <Introduction/>
        </div>
    )
}