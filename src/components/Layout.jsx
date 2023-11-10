import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <div className="bg-indigo-950">
        <Header/>
     
      <div className="content font-mono ">{children}
      
      </div>
     <Footer/>
    </div>
  );
 
}

export default Layout;
