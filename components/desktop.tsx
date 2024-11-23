"use client";
import React, { useState } from "react";
import Image from "next/image";
import desktopImage from "../public/desktop.png";

import Skill from "./skills";
import Project from "./project";
import Experience from "./experience";

const Desktop = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const renderMainMenu = () => (
    <div className="md:mt-2 flex flex-col lg:gap-4 pl-4 md:pl-8 lg:pl-14">
      <div
        className="flex flex-col items-center justify-center hover:cursor-pointer w-10 lg:w-24"
        onClick={() => setActiveComponent("skill")}
      >
        <p>📂</p>
        <p className="font-mono text-xs">skill</p>
      </div>
      <div
        className="flex flex-col items-center justify-center hover:cursor-pointer w-10 lg:w-24"
        onClick={() => setActiveComponent("project")}
      >
        <p>📂</p>
        <p className="font-mono text-xs">prj..</p>
      </div>
      <div
        className="flex flex-col items-center justify-center hover:cursor-pointer w-10 lg:w-24"
        onClick={() => setActiveComponent("experience")}
      >
        <p>📂</p>
        <p className="font-mono text-xs">exp..</p>
      </div>
    </div>
  );

  const renderComponent = () => {
    switch (activeComponent) {
      case "skill":
        return <Skill setActiveComponent={setActiveComponent} />;
      case "project":
        return <Project />;
      case "experience":
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden mt-20 lg:mt-10 relative mb-20">
      <div className="absolute w-[36%] h-[10rem] sm:h-[20rem] md:h-[22rem] lg:h-[33rem] xl:h-[40rem] 2xl:h-[44rem] z-10">
        <div className="">
          {activeComponent ? renderComponent() : renderMainMenu()}
        </div>
      </div>
      <Image src={desktopImage} alt="desktop" className="relative z-0" />
    </div>
  );
};

export default Desktop;
