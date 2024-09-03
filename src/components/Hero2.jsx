import React from 'react';
import { motion } from 'framer-motion'; 
import ReactPlayer from 'react-player/youtube';
const Hero2 = () => {
  return (
    <div >
    <div className="flex  py-20 px-20   ml-11   w-25 max-w-50   rounded-sm justify-center mr-11 gap-5" >
        <div className='rounded-sm'>
        <ReactPlayer url={"https://www.youtube.com/watch?v=ePOglweqy7o"}/>
      </div>
      <div className='gap-10 '>
        <div className='features border-spacing-x-4'>
            <h1 className='text-xl font-bold max-w-md '>
            Elevate Your Network with Ease
            </h1>
            <p className='max-w-md opacity-30 font-bold'>Join alimini for free and start exploring alumni profiles, connecting with peers, or scheduling consultations.</p>
            </div>
            <div>
                 <h2 className='text-xl max-w-sm mt-10 font-bold  decoration-from-font'>
                        Post Opportunities and Find Top Talent
                </h2>
                <p className=' max-w-sm opacity-25 font-bold'>Simplify your search for talent by posting job opportunities or let us assist in finding the perfect fit for your needs.</p>
            </div>
            <div>
                <h2 className='text-xl max-w-sm mt-10 font-bold  decoration-from-font'>
                Collaborate with Excellence—Affordable Rates
                </h2>
                <p className='max-w-md opacity-30 font-bold'>Alimini offers a cost-effective way to connect with top professionals while benefiting from competitive transaction rates.</p>
            </div>
            <div className='mt-11 '>
            <a href="/Signup" className="py-2 px-5 mt-10 bg-blue-500 text-white rounded-lg  shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mr-4">Get Started</a>
            <a href="/Signup" className="py-2 px-5 mt-10 bg-blue-600 text-white rounded-lg  shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">Learn How to Hire</a>

            </div>
      </div>
      
    </div>
    </div>
  
  
  );
};

export default Hero2;
