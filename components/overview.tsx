import React from "react";
import Image from "next/image";
import Backend from "../public/backend-dev.png";
import Frontend from "../public/frontend-dev.png";

const overview = () => {
  return (
    <div className="font-handwriting w-full h-full flex items-center justify-center overflow-hidden">
      <div className="p-4 lg:ml-[180px] lg:p-28">
        <p className="text-2xl">Intrduction</p>
        <h2 className="text-6xl text-blue-600">Overview.</h2>
        <p className="lg:w-[70%] text-3xl mt-4 text-wrap lg:text-left">
          Hey there! Welcome to my portfolio website! I'm a skilled Software
          Engineer with experience in JavaScript, C++. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </p>
        <div className="mt-10 lg:flex items-center justify-center lg:justify-start">
          <div className="flex items-center justify-center">
            <Image
              src={Frontend}
              alt="frontend"
              className="w-[280px] h-[300px] mr-4"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={Backend}
              alt="backend"
              className="w-[280px] h-[300px] mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default overview;
