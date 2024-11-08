import React from "react";
import Image from "next/image";
import Backend from "../public/backend-dev.png";
import Frontend from "../public/frontend-dev.png";
import snake from "../public/snake.png";

const overview = () => {
  return (
    <div className="oi-regular w-full h-full flex items-center justify-center overflow-hidden">
      <div className="p-4 lg:ml-[180px] lg:p-28">
        <p className="text-xl text-pink-500">Intrduction</p>
        <h2 className="text-4xl text-blue-600">Overview.</h2>
        <p className="lg:w-[70%] text-3xl mt-4 text-wrap text-center lg:text-left text-yellow-800">
          I'm a full-stack wizard who codes both frontends that dazzle and
          backends that don’t break (well, most of the time). Need an app that
          won’t crash and burn?
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
      <div className="absolute bottom-0 lg:right-60">
        <Image
          src={snake}
          alt="snake"
          className="hidden lg:block w-[280px] h-[300px] rotate-12 mr-4"
        />
      </div>
    </div>
  );
};

export default overview;
