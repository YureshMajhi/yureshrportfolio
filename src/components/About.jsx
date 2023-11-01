import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex flex-col justify-center items-center bg-[#0b0c10] text-gray-300 "
    >
      <div className="w-full max-w-[1000px] px-4 grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Yuresh. Nice to meet you. Take a look around, if you'd like.
          </p>
        </div>
        <div>
          <p>
            I'm passionate about creating awesome websites that make a real
            difference. I specialize in front-end development, helping everyone
            from individuals to large corporations. Just think about having a
            front-end pro right at your disposal. What could you achieve with
            that kind of expertise?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
