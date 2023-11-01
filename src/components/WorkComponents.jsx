import React from "react";

const WorkComponents = ({ work }) => {
  return (
    <div
      style={{ backgroundImage: `url(${work.img})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          {work.title}
        </span>
        <div className="pt-8 text-gray-700 text-lg">
          <a href={work.demo} target="_blank">
            <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={work.code} target="_blank">
            <button className="rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkComponents;
