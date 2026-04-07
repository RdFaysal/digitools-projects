import React from "react";
import { FaCheck } from "react-icons/fa";

const SimplePricing = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-16">
     
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Simple, Transparent Pricing
        </h1>

        <p className="text-center text-gray-500 py-4 text-sm sm:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-stretch">
       
        <div className="card w-full bg-[#F9FAFC] shadow-sm">
          <div className="card-body flex flex-col h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Starter</h2>
              <p className="text-[#627382]">Perfect for getting started</p>
              <p className="text-2xl font-semibold my-3">
                $0<span className="text-sm text-[#627382]">/Month</span>
              </p>
            </div>

            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Basic templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Community support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />1 project per
                month
              </li>
            </ul>

            
            <div className="mt-auto pt-6">
              <button className="btn rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Second card  */}
        <div className="card w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md relative">
          <span className="badge badge-sm badge-warning absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </span>

          <div className="card-body flex flex-col h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Pro</h2>
              <p className="text-gray-200">Best for professionals</p>
              <p className="text-2xl font-semibold my-3">
                $29<span className="text-sm text-gray-200">/Month</span>
              </p>
            </div>

            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white text-xs" />
                Advanced analytics
              </li>
            </ul>

            
              <div className="mt-auto pt-6">
                <button className="btn rounded-3xl bg-white w-full ">
                  <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    Start Pro Trial
                  </span>
                </button>
              </div>
           
          </div>
        </div>

        {/* Third card */}
        <div className="card w-full bg-[#F9FAFC] shadow-sm ">
          <div className="card-body flex flex-col h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Enterprise</h2>
              <p className="text-[#627382]">For teams and businesses</p>
              <p className="text-2xl font-semibold my-3">
                $99<span className="text-sm text-[#627382]">/Month</span>
              </p>
            </div>

            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" />
                Custom branding
              </li>
            </ul>

            
            <div className="mt-auto pt-6">
              <button className="btn rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;
