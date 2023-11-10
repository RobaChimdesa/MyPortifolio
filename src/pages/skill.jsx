import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Skill() {
  const [active, setActive] = useState(0);

  const skill = [
    {
      name: "All",
      path: "",
    },
    {
      name: "Frontend",
      path: "frontend",
    },
    {
      name: "Backend",
      path: "backend",
    },
    {
      name: "Framework",
      path: "framework",
    },
    {
      name: "Database",
      path: "database",
    },
    {
      name: "Design",
      path: "design",
    },
    {
      name: "Frontend",
      path: "frontend",
    },
  ];

  return (
    <div className="font-serif text-white h-screen w-full">
      <div className="items-center">
        <h1 className="m-10 mb-5 font-bold text-4xl md:text-2xl">MY SKILLS</h1>
      </div>
    <div className="  gap-4  flex mx-10 h-12 text-2xl">
      {skill.map((item, i) => {
        return (
          <li key={i} className="list-none mx-3 h-10">
            <Link
              to={item.path}
              onClick={() => {
                setActive(i);
              }}
              className={`"text-white" ${
                active == i && "bg-black text-white p-2"
              }`}
            >
              {" "}
              {item.name}{" "}
            </Link>
          </li>
        );
      })}

      <Outlet />
    </div>
    </div>
  );
}

export default Skill;
