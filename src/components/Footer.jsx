import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-4/6 mt-96 md:w-full">
      <div className="bg-black grid grid-cols-1 justify-center items-align-center pb-96 text-white h-4/6">
       <div className=" font-serif  text-6xl md:text-2xl text-center "> 
        <h1 className="hover:text-red-500 ">Designed And Developed</h1>
        <h1 className="hover:text-red-500">By Roba Chimdesa</h1></div>
      
        <div className="mt-20 mx-20 text-4xl gap-0 text-center grid grid-cols-4 md:grid-cols-2 ">
        
        <h1 className="text-center"> <Link><FacebookIcon/></Link> </h1>
        
        <h1> <Link href="https://t.me/Anoo_Chim">ronb<TelegramIcon/></Link></h1>
        
        <h1 ><Link><YouTubeIcon/></Link></h1>
        
        <h1><Link><InstagramIcon/></Link></h1>
      </div>
      
      </div>
      
    </div>
  );
}

export default Footer;
