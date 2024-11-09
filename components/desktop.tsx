import React from "react";
import Image from "next/image";
import desktopImage from "../public/desktop.png";

const desktop = () => {
  return (
    <div className="oi-regular w-full h-full flex items-center justify-center overflow-hidden relative mt-20 lg:mt-10">
      <Image src={desktopImage} alt="desktop" className="" />
    </div>
  );
};

export default desktop;
