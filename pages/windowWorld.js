import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';


export default function windowWorld(){

  const Introduction = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(true);

    const toggleInfo = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    return (
        <div className='flex items-center flex-col justify-evenly h-screen'>
            <div className='self-center'>
                <button className='p-4 bg-white self-center rounded-xl text-xl'onClick={toggleInfo}>
                    {isInfoOpen ? "Close Info" : "Open Info"}
                    </button>
            </div>
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
        <div className='bg-[rgb(255,0,0)] h-screen w-screen'>
            <Introduction/>
        </div>
    )
}