import React from "react";
import { Link } from "react-router-dom";
import img1 from "./images/js.png";
import img2 from "./images/html.png";
import figima from './images/figima.png'
function Design() {
  return (
    <div className="grid pb-10 mb-11 grid-cols-3 md:grid-cols-2 gap-20  text-white font-serif  mt-28 ">
      <div className="w-48 h-56 -ml-28 bg-black hover:bg-slate-500 pt-2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
        <div className="mt-6">
          <h1 className="text-xl text-white ml-12 mt-5">Figima</h1>
        </div>
        <div>
          {" "}
          <img className="w-36 m-6 mt-2 h-32" src={figima} alt="javascript" />
        </div>
      </div>
    </div>
  );
}

export default Design;
