import Image from "next/image";
import punk from "../public/Paaji_Punk_2.0.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-notebook bg-yellow-50 font-myfont flex items-center justify-center">
      <div className="">
        <h1 className="text-6xl font-handwriting">
          <span className="text-blue-600">Hi, I'm</span>
          <span className="ml-2 text-pink-500">Samarjit</span>
        </h1>
        <p className="text-4xl font-handwriting text-blue-600">
          Software engineer by day, caffeine-fuled coder by night
        </p>
      </div>
      <div className="">
        <Image src={punk} width={500} height={500} alt="punk" />
      </div>
    </main>
  );
}
