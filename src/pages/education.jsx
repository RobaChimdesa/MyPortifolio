import React from "react";
import Layout from "../components/Layout";

function Education() {
  return (
   
      <div>
        <h1 className="text-white text-4xl mx-20 mt-20 mb-9 font-bold font-serif">
          Education
        </h1>
        <div className="grid grid-cols-2 pl-36 pr-10 md:grid-cols-1 font-semibold  font-serif justify-between w-full h-screen text-white">
          <div className=" px-3  w-4/5 h-68 rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <p className="text-2xl text-red-300">2016-2020</p>
            <h1 className="text-white text-2xl">High School Diploma</h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>

          <div className=" px-3 w-4/5  h-68  rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <p className="text-2xl text-red-300">2020-present</p>
            <h1 className="text-white text-2xl">Bachelor's Degree</h1>
            <p>
              I am currently attending a five-year computer science and
              engineering course at Adama Science and Technology University. As
              a 4'th-year student, I have already completed a significant
              portion of the program.
            </p>
          </div>
          <div>
            {" "}
            <h1 className="text-white text-4xl mx-40 mt-2 mb-9 font-bold font-serif">
              certificates
            </h1>
            <div className="px-3 w-4/5 h-68  rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
               <h1 className="text-white text-xl">Supervised Machine Learning: Regression and Classification</h1>
                <a href="coursera.png" target="_blank">
                <img src="coursera.png" alt=""className="w-full h-72" />
                </a>
              
            </div>
            </div>
{/* new feature */}
          <div className="mt-24 mb-0 px-3 w-4/5 h-60 rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
              <h1 className="text-white text-xl mx-36">React Js</h1>
              
                
                <a href="reactjs.jpg" target="_blank">
                <img src="reactjs.jpg" alt="react"className="w-full h-72" />
                </a>
              
              
            </div>
          
          
        </div>
      </div>
    
  );
}

export default Education;
