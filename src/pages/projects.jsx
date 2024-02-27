import React from "react";
import Layout from "../components/Layout";

function Projects() {
  return (
      <div className="md:h-screen">
        <h1 className="text-white text-4xl md:text-2xl  mx-20 mt-5 mb-2 font-bold font-serif">
          Project
        </h1>
        <div className="grid grid-cols-2 h-full mb-20 pl-36 pr-10 md:grid-cols-1 font-semibold w-full md:max-h-screen  font-serif justify-between   text-white">
          <div className=" px-3 md:px-0  w-4/5  md:w-full h-48 md:h-64 rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <h1 className="text-white mx-12 md:mx-1 text-2xl md:text-xl">
              Bank Management System
            </h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>

          <div className=" px-3 md-px-0 w-4/5  h-48 md:h-64 md:w-full rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <h1 className="text-white mx-12 md:mx-1 text-2xl md:text-xl">Quiz App</h1>
            <p>
              I am currently attending a five-year computer science and
              engineering course at Adama Science and Technology University. As
              a third-year student, I have already completed a significant
              portion of the program.
            </p>
          </div>

          <div className=" px-3 md:px-0 md:w-full  mt-10 w-4/5 h-48 md:h-64 rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <h1 className="text-white mx-12 md:mx-0  text-2xl md:text-xl">
              House Sell And Rental App
            </h1>
            <p className="">
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>
          <div className=" px-3 md:px-0 w-4/5 md:w-full h-48 md:h-64 mt-10 rounded-xl bg-slate-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <h1 className="text-white mx-12  md:mx-0 text-2xl md:text-xl">
              Library Management App
            </h1>
            <p>
              I attended at Bako Secondary School and obtained my high school
              diploma. I have since pursued higher education by earning a pass
              mark and joining a university and eager to expand my knowledge and
              skills.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Projects;
