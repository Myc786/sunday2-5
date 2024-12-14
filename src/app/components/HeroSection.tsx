import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full h-auto py-20 px-6 sm:px-12 lg:px-24 bg-blue-950 flex flex-col lg:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="text-center lg:text-left">
        <div className="w-full lg:w-[656px] h-auto pt-6">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] text-white font-bold mb-4">
            Get More Done with Whitespace
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[30px] text-white mb-6">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
        </div>
        <div className="w-full lg:w-[219px] h-[63px] p-[20px] bg-[#4F9CF9] mt-6 rounded-lg flex justify-center items-center">
          <button className="w-full text-[16px] text-white font-semibold leading-[23px]">Try Whitespace Free</button>
        </div>
      </div>

      {/* Right Section (Image or Placeholder) */}
      <div className="w-full lg:w-[824px] h-[549px] bg-[#C4DEFD] mt-8 lg:mt-0"></div>
    </div>
  );
}
