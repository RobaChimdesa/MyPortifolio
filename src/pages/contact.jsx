import React from "react";
import Layout from "../components/Layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Contact() {
  return (
   
      <div className="h-screen mt-10">
        <h1 className="text-white mx-40 my-10 md:mb-0 md:mt-3 md:mx-10 text-4xl font-serif font-bold md:2xl">
          CONTACTS
        </h1>

        <div className="grid md:grid-cols-1 w-full  grid-cols-2 text-white  ">
          <div>
            <div className="w-1/2  md:w-full md:mx-0  mx-20 ">
              <div className=" bg-slate-700 p-2 my-6 md:my-0 rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <LocationOnIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Location</h3>
                  <h4>Adama,Ethiopia</h4>
                </div>
              </div>

              <div className=" bg-slate-700 p-2 my-6  rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <ContactMailIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Gmail</h3>
                  <h4>robachimdesa123@gmail.com</h4>
                </div>
              </div>

              <div className=" bg-slate-700 p-2 my-6 rounded-lg  flex justify-start justify-items-center  grid-cols-2">
                <div className=" mx-1 p-3 rounded-full  bg-slate-400 text-black">
                  <LocalPhoneIcon />
                </div>
                <div className="mx-1 font-serif">
                  <h3 className="font-bold">Call</h3>
                  <h4>+251983626772</h4>
                </div>
              </div>

              <div className=" bg-white w-full md:hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2820171644894!2d39.29187997425917!3d8.568858391475242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20%2CASTU%2C%20Adama%20%2CEthiopia!5e0!3m2!1sen!2set!4v1698748484343!5m2!1sen!2set"
                  width="480"
                  height="250"
                  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="w-1/2 md:w-full">
                <h1 className="text-2xl  font-serif ">Your Name</h1>

                <input
                  placeholder="Full Name"
                  type="text"
                  className="w-full  rounded
                      shadow-xl  p-2 text-white px-5 bg-slate-700  "
                />
                <h1 className="text-2xl mt-7 font-serif ">Your Email</h1>

                <input
                  placeholder="Email"
                  type="email"
                  className="w-full bg-slate-700 rounded 
            shadow-xl  p-2 text-white px-5   "
                />
                <h1 className="text-2xl mt-7 font-serif ">Subject</h1>

                <input
                  placeholder="Subject"
                  type="text"
                  className="w-full bg-slate-700 rounded 
                  shadow-xl  p-2 text-white px-5"
                />
                <h1 className="text-2xl mt-7 font-serif ">Message</h1>

                <textarea className="min-w-full min-h-full bg-slate-700 h-168px" />
                <button className="bg-blue-700 hover:bg-blue-500 p-2 px-6 rounded-3xl my-4 md:my-0 mx-28">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default Contact;
