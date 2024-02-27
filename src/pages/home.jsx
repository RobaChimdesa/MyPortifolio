import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Layout from "../components/Layout";

function Home() {
  return (
 
      <div>
        <div className="  h-screen ">

          <div className=" grid  md:grid-cols-1 grid-cols-2 mx-10 z-10
          items-center">

          <div className="items-center h-1/2 font-serif font-bold text-white md:px-5">
            <h1 className="font-serif 	 text-7xl md:text-4xl text-white">Hi,</h1>
            <h1 className=" font-serif text-6xl md:text-4xl text-white  "><b>I'm</b>{' '} Roba Chimdesa</h1>
             <h1 className=" font-serif text-6xl md:text-4xl text-red-500">
                
              <span >{' '}
              <Typewriter
              words={['Computer Engineer','Web Developer','Designer']}
              loop={10}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
              />

              </span>
            </h1>
           
          </div>

          <div className="h-1/2">
         {/* <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="2"
                loop
                autoplay
  ></lottie-player>*/}
              <img src="roba.jpg" alt=""className="rounded-2xl   h-full w-4/6" />
              
              
              
           </div>
          </div>

        </div>
      </div>
     
  );
}

export default Home;
