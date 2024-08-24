import Image from "next/image";
import punk from "../public/Paaji_Punk_2.0.png";
import cluds from "../public/clouds.png";
import leftFlower from "../public/left-flower.png";
import rightFlower from "../public/right-flower.png";

const landing = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
          </div>

          <div className="hidden absolute top-0 py-12 animate-marquee whitespace-nowrap md:flex">
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
            <Image
              src={cluds}
              alt="clouds"
              className="w-[280px] h-[300px] mr-4"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 md:flex items-center justify-center min-h-screen mt-36 md:mt-0">
        <div className="absolute top-96 md:top-52 left-0 z-0">
          <Image
            src={leftFlower}
            alt="left flowers"
            width={900}
            height={500}
            className=""
          />
        </div>
        <div className="text-center md:text-left z-10">
          <h1 className="text-6xl font-handwriting">
            <span className="text-blue-600">Hi, I'm</span>
            <span className="ml-2 text-pink-500">Samarjit</span>
          </h1>
          <p className="text-4xl font-handwriting text-blue-600">
            Software engineer by day, caffeine-fueled coder by night.
          </p>
        </div>
        <div className="z-10">
          <Image src={punk} width={500} height={500} alt="punk" className="" />
        </div>
        <div className="absolute top-96 md:top-52 right-0 z-0">
          <Image
            src={rightFlower}
            alt="left flowers"
            width={900}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default landing;
