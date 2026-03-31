import React from "react";
import playIcon from "../../assets/Play.png";
import heroIcon from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[1080px] mx-auto min-h-screen flex items-center px-4 py-16">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">

      
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">

          <div className="bg-[#E1E7FF] py-2 px-4 rounded-3xl flex items-center gap-3 w-fit mx-auto lg:mx-0">

            <span className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-30 animate-pulse"></span>
              <span className="absolute w-4 h-4 rounded-full bg-purple-500 opacity-50"></span>
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            </span>

            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text text-sm sm:text-base">
              New: AI-Powered Tools Available
            </p>

          </div>

        
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-wide leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          
          <p className="text-sm sm:text-base text-[#627382] leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

    
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

            <button className="px-5 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
              Explore Products
            </button>

            <button className="px-5 py-2 border border-[#4F39F6] rounded-3xl flex items-center justify-center gap-2 
              bg-transparent text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text">

              <img src={playIcon} alt="play" className="w-4 h-4" />
              Watch Demo

            </button>

          </div>

        </div>

        
        <div className="w-full lg:w-1/2 flex justify-center">

          <img
            src={heroIcon}
            alt="hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />

        </div>

      </div>
    </div>
  );
};

export default Banner;
