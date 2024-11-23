import React from "react";

const Skills = ({
  setActiveComponent,
}: {
  setActiveComponent: (component: string | null) => void;
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full px-4 mt-5">
      <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-xl rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-96 p-6 relative mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <span
              className="bg-red-500 w-4 h-4 rounded-full hover:cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
              onClick={() => setActiveComponent(null)}
            >
              <p className="text-white text-[10px] font-bold">x</p>
            </span>
            <span className="bg-yellow-500 w-4 h-4 rounded-full hover:scale-110 transition-transform"></span>
            <span className="bg-green-500 w-4 h-4 rounded-full hover:scale-110 transition-transform"></span>
          </div>
          <h2 className="font-bold text-lg text-gray-700">My Skills</h2>
        </div>

        {/* Skills Content */}
        <div className="flex flex-col gap-4">
          {/* Section Title */}
          <p className="text-gray-600 text-sm md:text-base text-center">
            Proficient in these tools and technologies:
          </p>

          {/* Skill Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-items-center">
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="JavaScript"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=go"
              alt="Go"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=cpp"
              alt="C++"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=python"
              alt="Python"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=typescript"
              alt="TypeScript"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=mongodb"
              alt="MongoDB"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=postgres"
              alt="Postgres"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=mysql"
              alt="MySQL"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=next"
              alt="Next.js"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=nestjs"
              alt="NestJS"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=vscode"
              alt="VS Code"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=postman"
              alt="Postman"
              className="w-10 h-10 hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
