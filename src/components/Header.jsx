import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SchoolIcon from "@mui/icons-material/School";
import ApprovalIcon from "@mui/icons-material/Approval";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const [active, setActive] = useState(0);
  const menu = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "About", path: "/about", icon: <InfoIcon /> },
    { title: "Education", path: "/education", icon: <SchoolIcon /> },
    { title: "Skill", path: "/skill", icon: <PsychologyAltIcon /> },
    { title: "Projects", path: "/projects", icon: <ApprovalIcon /> },
    { title: "Contact", path: "/contact", icon: <LocalPostOfficeIcon /> },
  ];

  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <div className="">
      <div
        className={`flex justify-between bg-black text-white items-center 
      shadow-lg p-2 ${showMenu !== "md:hidden" && "md:flex-col  "}`}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold">A S T U</h1>
          <button
            className="hidden 2xl:hidden xl:hidden lg:hidden  md:flex"
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
          >
            <MenuIcon />
          </button>
        </div>

        <div className="flex md:hidden">
          {menu.map((items, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setActive(i);
                }}
                className={`list-none  mx-4 ${
                  active == i && "bg-white text-black rounded-md px-5 p-1"
                } `}
              >
                <Link to={items.path}> {items.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`hidden mt-2 items-start justify-start  w-full md:flex flex-col lg:hidden xl:hidden 2xl:hidden  ${showMenu}`}
        >
          {menu.map((items, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setActive(i);
                }}
                className={`list-none  mx-4 my-4 ${
                  active == i && "bg-white text-black rounded-md px-5 p-1"
                } `}
              >
                {items.icon}
                <Link to={items.path}> {items.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
