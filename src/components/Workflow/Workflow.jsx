import React from "react";

const Workflow = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16 sm:py-20 px-4 md:px-0">
      
      <div className="max-w-[600px] mx-auto text-center text-white space-y-4">
        
      
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Ready To Transform Your Workflow?
        </h2>

        
        <p className="text-white/70 text-sm">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
          
          
          <button className="bg-white px-5 py-2.5 rounded-3xl text-sm ">
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>

         
          <button className="text-sm border border-white px-5 py-2.5 rounded-3xl hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

      
        <p className="text-white/70 text-xs sm:text-sm pt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Workflow;
