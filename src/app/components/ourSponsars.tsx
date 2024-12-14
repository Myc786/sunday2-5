import Image from 'next/image';
import Apple from "@/app/assets/Apple.png";
import Slake from "@/app/assets/Slack.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Google from "@/app/assets/Google.png";

const Sponsors = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-black">
          Our Sponsors
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex justify-center items-center">
          <Image src={Apple} alt="Apple" width={100} height={100} className="object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Microsoft} alt="Microsoft" width={150} height={35} className="object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Slake} alt="Slack" width={150} height={35} className="object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Google} alt="Google" width={120} height={40} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
