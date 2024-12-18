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
        <div className="absolute bottom-0 md:top-52 left-0 z-0">
          <Image
            src={leftFlower}
            alt="left flowers"
            width={900}
            height={500}
            className=""
          />
        </div>
        <div className="text-center md:text-left z-10 lg:ml-32">
          <h1 className="text-4xl oi-regular">
            <span className="text-blue-600">Hi, I'm</span>
            <span className="ml-2 text-pink-500">Samarjit</span>
          </h1>
          <div className="text-4xl oi-regular text-blue-600 flex flex-col mt-5 gap-1">
            <p>Software engineer by day,</p>
            <p className="text-yellow-900">caffeine-fueled</p>
            <p>coder by night.</p>
          </div>
        </div>
        <div className="z-10">
          <Image src={punk} width={500} height={500} alt="punk" className="" />
        </div>
        <div className="absolute bottom-0 md:top-52 right-0 z-0">
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
