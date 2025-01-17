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
            I am passionate about building websites that make a difference. As a
            frontend specialist, I help individuals and big businesses alike
            create a great user experience. With skills like React and frontend
            development, I am able to transform your ideas into reality and take
            your projects to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
