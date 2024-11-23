import React from "react";

const Skills = ({
  setActiveComponent,
}: {
  setActiveComponent: (component: string | null) => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-96 h-64 rounded-lg">
        <div className="flex p-2 gap-1">
          <div className="">
            <span
              className="bg-blue-500 center w-3 h-3 rounded-full hover:cursor-pointer flex items-center justify-center"
              onClick={() => setActiveComponent(null)}
            >
              <p className="text-white text-[10px]">x</p>
            </span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 center w-3 h-3 rounded-full hover:cursor-pointer flex items-center justify-center"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box center w-3 h-3 rounded-full hover:cursor-pointer flex items-center justify-center"></span>
          </div>
        </div>
        <div className="card__content">
          <p>skill</p>
          <img src="https://skillicons.dev/icons?i=javascript,go,cpp,python,typescript,html,css,mongodb,postgres,mysql" />
          <img src="https://skillicons.dev/icons?i=react,next,tailwind,nodejs,nestjs,npm,yarn,git,github,vscode,postman" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
