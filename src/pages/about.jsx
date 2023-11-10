import React, { useState } from "react";
import Layout from "../components/Layout";

function About() {
  const [showmore, setShowmore] = useState(false);
  const discriptin = (
    <p>
      My passion for learning and my drive to succeed make me a dedicated and
      motivated computer science and engineering student. With my strong
      foundation in web development and competitive programming, I’m
      well-positioned to excel in his future career as a computer science.
    </p>
  );
  const handleshow = () => {
    setShowmore(!showmore);
  };
  return (
    
      <div className="h-screen">
       

        <h1 className="text-white text-4xl md:text-2xl mx-20 mt-20 mb-9 font-bold font-serif">
          About Me
        </h1>
        <div className="grid h-screen  w-full grid-cols-2 md:grid-cols-1 text-white  font-serif">
          <div className="w-full mx-2 p-2 text-2xl md:text:xl text-left m-20 my-3">
            <p className="text-left ">
              My name is Roba Chimdesa. I'm a 4th-year computer science and
              engineering student at Adama Science and Technology University. I
              have a strong interest in web development and competitive
              programming, and am constantly seeking to improve my skills in
              these areas.
            </p>
            <p className="text-left text-justify-center md:hidden">
              {" "}
              I'm a self-motivated learner who is eager to explore new
              technologies and programming languages. I enjoy taking on new
              challenges and solving complex problems, which has led me to
              develop a keen interest in competitive programming.
            </p>{" "}
            <button
              onClick={handleshow}
              className="md:hidden  bg-blue-700 hover:bg-blue-500 p-2 px-6 rounded-3xl my-4 mx-28 md:my-2 md:px-3 md:mx-28 md:p-0"
            >
              {showmore ? "Hide" : "Show"} Details
            </button>
            {showmore && discriptin}
          </div>
          <div className="w-1/2 mx-40  ">
         
            
            <img src="software2.jpg" alt="jkjkl" className="h-4/6   w-full  rounded-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
          </div>
        </div>
      </div>
  
  );
}

export default About;
