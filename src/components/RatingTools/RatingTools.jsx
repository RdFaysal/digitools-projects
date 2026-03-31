import React from 'react';

const RatingTools = () => {
  return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
      
      <div className='flex justify-between items-center py-10 max-w-[700px] mx-auto'>

       
        <div className='flex-1 text-center border-r-2 border-white/30 px-6'>
          <p className='text-2xl lg:text-4xl font-semibold text-white'>50K+</p>
          <span className='text-white/70 text-sm'>Active Users</span>
        </div>

        
        <div className='flex-1 text-center border-r-2 border-white/30 px-6'>
          <p className='text-2xl lg:text-3xl font-bold text-white'>200+</p>
          <span className='text-white/70 text-sm'>Premium Tools</span>
        </div>

        
        <div className='flex-1 text-center px-6'>
          <p className='text-2xl lg:text-3xl font-bold text-white'>4.9</p>
          <span className='text-white/70 text-sm'>Rating</span>
        </div>

      </div>
    </div>
  );
};

export default RatingTools;
