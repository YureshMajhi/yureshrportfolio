import React from "react";

import { workFiles } from "./workFiles";
import WorkComponents from "./WorkComponents";

const Work = () => {
  const { workArray } = workFiles();

  return (
    <div name="work" className="w-full md:h-screen bg-[#0b0c10] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4">
        {/* info */}
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-[#66fcf1] inline">
            Work
          </p>
          <p className="py-6">// Check out my recent work!</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* grid item */}
          {workArray &&
            workArray.map((work) => {
              return <WorkComponents work={work} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Work;
