import React from "react";
import RocketIcon from "../../assets/rocket.png";
import PackageIcon from "../../assets/package.png";
import UserIcon from "../../assets/user.png";

const CreateAccount = () => {
  return (
    <div className="bg-[#F9FAFC] py-16 px-4">

      
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Get Started In 3 Steps
      </h1>

      <p className="text-center text-gray-500 py-4 text-sm sm:text-base">
        Start using premium digital tools in minutes, not hours
      </p>

     
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 relative text-center hover:shadow-xl transition-all duration-300">

          <div className="absolute top-4 right-4">
            <span className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              01
            </span>
          </div>

          <figure className="flex justify-center mb-4 mt-10">
            <div className="bg-gray-100 p-4 rounded-full">
              <img src={UserIcon} alt="user" className="w-10 h-10" />
            </div>
          </figure>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Create Account</h2>
            <p className="text-gray-500 text-sm mb-8">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

        </div>

        
        <div className="bg-white shadow-md rounded-xl p-6 relative text-center hover:shadow-xl transition-all duration-300">

          <div className="absolute top-4 right-4">
            <span className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              02
            </span>
          </div>

          <figure className="flex justify-center mb-4 mt-10">
            <div className="bg-gray-100 p-4 rounded-full">
              <img src={PackageIcon} alt="package" className="w-10 h-10" />
            </div>
          </figure>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Choose Products</h2>
            <p className="text-gray-500 text-sm mb-8">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

        </div>

      
        <div className="bg-white shadow-md rounded-xl p-6 relative text-center hover:shadow-xl transition-all duration-300">

          <div className="absolute top-4 right-4">
            <span className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              03
            </span>
          </div>

          <figure className="flex justify-center mb-4 mt-10">
            <div className="bg-gray-100 p-4 rounded-full">
              <img src={RocketIcon} alt="rocket" className="w-10 h-10" />
            </div>
          </figure>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Start Creating</h2>
            <p className="text-gray-500 text-sm mb-8">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CreateAccount;
