export default function Work2() {
  return (
    <div className="w-full h-auto py-12 px-6 bg-blue-900 flex flex-col items-center justify-center">
      {/* First Container */}
      <div className="flex flex-col items-center text-center">
        <div className="max-w-screen-lg w-full text-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Project Management
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-white mb-6 sm:mb-8">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <div className="flex justify-center">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#4F9CF9] rounded-lg text-sm md:text-base text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
