import Image from "next/image";
import photo from "@/app/assets/photo.png";

export default function Work() {
  return (
    <div className="w-full h-auto pt-16 pb-16 px-6 sm:px-12 lg:px-24 bg-white">
      {/* First Container */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center mb-20 gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Project Management
          </h1>
          <p className="text-base sm:text-lg leading-6 sm:leading-7 text-black mb-6">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <div>
            <button className="px-6 py-3 bg-[#4F9CF9] rounded-lg text-sm md:text-base text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 bg-[#C4DEFD] rounded-lg flex justify-center items-center p-6">
          <p className="text-xl sm:text-2xl text-blue-900">Content goes here</p>
        </div>
      </div>

      {/* Second Container */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={photo}
            alt="Project illustration"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Project Management
          </h1>
          <p className="text-base sm:text-lg leading-6 sm:leading-7 text-black mb-6">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <div>
            <button className="px-6 py-3 bg-[#4F9CF9] rounded-lg text-sm md:text-base text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
