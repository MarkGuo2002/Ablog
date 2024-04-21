import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import bloggingImage from '../assets/blogging.jpeg';
import Logo from '../assets/logo.png';
import Authentication from './Authentication';
function UnauthenticatedHome() {
    const colors = [
        "#ffffff"  // text-white (Similarly, Tailwind uses just 'white')
      ];

    return(
        <div className='w-screen h-screen flex'>
            <div className='left-container w-1/2 h-full bg-white hidden lg:block'>
                { /* place the image in the left container behind the autotyper */}
                <img src={bloggingImage} alt='blogging' className='absolute w-1/2 h-full object-cover brightness-75 blur-[2px]'/>
                <div className='autotyper mt-6 p-20 absolute w-1/2 drop-shadow-xl hidden lg:block'>
                    <h2 className=' font-medium text-[5em] text-primaryStrong'>
                        Ablog {' '}
                        <span className=" font-light" style={{ color: colors[Math.floor(Math.random() * colors.length)] }}>
                        <Typewriter
                            words={["is easy to use",  "allows writers to express their thoughts", "is intuitive", "allows writers to personalize their blogs",
                            "is minimalist", "allows writers to share their feelings", "is simple", "allows writers to share their memories"]}
                            loop
                            cursor
                            cursorStyle='<'
                            typeSpeed={70}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                        </span>
                    </h2>
                
                </div>
            </div>
                    <div className='right-container w-screen lg:w-1/2 bg-white flex flex-col items-center justify-center'>
                    <img src={Logo} alt="Logo" className="w-2/12 h-2/12 drop-shadow-lg" />
                    <p className= 'text-[4em] drop-shadow-md text-primaryStrong font-medium ml-4 bg-gradient-to-r from-slate-200 to-primaryStrong text-transparent bg-clip-text'>Ablog</p>

                <Authentication/>
            </div>
        </div>

    );

}




export default UnauthenticatedHome;