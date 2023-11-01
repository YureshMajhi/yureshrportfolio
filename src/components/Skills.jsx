import React from "react";

import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import { workFiles } from "./workFiles";

const Skills = () => {
  const { skillArray } = workFiles();
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#0b0c10] text-gray-300 flex justify-center items-center"
    >
      {/* container */}
      <div className="w-full max-w-[1000px] mx-auto px-2 flex flex-col">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Skills
          </p>
          <p className="py-4">
            // Here are some of the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {skillArray &&
            skillArray.map((skill) => {
              return (
                <div className="shadow-md shadow-[#45a29e] hover:scale-110 duration-500">
                  <img
                    className="w-20 mx-auto"
                    src={skill.img}
                    alt={skill.alt}
                  />
                  <p className="my-4">{skill.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
