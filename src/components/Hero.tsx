import React from "react";
function HeroSection() {
  return (
    <section className="bg-slate-700 flex items-center min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-200 mb-4">
            Welcome to my webpage
          </h1>

          <p className="text-gray-200 text-lg lg:text-xl mb-6">
            Visit the amazing webpage and rate this site .
          </p>

          <button className="px-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
            buy now
          </button>

        </div>

        <div className="flex items-center justify-center">

          <img src="download.jfif" alt="Hero Image" className="rounded-lg shadow-lg"
           width={900} height={900} />

        </div>
      </div>
    </section>

  );
};

export default HeroSection