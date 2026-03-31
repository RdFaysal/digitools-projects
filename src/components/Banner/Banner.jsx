import React from "react";
import playIcon from "../../assets/Play.png";
import heroIcon from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[1080px] mx-auto min-h-screen flex items-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6">
       
        <div className="w-full lg:w-[65%] space-y-5">
          
          <div className="bg-[#E1E7FF] py-2 px-4 rounded-3xl flex items-center gap-4 w-fit ">
            
            <span className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-30 animate-pulse"></span>
              <span className="absolute w-4 h-4 rounded-full bg-purple-500 opacity-50"></span>
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            </span>

            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text ">
             
              New: AI-Powered Tools Available
            </p>
          </div>

    
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
            Supercharge Your Digital Workflow
          </h1>

         
          <p className="text-sm text-[#627382] leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. <br /> Start creating faster today.
          </p>

      
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl cursor-pointer">
              Explore Products
            </button>

            <button
              className="px-5 py-2 border border-[#4F39F6] rounded-3xl cursor-pointer flex items-center justify-center gap-2 
               bg-transparent text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text"
            >
              <img src={playIcon} alt="play" className="w-4 h-4 " />
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img
            src={heroIcon}
            alt="hero"
            className="h-92 lg:h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
