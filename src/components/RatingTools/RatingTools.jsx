import React from 'react';

const RatingTools = () => {
  return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4'>

      <div className='flex flex-col sm:flex-row items-center justify-between py-10 max-w-[700px] mx-auto gap-6 sm:gap-0'>

       
        <div className='w-full sm:flex-1 text-center sm:border-r sm:border-white/30 px-4'>
          <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-white'>50K+</p>
          <span className='text-white/70 text-sm'>Active Users</span>
        </div>

        <div className='w-full sm:flex-1 text-center sm:border-r sm:border-white/30 px-4'>
          <p className='text-2xl sm:text-3xl lg:text-3xl font-bold text-white'>200+</p>
          <span className='text-white/70 text-sm'>Premium Tools</span>
        </div>

      
        <div className='w-full sm:flex-1 text-center px-4'>
          <p className='text-2xl sm:text-3xl lg:text-3xl font-bold text-white'>4.9</p>
          <span className='text-white/70 text-sm'>Rating</span>
        </div>

      </div>
    </div>
  );
};

export default RatingTools;
