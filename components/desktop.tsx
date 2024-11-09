// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import desktopImage from "../public/desktop.png";

// const Desktop = () => {
//   const [currentView, setCurrentView] = useState<
//     "home" | "skills" | "projects" | "experience"
//   >("home");

//   const handleIconClick = (view: "skills" | "projects" | "experience") => {
//     setCurrentView(view);
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case "skills":
//         return <div className="text-center text-xl">Skills Content</div>;
//       case "projects":
//         return <div className="text-center text-xl">Projects Content</div>;
//       case "experience":
//         return <div className="text-center text-xl">Experience Content</div>;
//       default:
//         return (
//           <div className="flex flex-col items-center space-y-4">
//             <button
//               onClick={() => handleIconClick("skills")}
//               className="icon-button"
//             >
//               Skills
//             </button>
//             <button
//               onClick={() => handleIconClick("projects")}
//               className="icon-button"
//             >
//               Projects
//             </button>
//             <button
//               onClick={() => handleIconClick("experience")}
//               className="icon-button"
//             >
//               Experience
//             </button>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="w-full h-full flex items-center justify-center overflow-hidden mt-20 lg:mt-10 relative">
//       <Image src={desktopImage} alt="desktop" className="" />
//       <div className="w-[35rem] h-[30rem] top-64 2xl:left-[38rem] bg-green-300 absolute"></div>
//       {/* <div className="absolute inset-0 flex items-center justify-center">
//         <div className="bg-green-300 p-4 rounded-md shadow-md relative">
//           {currentView !== "home" && (
//             <button
//               onClick={() => setCurrentView("home")}
//               className="absolute top-2 left-2 text-sm text-blue-500 hover:underline"
//             >
//               Back
//             </button>
//           )}
//           {renderContent()}
//         </div>
//       </div> */}
//       {/*  */}
//       {/*  */}
//       {/*  */}
//       {/*  */}
//       {/* <div className="xl:w-[30rem] 2xl:w-[35rem] xl:h-[25rem] 2xl:h-[30rem] bg-green-300 absolute xl:top-52 2xl:top-64 xl:left-[32rem] 2xl:left-[38rem]">
//         <div>
//           <div className="flex flex-col items-center justify-center w-20">
//             <p>📂</p>
//             <p className="">skills</p>
//           </div>
//           <div className="flex flex-col items-center justify-center w-20">
//             <p>📂</p>
//             <p className="">projects</p>
//           </div>
//           <div className="flex flex-col items-center justify-center w-20">
//             <p>📂</p>
//             <p className="">experience</p>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Desktop;

// "use client";
// import React from "react";
// import Image from "next/image";
// import desktopImage from "../public/desktop.png";

// const Desktop = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center overflow-hidden mt-20 lg:mt-10 relative mb-96">
//       <div className="absolute bg-green-300 w-[36%] h-[10rem] sm:h-[20rem] md:h-[22rem] lg:h-[33rem] xl:h-[40rem] z-10"></div>

//       <Image src={desktopImage} alt="desktop" className="relative z-0" />
//     </div>
//   );
// };

// export default Desktop;

"use client";
import React from "react";
import Image from "next/image";
import desktopImage from "../public/desktop.png";

const Desktop = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden mt-20 lg:mt-10 relative">
      {/* Responsive green div behind the image */}
      {/* <div
        className="absolute bg-green-300 z-0
          w-[8rem] h-[6rem] top-16 left-[9rem] sm:w-[25rem] sm:h-[20rem] md:w-[30rem] md:h-[25rem] lg:w-[35rem] lg:h-[30rem]
          sm:top-40 lg:top-64 2xl:left-[38rem]"
      ></div> */}
      <div className="absolute bg-green-300 w-[36%] h-[10rem] sm:h-[20rem] md:h-[22rem] lg:h-[33rem] xl:h-[40rem] 2xl:h-[44rem] z-10"></div>

      {/* Image component with a higher z-index */}
      <Image src={desktopImage} alt="desktop" className="relative z-0" />
    </div>
  );
};

export default Desktop;
