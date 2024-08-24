import Image from "next/image";
import punk from "../public/Paaji_Punk_2.0.png";
import cluds from "../public/clouds.png";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-notebook bg-yellow-50 font-myfont overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden">
        <div className="flex animate-marquee">
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

      <div className="relative z-10 md:flex items-center justify-center min-h-screen mt-36 md:mt-0">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-handwriting">
            <span className="text-blue-600">Hi, I'm</span>
            <span className="ml-2 text-pink-500">Samarjit</span>
          </h1>
          <p className="text-4xl font-handwriting text-blue-600">
            Software engineer by day, caffeine-fueled coder by night.
          </p>
        </div>
        <div className="">
          <Image src={punk} width={500} height={500} alt="punk" />
        </div>
      </div>
    </main>
  );
}
