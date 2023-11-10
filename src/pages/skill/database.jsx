import React from "react";
import img1 from "./images/js.png";
import img2 from "./images/html.png";
import mysql from './images/mysql.png'
import mogodb from './images/mogodb.png'
function Database() {
  return (
    <div className="grid pb-10 mb-11 grid-cols-3 md:grid-cols-2 gap-20  text-white font-serif  mt-28 ">
      <div className="w-48 h-56 -ml-96 bg-black hover:bg-slate-500 pt-2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
        <div className="mt-6">
          <h1 className="text-xl text-white ml-12 mt-5">MySQL</h1>
        </div>
        <div>
          {" "}
          <img className="w-36 m-6 mt-2" src={mysql} alt="javascript" />
        </div>
      </div>
      <div className="w-48 h-56 -ml-28 bg-black hover:bg-slate-500 pt-2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
        <div className="mt-6">
          <h1 className="text-xl text-white ml-12 mt-5">MongoDB</h1>
        </div>
        <div>
          {" "}
          <img className="w-36 m-6 mt-2 h-32" src={mogodb} alt="javascript" />
        </div>
      </div>
    </div>
  );
}

export default Database;
